const { Contact } = require('../../models');
const { HTTP_STATUS_CODE } = require('../../libs');

const getContactById = async (req, res, next) => {
  const { _id } = req.user;
  const { contactId } = req.params;

  const contact = await Contact.findOne({ _id: contactId, owner: _id }).populate(
    'owner',
    '_id email subscription'
  );
  // const contact = await Contact.findById(contactId)
  if (!contact) {
    return res
      .status(HTTP_STATUS_CODE.NOT_FOUND)
      .json({ status: 'error', code: HTTP_STATUS_CODE.NOT_FOUND, message: 'Not found' });
  }
  return res.json({ status: 'success', code: HTTP_STATUS_CODE.OK, payload: { contact } });
};

module.exports = getContactById;
