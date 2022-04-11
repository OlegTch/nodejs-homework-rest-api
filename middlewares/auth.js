const jwt = require('jsonwebtoken');
const { HTTP_STATUS_CODE } = require('../libs');

const { User } = require('../models');

const { SECRET_KEY } = process.env;

const auth = async (req, res, next) => {
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(' ');

  try {
    if (bearer !== 'Bearer') {
      return res.status(HTTP_STATUS_CODE.UNAUTHORIZED).json({
        status: 'error',
        code: HTTP_STATUS_CODE.UNAUTHORIZED,
        message: 'Not authorized',
      });
    }

    const { id } = jwt.verify(token, SECRET_KEY);

    const user = await User.findById(id);
    if (!user || !user.token) {
      return res.status(HTTP_STATUS_CODE.UNAUTHORIZED).json({
        status: 'error',
        code: HTTP_STATUS_CODE.UNAUTHORIZED,
        message: 'Not authorized',
      });
    }
    req.user = user;
    next();
  } catch (error) {
    if (error.message === 'invalid signature' || 'Invalid signature') {
      return res.status(HTTP_STATUS_CODE.UNAUTHORIZED).json({
        status: 'error',
        code: HTTP_STATUS_CODE.UNAUTHORIZED,
        message: 'Not authorized',
      });
    }
    next(error);
  }
};

module.exports = auth;
