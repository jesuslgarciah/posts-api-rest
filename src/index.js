const express = require('express');

const config = require('./config/config');

const app = express();
const DB_URL = `mongodb+srv://${config.db.USER}:${config.db.PASSWORD}@${config.db.HOST}/${config.db.NAME}?retryWrites=true&w=majority`