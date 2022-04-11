const express = require('express');

const { auth, ctrlWrapper, validateBody } = require('../../middlewares');
const { users: usersModel } = require('../../controllers');
const { subscriptionJoiSchema } = require('../../models');
const router = express.Router();

router.get('/current', auth, ctrlWrapper(usersModel.getCurrent));

// router.patch(
//   '/current/subscription',
//   auth,
//   validateBody(subscriptionJoiSchema),
//   ctrlWrapper(usersModel.updateSubscriptionUser)
// );

module.exports = router;
