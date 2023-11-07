var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'email@gmail.com',
        pass: 'password'
    }
});

var mailOptions = {
    from: 'email@gmail.com',
    to: 'differentEmail@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was eazy!'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.reponse);
    }
});

// you can send emails to multiple user by cancatenating the emails with commas 
// to: 'email@gmail.com' , 'differentEmail@gmail.com', 