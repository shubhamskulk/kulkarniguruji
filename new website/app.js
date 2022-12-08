function sendEmail() {
	Email.send({
	Host: "kulkarniguruji123@.gmail.com",
	Username : "<sender’s email address>",
	Password : "<email password>",
	To : '<kulkarniguruji123@gmail.com’ email address>',
	From : "<sender’s email address>",
	Subject : "<email subject>",
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}
