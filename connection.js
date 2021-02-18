const isOnline = require('is-online');

(async() => {
	console.log(await isOnline());
})();