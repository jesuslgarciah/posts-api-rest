const Joi = require('joi');
const { idUserSchema } = require('./user');

const createPostSchema = Joi.object({
  title: Joi.string().max(100).required(),
  content: Joi.string().required(),
  userId: idUserSchema,
  createdAt: Joi.date().required(),
  updatedAt: Joi.date().required(),
})

const updatePostSchema = Joi.object({
  title: Joi.string().max(100),
  content: Joi.string(),
  userId: idUserSchema,
  updatedAt: Joi.date().required(),
})

const idPostSchema = Joi.number();

module.exports = {
  createPostSchema,
  updatePostSchema,
  idPostSchema,
}