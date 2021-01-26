const Nexmo = require('nexmo');

const nexmo = new Nexmo({
	apiKey: 'xxxxxxxx',
	apiSecret: 'xxxxxxxx',
});

const from = "Vonage APIs";
const to = "xxxxxxxxxxxx";
const text = "Hi from Node JS";

var result = nexmo.message.sendSms(from, to, text); 

console.log(result);