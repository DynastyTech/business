const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();
const { buildOwnerEmail, buildClientEmail } = require('./emailTemplates');

const app = express();
const PORT = process.env.PORT || 5000;
const isProduction = process.env.NODE_ENV === 'production';
const SITE_NAME = process.env.SITE_NAME || 'Dynasty Tech Solutions';

// Middleware
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.json({ limit: '1mb' }));

const normalizeSingleLine = (value, maxLength = 250) =>
  String(value || '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLength);

const normalizeMessage = (value, maxLength = 4000) =>
  String(value || '')
    .replace(/\r\n/g, '\n')
    .trim()
    .slice(0, maxLength);

const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isEmailConfigured = () =>
  Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      (process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER)
  );

const createTransporter = () => {
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const secureFromEnv = process.env.SMTP_SECURE;
  const smtpSecure =
    typeof secureFromEnv === 'string'
      ? secureFromEnv.toLowerCase() === 'true'
      : smtpPort === 465;

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// API Routes
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Dynasty Tech Solutions API is running',
    emailEnabled: isEmailConfigured(),
  });
});

app.post('/api/contact', async (req, res) => {
  const name = normalizeSingleLine(req.body?.name, 120);
  const email = normalizeSingleLine(req.body?.email, 180).toLowerCase();
  const company = normalizeSingleLine(req.body?.company, 180);
  const service = normalizeSingleLine(req.body?.service, 180);
  const message = normalizeMessage(req.body?.message, 4000);

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and project details are required.',
    });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address.',
    });
  }

  if (!isEmailConfigured()) {
    return res.status(503).json({
      success: false,
      message:
        'Contact email is not configured yet. Please set SMTP environment variables.',
    });
  }

  try {
    const submittedAt = new Date();
    const transporter = createTransporter();
    const fromEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER;
    const fromName = process.env.SMTP_FROM_NAME || SITE_NAME;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || fromEmail;
    const supportEmail = process.env.CONTACT_REPLY_TO || receiverEmail;

    const ownerEmail = buildOwnerEmail({
      name,
      email,
      company,
      service,
      message,
      submittedAt,
      siteName: SITE_NAME,
    });

    const clientEmail = buildClientEmail({
      name,
      company,
      service,
      message,
      submittedAt,
      siteName: SITE_NAME,
      supportEmail,
    });

    await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: receiverEmail,
      replyTo: email,
      subject: ownerEmail.subject,
      text: ownerEmail.text,
      html: ownerEmail.html,
    });

    await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: email,
      replyTo: supportEmail,
      subject: clientEmail.subject,
      text: clientEmail.text,
      html: clientEmail.html,
    });

    return res.status(200).json({
      success: true,
      message:
        'Thanks for reaching out. We received your request and sent you a confirmation email.',
    });
  } catch (error) {
    console.error('Failed to send contact emails:', error);
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
  if (!isEmailConfigured()) {
    console.warn('⚠️ Contact email is disabled. Add SMTP env variables to enable /api/contact.');
  } else {
    console.log('✉️ Contact email integration is enabled.');
  }
  if (!isProduction) {
    console.log(`📱 React dev server should be running on http://localhost:3001`);
  }
});
