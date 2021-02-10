const models = require('../../database/models');

class UserController {

  async createUser(user) {
    const userCreate = await models.User.create(user);
    delete userCreate.dataValues.password;
    return userCreate;
  }

  async getUserById(id){
    const user = await models.User.findOne({
      where: { id }
    });
    return user;
  }

  async getUserByEmail(email){
    const user = await models.User.findOne({
      where: { email }
    });
    return user;
  }
}

module.exports = UserController;