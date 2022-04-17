const path = require('path');
const fs = require('fs/promises');
const { User } = require('../../models');
//
const updateAvatar = async (id, avatar, cloudId = null) => {
  return await User.findByIdAndUpdate(id, { avatar, cloudId }); // updateOne
};
//
class LocalStorage {
  constructor(file, user) {
    this.file = file;
    this.user = user;
    this.static = process.env.STATIC_FOLDER;
  }

  async save() {
    const destination = path.join(this.static, this.user.id);
    await fs.mkdir(destination, { recursive: true });
    await fs.rename(this.file.path, path.join(destination, this.file.filename));
    const avatarURL = path.normalize(path.join(this.user.id, this.file.filename));
    await updateAvatar(this.user.id, avatarURL);

    return avatarURL;
  }
}

module.exports = LocalStorage;
