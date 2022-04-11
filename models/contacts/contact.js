const { Schema, model } = require('mongoose');
const { LIMIT_LENGTH_NAME, LIMIT_LENGTH_PHONE } = require('../../libs');

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
      minlength: LIMIT_LENGTH_NAME.minlength,
      maxlength: LIMIT_LENGTH_NAME.maxlength,
    },

    email: {
      type: String,
    },

    phone: {
      type: String,
      min: LIMIT_LENGTH_PHONE.min,
      max: LIMIT_LENGTH_PHONE.max,
      match: LIMIT_LENGTH_PHONE.match,
    },

    favorite: {
      type: Boolean,
      default: false,
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },

  { versionKey: false, timestamps: true }
);

const Contact = model('contact', contactSchema);

module.exports = { Contact };
