const express = require('express');

const { auth, ctrlWrapper, validateBody, upload } = require('../../middlewares');
const { users: usersModel } = require('../../controllers');
const { subscriptionJoiSchema, resendEmailSchema } = require('../../models');

const router = express.Router();

router.get('/current', auth, ctrlWrapper(usersModel.getCurrent));

router.patch(
  '/:userId/subscription',
  auth,
  validateBody(subscriptionJoiSchema),
  ctrlWrapper(usersModel.updateSubscriptionUser)
);

router.patch(
  '/avatars',
  auth,
  // ctrlWrapper(upload.single('avatar')),
  upload.single('avatar'),
  ctrlWrapper(usersModel.avatar)
);

router.get('/verify/:verificationToken', ctrlWrapper(usersModel.verifyEmail));

router.post('/verify', validateBody(resendEmailSchema), ctrlWrapper(usersModel.resendVerifyEmail));

module.exports = router;
