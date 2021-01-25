const users = require('./users');
const posts = require('./posts');

function routes(app){
  app.use('/api/users', users);
  app.use('/api/posts', posts)
}

module.exports = routes;
