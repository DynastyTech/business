# Dynasty Tech Solutions - Infrastructure

## 🚀 Automatic Deployment (Already Set Up!)

**Good news!** Since you've connected your GitHub repository to Vercel, automatic deployments are already configured:

- ✅ **Push to `main`** → Automatically deploys to production
- ✅ **Pull Requests** → Creates preview deployments
- ✅ **No additional scripts needed** for basic CI/CD

## 📁 Terraform Configuration (Optional)

The Terraform configuration in `terraform/` allows you to manage Vercel project settings as Infrastructure as Code. This is useful for:

- Managing environment variables
- Configuring build settings
- Setting up custom domains
- Version controlling your infrastructure

### Prerequisites

1. **Install Terraform**: https://developer.hashicorp.com/terraform/downloads
2. **Get Vercel API Token**:
   - Go to https://vercel.com/account/tokens
   - Create a new token
   - Save it securely

### Setup

```bash
# Navigate to terraform directory
cd infrastructure/terraform

# Set your Vercel API token
export VERCEL_API_TOKEN="your-token-here"

# Initialize Terraform
terraform init

# Preview changes
terraform plan

# Apply changes
terraform apply
```

### Configuration

Edit `variables.tfvars` with your values:

```hcl
project_name      = "dynasty-tech-solutions"
github_repo       = "DynastyTech/business"
production_branch = "main"
custom_domain     = "dynastytech.co.za"  # After purchasing
```

---

## 🌐 GoDaddy Domain Setup

### What You Need to Do:

1. **Purchase your domain** on GoDaddy (e.g., `dynastytech.co.za`)

2. **In Vercel Dashboard**:
   - Go to your project → Settings → Domains
   - Add your domain: `dynastytech.co.za`
   - Vercel will show you DNS records to configure

3. **In GoDaddy DNS Settings**:
   
   | Type  | Name | Value                          |
   |-------|------|--------------------------------|
   | A     | @    | `76.76.21.21`                  |
   | CNAME | www  | `cname.vercel-dns.com`         |

   **OR** use Vercel nameservers (recommended):
   - Change GoDaddy nameservers to:
     - `ns1.vercel-dns.com`
     - `ns2.vercel-dns.com`

4. **Wait for DNS propagation** (up to 48 hours, usually faster)

5. **Verify in Vercel** - Domain will show as "Valid Configuration" ✅

### SSL Certificate
Vercel automatically provisions and renews SSL certificates - no action needed!

---

## 📋 Quick Reference

### Vercel Dashboard
- **Project URL**: https://vercel.com/dashboard
- **Deployments**: https://vercel.com/[your-username]/dynasty-tech-solutions/deployments
- **Domain Settings**: https://vercel.com/[your-username]/dynasty-tech-solutions/settings/domains

### Useful Commands

```bash
# Check Vercel CLI (optional)
npm i -g vercel
vercel login
vercel --prod  # Manual deploy

# Terraform commands
terraform init      # Initialize
terraform plan      # Preview changes
terraform apply     # Apply changes
terraform destroy   # Remove resources
```

---

## 🔧 Troubleshooting

### Build Fails on Vercel
- Check build logs in Vercel dashboard
- Ensure `client/package.json` has all dependencies
- Verify build command: `cd client && npm run build`

### Domain Not Working
- Check DNS propagation: https://dnschecker.org
- Verify DNS records in GoDaddy
- Wait up to 48 hours for full propagation

### Environment Variables
- Add in Vercel Dashboard → Settings → Environment Variables
- Or use Terraform configuration

