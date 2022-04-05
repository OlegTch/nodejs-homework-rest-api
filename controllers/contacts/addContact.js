const { Contact } = require('../../models');
const { HTTP_STATUS_CODE } = require('../../libs');

const addContact = async (req, res, next) => {
  const contact = await Contact.create(req.body);
  res
    .status(HTTP_STATUS_CODE.CREATE)
    .json({ status: 'success', code: HTTP_STATUS_CODE.CREATE, payload: { contact } });
};

module.exports = addContact;
