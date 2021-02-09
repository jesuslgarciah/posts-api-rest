const express = require('express');

const router = express.Router();

const UserController = require('../controllers/users')
const response = require('../responses/response');

const userController = new UserController();

router.get('/', async function(req, res, next) {
  try {
    const user = await userController.getUserById();
    response.success(req, res, user, 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
})

module.exports = router;