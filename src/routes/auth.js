const express = require('express');
const bcrypt = require('bcryptjs');

const router = express.Router();

const UserController = require('../controllers/users')
const response = require('../responses/response');
const validationHandler = require('../middleware/validationHandler');
const { loginUserSchema, createUserSchema } = require('../schema/user');

const userController = new UserController();

router.post('/login',
  validationHandler(loginUserSchema),
  async function(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await userController.getUserByEmail(email);
      response.success(req, res, user, 200);
    } catch (error) {
      response.error(req, res, error.message, error.status);
    }
  }
);

router.post('/register',
  validationHandler(createUserSchema),
  async function(req, res, next){
    try {
      const { username, email, password } = req.body;

      const userExist = await userController.getUserByEmail(email);
      if (userExist){
        response.error(req, res, 'The email already exists', 400)
      }

      const user = {
        username,
        email,
        password: await bcrypt.hash(password, 10),
        createdAt: new Date(),
        updatedAt: new Date()
      };
      const userCreated = await userController.createUser(user);
      response.success(req, res, userCreated, 201);
    } catch (error) {
      response.error(req, res, error.message, error.status);
    }
  }
);

module.exports = router;