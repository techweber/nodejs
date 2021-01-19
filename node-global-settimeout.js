function printHello(){
	console.log('Hello World');
}

// Now call the function every 2 seconds
var t = setTimeout(printHello,2000);

// Now clear the timer
clearTimeout(t);