const { Router } = require('express');
const router = Router();

const users = require('./users');
const posts = require('./posts');
const comments = require('./comments');

function routes(app){
  app.use('/api/users', users);
  app.use('/api/posts', posts);
  app.use('/api/comments', comments);
}

module.exports = routes;
