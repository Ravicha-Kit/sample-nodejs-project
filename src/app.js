const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());

const allowedOrigins = ['http://localhost:4200'];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback('Origin not allowed by CORS');
    }
  }
}));

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'API is healthy' });
});

app.use('/api/auth', require('./routes/auth.route'));
app.use('/api/product', require('./routes/product.route'));
app.use('/api/common', require('./routes/common.route'));

module.exports = app;