'use strict';
const nodemailer = require('nodemailer');

// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
  
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        service:'Zoho',
        host: this.service,
        port:587,
        secure: false,
        auth: {
            user: 'nyan',
            pass: 'chu'
        }
      });
  
      // setup email data with unicode symbols
      let mailOptions = {
          from: 'dusk41@zoho.com', // sender address
          to: 'rchaser14@yahoo.co.jp', // list of receivers
          subject: 'Hello ✔', // Subject line
          text: 'Hello world?', // plain text body
          html: '<b>Hello world?</b>' // html body
      };
  
      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);
          // Preview only available when sending through an Ethereal account
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
          // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
          // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      });
  });