const { User } = require('../../models');
const { HTTP_STATUS_CODE } = require('../../libs');

const getCurrent = async (req, res) => {
  console.log(req.user);
  const { email, subscription } = req.user;
  res.json({
    status: 'succes',
    code: HTTP_STATUS_CODE.OK,
    ResponseBody: {
      user: {
        email,
        subscription,
      },
    },
  });
};

module.exports = getCurrent;
