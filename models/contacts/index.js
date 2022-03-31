const { Contact } = require('./contact');
const { joiSchema, favoriteJoiSchema } = require('./contacts-validation-schema');

module.exports = { Contact, joiSchema, favoriteJoiSchema };
