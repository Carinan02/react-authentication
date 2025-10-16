const { sendEmail } = require("./sendEmail");

sendEmail({
  to: 'carinan02+test1@gmail.com',
  from: 'carinan02@gmail.com',
  subject: 'Does this work?',
  text: 'If you\'re reading this, then ... yes!!!',
}).then(() => { console.log('Email sent!') }).catch(e => console.log(e));