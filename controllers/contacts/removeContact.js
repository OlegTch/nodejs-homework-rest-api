const { Contact } = require('../../models');
const { HTTP_STATUS_CODE } = require('../../libs');

const removeContact = async (req, res, next) => {
  const contact = await Contact.findByIdAndRemove(req.params.contactId); // findOneAndRemove({_id: contactId})
  if (!contact) {
    return res
      .status(HTTP_STATUS_CODE.NOT_FOUND)
      .json({ status: 'error', code: HTTP_STATUS_CODE.NOT_FOUND, message: 'Not found' });
  }
  return res.json({ status: 'success', code: HTTP_STATUS_CODE.OK, payload: { contact } });
};

module.exports = removeContact;
