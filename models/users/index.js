const { User } = require('./user');
const { joiRegisterSchema, joiLoginSchema } = require('./usersValidationSchema');

module.exports = { User, joiRegisterSchema, joiLoginSchema };
