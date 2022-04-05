const { Contact } = require('../../models');
const { HTTP_STATUS_CODE } = require('../../libs');

const listContacts = async (req, res) => {
  const contacts = await Contact.find({});
  res.json({ status: 'success', code: HTTP_STATUS_CODE.OK, payload: { contacts } });
};

module.exports = listContacts;
