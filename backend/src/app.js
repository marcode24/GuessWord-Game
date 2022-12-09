const express = require('express');
const cors = require('cors');

const app = express();

require('dotenv').config();

app.use(cors());
app.use(express.json());

const VERSION = '/api/v1';

app.use(`${VERSION}/category`, require('./routes/categoryRoute'));

app.get('*', (_, res) => {
  res.send('Word Guess API Working');
});

module.exports = app;
