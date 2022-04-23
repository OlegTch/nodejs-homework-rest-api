const { User } = require('./user');
const {
  joiRegisterSchema,
  joiLoginSchema,
  subscriptionJoiSchema,
  avatarJoiSchema,
  resendEmailSchema,
} = require('./usersValidationSchema');

module.exports = {
  User,
  joiRegisterSchema,
  joiLoginSchema,
  subscriptionJoiSchema,
  avatarJoiSchema,
  resendEmailSchema,
};
