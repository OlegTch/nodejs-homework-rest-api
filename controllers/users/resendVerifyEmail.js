const { User } = require('../../models');
const { HTTP_STATUS_CODE } = require('../../libs');
const sendEmail = require('../../helpers');

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(HTTP_STATUS_CODE.BAD_REQUEST).json({
      status: 'error',
      code: HTTP_STATUS_CODE.BAD_REQUEST,
      message: `Email ${email} in not registered`,
    });
  }

  const { verify, verificationToken } = user;
  if (verify) {
    return res.status(HTTP_STATUS_CODE.BAD_REQUEST).json({
      status: 'error',
      code: HTTP_STATUS_CODE.BAD_REQUEST,
      message: `Verification has already been passed`,
    });
  }
  const mail = {
    to: email,
    subject: 'Resend confirmation email',
    html: `<a target="blank" href="http://localhost:3000/api/users/verify/${verificationToken}">To confirm email</a>`,
  };

  await sendEmail(mail);

  return res.status(HTTP_STATUS_CODE.OK).json({
    status: 'success',
    code: HTTP_STATUS_CODE.OK,
    message: `Verification email sent`,
  });
};

module.exports = resendVerifyEmail;
