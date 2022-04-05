const { Contact } = require('../../models');
const { HTTP_STATUS_CODE } = require('../../libs');

const updateContact = async (req, res, next) => {
  const contactId = req.params.contactId;
  const body = req.body;
  const contact = await Contact.findByIdAndUpdate(contactId, body, { new: true }); // findOneAndUpdate({_id: contactId}, {...body}, {new: true})
  if (!contact) {
    return res
      .status(HTTP_STATUS_CODE.NOT_FOUND)
      .json({ status: 'error', code: HTTP_STATUS_CODE.NOT_FOUND, message: 'Not found' });
  }
  return res.json({ status: 'success', code: HTTP_STATUS_CODE.OK, payload: { contact } });
};

module.exports = updateContact;
