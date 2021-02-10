const { Router } = require('express');
const router = Router();

const auth = require('./auth');
const posts = require('./posts');
const comments = require('./comments');

function routes(app){
  app.use('/api/auth', auth);
  app.use('/api/posts', posts);
  app.use('/api/comments', comments);
}

module.exports = routes;
