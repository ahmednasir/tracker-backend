const mongoose = require('mongoose');
const { config } = require('../config/config');

const Schema = mongoose.Schema;
const mongooseConnection = mongoose.createConnection(config.MONGO_URL);

module.exports = {
  mongooseConnection,
  Schema
}

