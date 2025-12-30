# Dynasty Tech Solutions - Vercel Deployment Configuration
# This Terraform configuration manages Vercel project settings
# Note: Vercel automatically deploys from GitHub on push - this is for project configuration management

terraform {
  required_version = ">= 1.0.0"
  
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 1.0"
    }
  }
}

# Configure the Vercel Provider
# You'll need to set VERCEL_API_TOKEN environment variable
provider "vercel" {
  # API token is read from VERCEL_API_TOKEN environment variable
}

# Variables
variable "project_name" {
  description = "Name of the Vercel project"
  type        = string
  default     = "dynasty-tech-solutions"
}

variable "github_repo" {
  description = "GitHub repository in format 'owner/repo'"
  type        = string
  default     = "DynastyTech/business"  # Update this to your actual repo
}

variable "production_branch" {
  description = "Branch to deploy to production"
  type        = string
  default     = "main"
}

variable "custom_domain" {
  description = "Custom domain name (optional - add after purchasing from GoDaddy)"
  type        = string
  default     = ""  # e.g., "dynastytech.co.za"
}

# Get the Vercel team (if using team account)
# data "vercel_team" "main" {
#   name = "your-team-name"
# }

# Vercel Project Configuration
resource "vercel_project" "dynasty_tech" {
  name      = var.project_name
  framework = "create-react-app"
  
  git_repository = {
    type = "github"
    repo = var.github_repo
  }
  
  # Build & Development Settings
  build_command    = "cd client && npm run build"
  output_directory = "client/build"
  install_command  = "cd client && npm install"
  root_directory   = ""
  
  # Environment Variables (add as needed)
  environment = [
    {
      key    = "NODE_ENV"
      value  = "production"
      target = ["production"]
    },
    {
      key    = "REACT_APP_API_URL"
      value  = ""  # Add your API URL if needed
      target = ["production", "preview"]
    }
  ]
}

# Production Deployment (triggered automatically by GitHub pushes)
resource "vercel_deployment" "production" {
  project_id = vercel_project.dynasty_tech.id
  ref        = var.production_branch
  production = true
}

# Custom Domain Configuration (uncomment after purchasing domain)
# resource "vercel_project_domain" "custom" {
#   count      = var.custom_domain != "" ? 1 : 0
#   project_id = vercel_project.dynasty_tech.id
#   domain     = var.custom_domain
# }

# WWW subdomain redirect (uncomment after purchasing domain)
# resource "vercel_project_domain" "www" {
#   count      = var.custom_domain != "" ? 1 : 0
#   project_id = vercel_project.dynasty_tech.id
#   domain     = "www.${var.custom_domain}"
# }

# Outputs
output "project_id" {
  description = "Vercel Project ID"
  value       = vercel_project.dynasty_tech.id
}

output "deployment_url" {
  description = "Deployment URL"
  value       = vercel_deployment.production.url
}

output "domains" {
  description = "Project domains"
  value       = vercel_project.dynasty_tech.name
}

