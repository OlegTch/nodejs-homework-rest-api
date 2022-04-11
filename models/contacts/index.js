const { Contact } = require('./contact');
const { joiSchema, favoriteJoiSchema } = require('./contactsValidationSchema');

module.exports = { Contact, joiSchema, favoriteJoiSchema };
