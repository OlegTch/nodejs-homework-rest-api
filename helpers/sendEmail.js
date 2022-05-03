const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async data => {
  const email = { ...data, from: 'olgard984@gmail.com' };
  try {
    await sgMail.send(email);
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = sendEmail;

// const email = {
//   to: 'wasava4632@ovout.com',
//   from: 'olgard984@gmail.com',
//   subject: 'new request from the site',
//   html: '<p>You got a new request from the site</p>',
// };

// sgMail
//   .send(email)
//   .then(() => {
//     console.log('Email send success');
//   })
//   .catch(error => {
//     console.log(error.message);
//   });
