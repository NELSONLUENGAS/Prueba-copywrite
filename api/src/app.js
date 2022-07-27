const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes/index.js');

require('./db.js');

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(morgan('dev'));
server.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'PUT', 'POST', 'OPTIONS', 'DELETE', 'HEAD', 'PATCH'],
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
  credentials: true
}));
server.use('/', routes);

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
