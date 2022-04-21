const { User } = require('../../models');
const { HTTP_STATUS_CODE } = require('../../libs');

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    return res
      .status(HTTP_STATUS_CODE.CONFLICT)
      .json({ status: 'error', code: HTTP_STATUS_CODE.CONFLICT, message: `Email ${email} in use` });
  }
  const newUser = await User.create(req.body);

  return res.status(HTTP_STATUS_CODE.CREATED).json({
    status: 'success',
    code: HTTP_STATUS_CODE.CREATED,
    ResponseBody: { user: { newUser } },
  });
};

module.exports = register;
