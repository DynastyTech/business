const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const isProduction = process.env.NODE_ENV === 'production';

// Middleware
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Dynasty Tech Solutions API is running' });
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
  if (!isProduction) {
    console.log(`📱 React dev server should be running on http://localhost:3000`);
  }
});
