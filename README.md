# Dynasty Tech Solutions & Consulting - Portfolio Website

A modern, responsive portfolio website for Dynasty Tech Solutions & Consulting Pty Ltd, showcasing professional software development services, projects, and expertise.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Fully responsive across all devices
- **Interactive Elements**: Smooth scroll animations and hover effects
- **Business Focus**: Professional presentation of services and capabilities
- **Contact Form**: Integrated contact form for client inquiries
- **Project Showcase**: Featured projects with GitHub integration
- **Skills Display**: Comprehensive technical skills presentation
- **Personal Touch**: Hobbies and personal interests section

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Tailwind CSS** - Utility-first CSS framework for rapid development
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, customizable icons
- **React Intersection Observer** - Scroll-triggered animations

### Backend
- **Node.js** - Server-side JavaScript runtime
- **Express.js** - Fast, unopinionated web framework
- **Nodemailer** - SMTP email delivery for contact enquiries
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware
- **Compression** - Response compression

## 📱 Sections

1. **Hero** - Compelling introduction with call-to-action
2. **About** - Company background and mission
3. **Services** - Comprehensive service offerings
4. **Projects** - Featured projects and portfolio
5. **Skills** - Technical expertise and capabilities
6. **Hobbies** - Personal interests and traits
7. **Contact** - Contact form and information
8. **Footer** - Company links and social media

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install client dependencies
   cd client
   npm install
   cd ..
   ```

3. **Start development servers**
   ```bash
   # Start both frontend and backend
   npm run dev
   
   # Or start them separately:
   npm run server    # Backend server (port 5000)
   npm run client    # Frontend (port 3000)
   ```

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## 🌐 Access

- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000
- **Production**: http://localhost:5000 (serves built React app)

## 📁 Project Structure

```
Portfolio/
├── server/                 # Backend server
│   └── index.js           # Express server setup
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/               # Source code
│   │   ├── components/    # React components
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   ├── package.json       # Frontend dependencies
│   └── tailwind.config.js # Tailwind configuration
├── package.json            # Root dependencies
└── README.md              # This file
```

## 🎨 Customization

### Colors
Edit `client/tailwind.config.js` to customize the color scheme:
- Primary colors (blues)
- Secondary colors (grays)
- Accent colors (yellows/oranges)

### Content
Update component files in `client/src/components/` to modify:
- Company information
- Services offered
- Project details
- Contact information
- Personal details

### Styling
Modify `client/src/index.css` for custom CSS classes and animations.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Environment Variables
Create a `.env` file in the root directory:
```env
PORT=5000
NODE_ENV=production
SITE_NAME=Dynasty Tech Solutions

# SMTP email integration (required for /api/contact)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
SMTP_FROM_EMAIL=hello@dynastytech.co.za
SMTP_FROM_NAME=Dynasty Tech Solutions
CONTACT_RECEIVER_EMAIL=lraseemela@gmail.com
CONTACT_REPLY_TO=lraseemela@gmail.com

# Optional for local frontend -> backend calls
# REACT_APP_API_BASE_URL=http://localhost:5000
```

## ✉️ Contact Form Email Flow

When a visitor submits **Start Your Project**:
1. An enquiry email is sent to `CONTACT_RECEIVER_EMAIL`.
2. A branded confirmation copy is sent to the visitor's email.
3. Both emails are generated from custom HTML templates in `server/emailTemplates.js`.

API endpoint: `POST /api/contact`

## 🔧 Available Scripts

- `npm run dev` - Start both frontend and backend in development
- `npm run server` - Start backend server only
- `npm run client` - Start frontend development server
- `npm run build` - Build frontend for production
- `npm start` - Start production server
- `npm run install-all` - Install all dependencies

## 📞 Contact Information

- **Email**: lraseemela@gmail.com
- **GitHub**: [@HackerWithDrip](https://github.com/HackerWithDrip)
- **LinkedIn**: [Lionel Raseemela](https://www.linkedin.com/in/lionel-raseemela-46090ab9/)
- **Location**: Sandton, Gauteng, South Africa

## 🌟 Key Features

### Business Focus
- Professional service presentation
- Clear value proposition
- Call-to-action buttons throughout
- Service categorization

### Technical Excellence
- Modern React patterns
- Optimized performance
- SEO-friendly structure
- Accessibility considerations

### User Experience
- Smooth scrolling navigation
- Interactive animations
- Responsive design
- Fast loading times

## 📈 Performance

- Optimized images and assets
- Lazy loading for components
- Efficient animations
- Minimal bundle size

## 🔒 Security

- Helmet.js security headers
- CORS configuration
- Input validation
- Secure form handling

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please contact:
- **Email**: lraseemela@gmail.com
- **GitHub Issues**: Create an issue in the repository

---

**Built with ❤️ by Dynasty Tech Solutions & Consulting Pty Ltd**
