const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { User } = require('../../models');
const { HTTP_STATUS_CODE } = require('../../libs');
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  const passCompare = bcrypt.compareSync(password, user.password);

  if (!user || !user.verify || !passCompare) {
    return res.status(HTTP_STATUS_CODE.UNAUTHORIZED).json({
      status: 'error',
      code: HTTP_STATUS_CODE.UNAUTHORIZED,
      message: `Email is wrong or not verify, or password is wrong`,
    });
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
  const result = await User.findByIdAndUpdate(user._id, { token });
  const { subscription, avatarURL } = result;

  res.status(HTTP_STATUS_CODE.OK).json({
    status: 'success',
    code: HTTP_STATUS_CODE.OK,
    ResponseBody: {
      token,
      user: {
        email,
        subscription,
        avatarURL,
      },
    },
  });
};

module.exports = login;
