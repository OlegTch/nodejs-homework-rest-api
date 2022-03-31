const Joi = require('joi');
const { LIMIT_LENGTH_NAME } = require('../../libs');

const joiSchema = Joi.object({
  name: Joi.string()
    .min(LIMIT_LENGTH_NAME.minlength)
    .max(LIMIT_LENGTH_NAME.maxlength)
    .required()
    .messages({
      'any.required': 'missing required name field',
      'string.empty': "field 'name' is not allowed to be empty",
    }),
  email: Joi.string().email().required().messages({
    'any.required': 'missing required email field',
    'string.empty': "field 'email' is not allowed to be empty",
  }),

  phone: Joi.string()
    .pattern(/^[0-9]{7,20}$/)
    .required()
    .messages({
      'any.required': 'missing required phone field',
      'string.empty': "field 'phone' is not allowed to be empty",
    }),

  favorite: Joi.boolean().optional().messages({
    'any.required': 'missing field favorite',
    'string.empty': "field 'favorite' can be 'true' ore 'false'",
  }),
});

const favoriteJoiSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

// const schemaCreateContact = joiSchema;

// const schemaUpdateContact = joiSchema;

// module.exports = { schemaCreateContact, schemaUpdateContact, joiSchema };
module.exports = { joiSchema, favoriteJoiSchema };
