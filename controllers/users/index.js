const getCurrent = require('./getCurrent');

const updateSubscriptionUser = require('./updateSubscriptionUser');
const avatar = require('./updateAvatarUser');

const verifyEmail = require('./verifyEmail');
const resendVerifyEmail = require('./resendVerifyEmail');

module.exports = { getCurrent, updateSubscriptionUser, avatar, verifyEmail, resendVerifyEmail };
