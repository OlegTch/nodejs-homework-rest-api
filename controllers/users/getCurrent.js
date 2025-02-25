const { User } = require('../../models');
const { HTTP_STATUS_CODE } = require('../../libs');

const getCurrent = async (req, res) => {
  const { email, subscription, avatarURL, verify, verificationToken } = req.user;
  res.json({
    status: 'succes',
    code: HTTP_STATUS_CODE.OK,
    ResponseBody: {
      user: {
        email,
        subscription,
        avatarURL,
        verify,
        verificationToken,
      },
    },
  });
};

module.exports = getCurrent;
