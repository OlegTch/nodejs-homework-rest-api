const { validateBody } = require('./validation');
const { ctrlWrapper } = require('./ctrlWrapper');
const auth = require('./auth');
const upload = require('./upload');

module.exports = { validateBody, ctrlWrapper, auth, upload };
