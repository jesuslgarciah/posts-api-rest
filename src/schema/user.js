const Joi = require('joi');

const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp(/[a-z]{1,}/)).pattern(new RegExp(/[A-Z]{1,}/)).pattern(new RegExp(/[0-9]{1,}/)).min(8).required(),
})

const createUserSchema = Joi.object({
  username: Joi.string().min(3).max(20).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp(/[a-z]{1,}/)).pattern(new RegExp(/[A-Z]{1,}/)).pattern(new RegExp(/[0-9]{1,}/)).min(8).required(),
});

const updateUserSchema = Joi.object({
  username: Joi.string().min(3).max(20),
  email: Joi.string().email(),
  password: Joi.string().pattern(new RegExp(/[a-z]{1,}/)).pattern(new RegExp(/[A-Z]{1,}/)).pattern(new RegExp(/[0-9]{1,}/)).min(8),
});

const emailUserSchema = Joi.string().email();

const idUserSchema = Joi.number();

module.exports = {
  loginUserSchema,
  createUserSchema,
  updateUserSchema,
  emailUserSchema,
  idUserSchema,
}
