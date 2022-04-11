const { Contact } = require('../../models');
const { HTTP_STATUS_CODE, CONTACTS_PAGES, CONTACTS_LIMIT } = require('../../libs');

const listContacts = async (req, res) => {
  const { _id } = req.user;
  const { page = CONTACTS_PAGES, limit = CONTACTS_LIMIT, favorite } = req.query;
  const skip = (page - CONTACTS_PAGES) * limit;

  let ownerContacts = null;
  if (favorite) {
    ownerContacts = { $and: [{ owner: _id }, { favorite }] };
  } else {
    ownerContacts = { owner: _id };
  }

  const allContacts = await Contact.find({ owner: _id });

  const contacts = await Contact.find(ownerContacts, '', {
    skip,
    limit: Number(limit),
  }).populate('owner', '_id email subscription');

  res.json({
    status: 'success',
    code: HTTP_STATUS_CODE.OK,
    payload: { contacts, totalContacts: allContacts.length, pagesNumber: page },
  });
};

module.exports = listContacts;
