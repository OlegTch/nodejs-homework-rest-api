const Joi = require('joi');
const { LIMIT_LENGTH_PASSWORD } = require('../../libs');

const joiRegisterSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': 'missing required email field',
    'string.empty': "field 'email' is not allowed to be empty",
  }),

  password: Joi.string().required().min(LIMIT_LENGTH_PASSWORD.minlength).messages({
    'any.required': 'missing required password field',
    'string.empty': "field 'password' is not allowed to be empty",
  }),
  subscription: Joi.string().optional(),
  token: Joi.string().optional(),
});

const joiLoginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': 'missing required email field',
    'string.empty': "field 'email' is not allowed to be empty",
  }),

  password: Joi.string().required().min(LIMIT_LENGTH_PASSWORD.minlength).messages({
    'any.required': 'missing required password field',
    'string.empty': "field 'password' is not allowed to be empty",
  }),
});

const subscriptionJoiSchema = Joi.object({
  subscription: Joi.string().required().messages({
    'any.required': "field 'subscription' mast be 'starter', 'pro' or 'business'",
  }),
});

module.exports = { joiRegisterSchema, joiLoginSchema, subscriptionJoiSchema };
