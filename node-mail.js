var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'usman.nxb@gmail.com',
		pass: 'n0deGmail21'
	}
});

var mailOptions = {
	from: 'usman.nxb@gmail.com',
	to: 'umahmood@gmail.com',
	subject: 'Sending email using Node JS',
	html: '<table border=1><tr><td><h1>Welcome to my world of Node jS</h1></td></tr><tr><td><h1>Second row in table email html</h1></td></tr></table>'
};

transporter.sendMail(mailOptions, function(error,info){
	if(error){
		console.log(error);
	} else {
		console.log('Email sent: ' + info.response);
	}
});

