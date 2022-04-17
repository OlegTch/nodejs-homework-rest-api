const { User } = require('../../models');
const { HTTP_STATUS_CODE } = require('../../libs');

const updateSubscriptionUser = async (req, res, next) => {
  // const { email, subscription } = req.user;
  const body = req.body;
  const { userId } = req.params;

  const user = await User.findOneAndUpdate({ _id: userId }, { ...body }, { new: true });

  if (!user) {
    return res
      .status(HTTP_STATUS_CODE.NOT_FOUND)
      .json({ status: 'error', code: HTTP_STATUS_CODE.NOT_FOUND, message: 'Not found' });
  }

  return res.json({
    status: 'success',
    code: HTTP_STATUS_CODE.OK,
    ResponseBody: {
      user: {
        id: user._id,
        email: user.email,
        subscription: user.subscription,
        avatarURL: user.avatarURL,
      },
    },
  });
};

module.exports = updateSubscriptionUser;
