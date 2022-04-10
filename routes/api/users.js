const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { users: usersModel } = require('../../controllers');
const router = express.Router();

router.get('/current', auth, ctrlWrapper(usersModel.getCurrent));

module.exports = router;
