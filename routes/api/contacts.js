const express = require('express');
const { contacts: contactModel } = require('../../controllers');
const { joiSchema, favoriteJoiSchema } = require('../../models');

const { auth, validateBody, ctrlWrapper } = require('../../middlewares');
const router = express.Router();

router.get('/', auth, ctrlWrapper(contactModel.listContacts));

router.get('/:contactId', auth, ctrlWrapper(contactModel.getContactById));

router.post('/', ctrlWrapper(auth), validateBody(joiSchema), ctrlWrapper(contactModel.addContact));

router.delete('/:contactId', auth, ctrlWrapper(contactModel.removeContact));

router.put('/:contactId', auth, validateBody(joiSchema), ctrlWrapper(contactModel.updateContact));

router.patch(
  '/:contactId/favorite',
  auth,
  validateBody(favoriteJoiSchema),
  ctrlWrapper(contactModel.updateStatusContact)
);

module.exports = router;
