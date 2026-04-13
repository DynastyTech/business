const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');
require('dotenv').config();
const {
  ContactEmailError,
  isEmailConfigured,
  sendContactEmails,
} = require('./contactEmailService');

const app = express();
const PORT = process.env.PORT || 5000;
const isProduction = process.env.NODE_ENV === 'production';

// Middleware
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.json({ limit: '1mb' }));

// API Routes
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Dynasty Tech Solutions API is running',
    emailEnabled: isEmailConfigured(process.env),
  });
});

app.post('/api/contact', async (req, res) => {
  try {
    const result = await sendContactEmails(req.body, process.env);
    return res.status(200).json(result);
  } catch (error) {
    console.error('Failed to send contact emails:', error);

    if (error instanceof ContactEmailError) {
      return res.status(error.statusCode).json({
        success: false,
        message: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      message:
        'Your request could not be emailed right now. Please try again shortly.',
    });
  }
});

// Serve React app for all other routes ONLY in production
if (isProduction) {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`🚀 Dynasty Tech Solutions server running on port ${PORT}`);
  console.log(`🌐 Visit: http://localhost:${PORT}`);
  if (!isEmailConfigured(process.env)) {
    console.warn('⚠️ Contact email is disabled. Add SMTP env variables to enable /api/contact.');
  } else {
    console.log('✉️ Contact email integration is enabled.');
  }
  if (!isProduction) {
    console.log(`📱 React dev server should be running on http://localhost:3001`);
  }
});
