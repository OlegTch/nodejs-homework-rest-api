const LIMIT_LENGTH_NAME = {
  minlength: 3,
  maxlength: 30,
};

const LIMIT_LENGTH_PHONE = {
  min: 7,
  max: 20,
  match: /^[0-9]/,
};

const LIMIT_LENGTH_PASSWORD = {
  minlength: 6,
  maxlength: 30,
};

module.exports = { LIMIT_LENGTH_NAME, LIMIT_LENGTH_PHONE, LIMIT_LENGTH_PASSWORD };
