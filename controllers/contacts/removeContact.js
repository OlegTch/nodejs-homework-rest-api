const { Contact } = require('../../models');
const { HTTP_STATUS_CODE } = require('../../libs');

const removeContact = async (req, res, next) => {
  const { _id } = req.user;
  // const contact = await Contact.findByIdAndRemove(req.params.contactId);
  const contact = await Contact.findByIdAndRemove({
    _id: req.params.contactId,
    owner: _id,
  }).populate('owner', '_id email subscription');

  if (!contact) {
    return res
      .status(HTTP_STATUS_CODE.NOT_FOUND)
      .json({ status: 'error', code: HTTP_STATUS_CODE.NOT_FOUND, message: 'Not found' });
  }
  return res.json({ status: 'success', code: HTTP_STATUS_CODE.OK, payload: { contact } });
};

module.exports = removeContact;
