const Joi = require("joi");
const response = require('../responses/response');

function validationHandler(schema, check="body"){
  return function(req, res, next){
    const error = validate(req[check], schema);

    error ? response.error(req, res, error, 400) : next();
  }
}

function validate(data, schema){
  const { error } = schema.validate(data, { errors: { stack: true } });
  return error;
}

module.exports = validationHandler;