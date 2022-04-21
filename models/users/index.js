const { User } = require('./user');
const {
  joiRegisterSchema,
  joiLoginSchema,
  subscriptionJoiSchema,
  avatarJoiSchema,
} = require('./usersValidationSchema');

module.exports = {
  User,
  joiRegisterSchema,
  joiLoginSchema,
  subscriptionJoiSchema,
  avatarJoiSchema,
};
