const {
  ContactEmailError,
  sendContactEmails,
} = require('../server/contactEmailService');

const parseBody = (body) => {
  if (!body) return {};
  if (typeof body === 'object') return body;

  try {
    return JSON.parse(body);
  } catch (error) {
    return {};
  }
};

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
    });
  }

  try {
    const payload = parseBody(req.body);
    const result = await sendContactEmails(payload, process.env);
    return res.status(200).json(result);
  } catch (error) {
    if (error instanceof ContactEmailError) {
      return res.status(error.statusCode).json({
        success: false,
        message: error.message,
      });
    }

    console.error('Vercel contact handler error:', error);
    return res.status(500).json({
      success: false,
      message:
        'Your request could not be emailed right now. Please try again shortly.',
    });
  }
};

