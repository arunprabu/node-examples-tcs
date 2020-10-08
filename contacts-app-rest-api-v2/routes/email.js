var express = require('express');
var router = express.Router();
const sgMail = require('@sendgrid/mail');

/* send email listing. */
router.get('/', function(req, res, next) {
  console.log('Before Sending EMail');
  const sendgridAPIKey = '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';

  sgMail.setApiKey(sendgridAPIKey);

  const msg = {
    to: 'yokeke2780@jarilusua.com',
    from: 'test@example.com', // Use the email address or domain you verified above
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  sgMail.send(msg)
      .then( (status) => {
        console.log(status);
        res.json({status: 'Email Sent'});
      });

  console.log('After sending Email');
});

module.exports = router;