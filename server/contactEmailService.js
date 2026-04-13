const nodemailer = require('nodemailer');
const { buildOwnerEmail, buildClientEmail } = require('./emailTemplates');

class ContactEmailError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.name = 'ContactEmailError';
    this.statusCode = statusCode;
  }
}

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

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const normalizePayload = (payload = {}) => ({
  name: normalizeSingleLine(payload.name, 120),
  email: normalizeSingleLine(payload.email, 180).toLowerCase(),
  company: normalizeSingleLine(payload.company, 180),
  service: normalizeSingleLine(payload.service, 180),
  message: normalizeMessage(payload.message, 4000),
});

const isEmailConfigured = (env = process.env) =>
  Boolean(
    env.SMTP_HOST &&
      env.SMTP_PORT &&
      env.SMTP_USER &&
      env.SMTP_PASS &&
      (env.SMTP_FROM_EMAIL || env.SMTP_USER)
  );

const createTransporter = (env = process.env) => {
  const smtpPort = Number(env.SMTP_PORT || 587);
  const secureFromEnv = env.SMTP_SECURE;
  const smtpSecure =
    typeof secureFromEnv === 'string'
      ? secureFromEnv.toLowerCase() === 'true'
      : smtpPort === 465;

  return nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASS,
    },
  });
};

const sendContactEmails = async (rawPayload, env = process.env) => {
  const payload = normalizePayload(rawPayload);

  if (!payload.name || !payload.email || !payload.message) {
    throw new ContactEmailError(
      400,
      'Name, email, and project details are required.'
    );
  }

  if (!isValidEmail(payload.email)) {
    throw new ContactEmailError(400, 'Please provide a valid email address.');
  }

  if (!isEmailConfigured(env)) {
    throw new ContactEmailError(
      503,
      'Contact email is not configured yet. Please set SMTP environment variables.'
    );
  }

  const siteName = env.SITE_NAME || 'Dynasty Tech Solutions';
  const submittedAt = new Date();
  const transporter = createTransporter(env);
  const fromEmail = env.SMTP_FROM_EMAIL || env.SMTP_USER;
  const fromName = env.SMTP_FROM_NAME || siteName;
  const receiverEmail = env.CONTACT_RECEIVER_EMAIL || fromEmail;
  const supportEmail = env.CONTACT_REPLY_TO || receiverEmail;

  const ownerEmail = buildOwnerEmail({
    ...payload,
    submittedAt,
    siteName,
  });

  const clientEmail = buildClientEmail({
    ...payload,
    submittedAt,
    siteName,
    supportEmail,
  });

  await transporter.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to: receiverEmail,
    replyTo: payload.email,
    subject: ownerEmail.subject,
    text: ownerEmail.text,
    html: ownerEmail.html,
  });

  await transporter.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to: payload.email,
    replyTo: supportEmail,
    subject: clientEmail.subject,
    text: clientEmail.text,
    html: clientEmail.html,
  });

  return {
    success: true,
    message:
      'Thanks for reaching out. We received your request and sent you a confirmation email.',
  };
};

module.exports = {
  ContactEmailError,
  isEmailConfigured,
  sendContactEmails,
};

