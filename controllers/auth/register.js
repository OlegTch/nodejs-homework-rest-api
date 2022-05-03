const { User } = require('../../models');
const { nanoid } = require('nanoid');
const sendEmail = require('../../helpers');

const { HTTP_STATUS_CODE } = require('../../libs');

const register = async (req, res) => {
  const { email, password } = req.body;
  // const { email, password, subscription = 'starter' } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    return res
      .status(HTTP_STATUS_CODE.CONFLICT)
      .json({ status: 'error', code: HTTP_STATUS_CODE.CONFLICT, message: `Email ${email} in use` });
  }
  const verificationToken = nanoid();
  // const newUser = await User.create(req.body);
  // const newUser = await User.create({ email, password, verificationToken, subscription });
  const newUser = await User.create({ email, password, verificationToken });

  const mail = {
    to: email,
    subject: 'Confirmation email',
    html: `<a target="blank" href="http://localhost:3000/api/users/verify/${verificationToken}">To confirm email</a>`,
  };

  await sendEmail(mail);

  return res.status(HTTP_STATUS_CODE.CREATED).json({
    status: 'success',
    code: HTTP_STATUS_CODE.CREATED,
    ResponseBody: { user: { newUser } },
  });
};

module.exports = register;
