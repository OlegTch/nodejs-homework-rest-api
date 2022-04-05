const express = require('express');
const contactModel = require('../../controllers');
const { joiSchema, favoriteJoiSchema } = require('../../models');

const { validateBody } = require('../../middlewares');
const router = express.Router();

router.get('/', contactModel.listContacts);

router.get('/:contactId', contactModel.getContactById);

router.post('/', validateBody(joiSchema), contactModel.addContact);

router.delete('/:contactId', contactModel.removeContact);

router.put('/:contactId', validateBody(joiSchema), contactModel.updateContact);

router.patch(
  '/:contactId/favorite',
  validateBody(favoriteJoiSchema),
  contactModel.updateStatusContact
);

module.exports = router;
