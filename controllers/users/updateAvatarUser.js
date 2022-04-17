const { HTTP_STATUS_CODE } = require('../../libs');
const { AvatarService } = require('../../services');
const { LocalStorage } = require('../../services/');
// const { CloudStorage } = require('../../services/');

const avatar = async (req, res, next) => {
  const avatarService = new AvatarService(LocalStorage, req.file, req.user);
  // const avatarService = new AvatarService(CloudStorage, req.file, req.user);

  const avatarURL = await avatarService.update();

  return res.json({
    status: 'success',
    code: HTTP_STATUS_CODE.OK,
    ResponseBody: { avatarURL: avatarURL },
  });
};

module.exports = avatar;
