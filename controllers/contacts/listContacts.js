const { Contact } = require('../../models');
const { HTTP_STATUS_CODE } = require('../../libs');

const listContacts = async (req, res) => {
  const { _id } = req.user;
  const contacts = await Contact.find({ owner: _id }).populate('owner', '_id email subscription');
  res.json({ status: 'success', code: HTTP_STATUS_CODE.OK, payload: { contacts } });
};

module.exports = listContacts;
