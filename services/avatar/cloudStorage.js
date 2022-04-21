const cloudinary = require('cloudinary').v2;
const { promisify } = require('util');
const { unlink } = require('fs/promises');
const Users = require('../../controllers/users');
const { FOLDER_CLOUD_AVATAR } = require('../../libs');

const { User } = require('../../models');

const updateAvatar = async (id, avatar, cloudId = null) => {
  return await User.findByIdAndUpdate(id, { avatar, cloudId }); // updateOne
};
//

cloudinary.config({
  cloud_name: 'dguzeutl3',
  api_key: '568785917149459',
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true,
});

class CloudStorage {
  constructor(file, user) {
    this.file = file;
    this.user = user;
    this.uploadToCloud = promisify(cloudinary.uploader.upload);
  }
  async save() {
    const response = await this.uploadToCloud(this.file.path, {
      public_id: this.user.cloudId,
      folder: FOLDER_CLOUD_AVATAR,
    });
    const { public_id: cloudId, secure_url: avatarURL } = response;

    await updateAvatar(this.user.id, avatarURL, cloudId.replace(`${FOLDER_CLOUD_AVATAR}/`, ''));
    try {
      await unlink(this.file.path);
    } catch (error) {
      console.error(error);
    }
    return avatarURL;
  }
}

module.exports = CloudStorage;
