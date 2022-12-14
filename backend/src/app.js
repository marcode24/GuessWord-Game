const express = require('express');
const cors = require('cors');

const app = express();

require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use(express.static('public'));

const VERSION = '/api/v1';

app.use(`${VERSION}/category`, require('./routes/categoryRoute'));
app.use(`${VERSION}/topic`, require('./routes/topicRoute'));
app.use(`${VERSION}/question`, require('./routes/questionRoute'));

app.get('/', (_, res) => {
  res.sendFile('index.html', { root: 'public' });
});

module.exports = app;
