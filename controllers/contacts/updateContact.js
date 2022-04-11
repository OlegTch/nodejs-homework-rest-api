const { Contact } = require('../../models');
const { HTTP_STATUS_CODE } = require('../../libs');

const updateContact = async (req, res, next) => {
  const contactId = req.params.contactId;
  const body = req.body;
  const { _id } = req.user;

  const contact = await Contact.findOneAndUpdate(
    { _id: contactId, owner: _id },
    { ...body },
    { new: true }
  ).populate('owner', '_id email subscription');
  // const contact = await Contact.findByIdAndUpdate(contactId, body, { new: true });
  if (!contact) {
    return res
      .status(HTTP_STATUS_CODE.NOT_FOUND)
      .json({ status: 'error', code: HTTP_STATUS_CODE.NOT_FOUND, message: 'Not found' });
  }
  return res.json({ status: 'success', code: HTTP_STATUS_CODE.OK, payload: { contact } });
};

module.exports = updateContact;
