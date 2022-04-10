const { Contact } = require('../../models');
const { HTTP_STATUS_CODE } = require('../../libs');

const addContact = async (req, res, next) => {
  const { _id } = req.user;
  const contact = await Contact.create({ ...req.body, owner: _id });
  res
    .status(HTTP_STATUS_CODE.CREATED)
    .json({ status: 'success', code: HTTP_STATUS_CODE.CREATED, payload: { contact } });
};

module.exports = addContact;
