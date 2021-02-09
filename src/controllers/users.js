const models = require('../../database/models');

class UserController {
  async getUserById (){
    const user = await models.User.findOne({
      where: { id: 1 }
    });

    return user;
  }
}

module.exports = UserController;