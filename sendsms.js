const Nexmo = require('nexmo');

const nexmo = new Nexmo({
	apiKey: '87b4224a',
	apiSecret: '76144a62',
});

const from = "Vonage APIs";
const to = "923218840145";
const text = "G Nauman sb, kya haal hai sir. Usman oladoc";

var result = nexmo.message.sendSms(from, to, text); 

console.log(result);