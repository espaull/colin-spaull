const express = require('express');
const mongoose = require('mongoose');
const users = require('./middleware/users');

const app = express();
const port = process.env.PORT || 5000;

mongoose
  .connect('mongodb://localhost/colin-spaull', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB...');
    start();
  })
  .catch(err => console.error('Could not connect to MongoDB', err));

const start = () => {
  app.use('/api/users', users);

  app.listen(port, () => console.log(`Listening on port ${port}...`));
};
