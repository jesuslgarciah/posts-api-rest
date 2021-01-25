const users = require('../components/users/router');
const posts = require('../components/posts/router');

function routes(app){
  app.use('/api/users', users);
  app.use('/api/posts', posts)
}

module.exports = routes;
