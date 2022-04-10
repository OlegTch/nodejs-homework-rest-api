const express = require('express');

const { auth, validateBody, ctrlWrapper } = require('../../middlewares');
const { auth: authModel } = require('../../controllers');
const { joiRegisterSchema, joiLoginSchema } = require('../../models/users');

const router = express.Router();

router.post('/signup', validateBody(joiRegisterSchema), ctrlWrapper(authModel.register));
// router.post('/register')
router.post('/login', validateBody(joiLoginSchema), ctrlWrapper(authModel.login));
router.get('/logout', auth, ctrlWrapper(authModel.logout));

module.exports = router;
