const models = require('../../database/models');

class UserController {
  async getUserById (){
    const user = await models.User.findAll();

    return user;
  }
}

module.exports = UserController;