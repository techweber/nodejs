var events = require('events');
var eventEmitter = new events.EventEmitter();

// Create an event handler

var myEventHandler = function() {
	console.log('I hear a scream');
}

var myEventHandlerTwo = function() {
	console.log('Happy New Year 2021');
}


// Assign the event handler to an event

eventEmitter.on('scream',myEventHandler);
eventEmitter.on('newyear',myEventHandlerTwo);


// Fire the scream event
eventEmitter.emit('scream');
eventEmitter.emit('newyear');