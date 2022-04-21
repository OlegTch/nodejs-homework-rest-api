const { User } = require('../../models');
const { HTTP_STATUS_CODE } = require('../../libs');

const logout = async (req, res) => {
  const { _id } = req.user;

  await User.findByIdAndUpdate(_id, { token: null });

  return res
    .status(HTTP_STATUS_CODE.NO_CONTENT)
    .json({ status: 'success', code: HTTP_STATUS_CODE.NO_CONTENT, message: `No content` });
};

module.exports = logout;
