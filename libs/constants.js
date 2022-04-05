const LIMIT_LENGTH_NAME = {
  minlength: 3,
  maxlength: 30,
};

const LIMIT_LENGTH_PHONE = {
  min: 7,
  max: 20,
  match: /^[0-9]/,
};

const HTTP_STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

module.exports = { LIMIT_LENGTH_NAME, LIMIT_LENGTH_PHONE, HTTP_STATUS_CODE };
