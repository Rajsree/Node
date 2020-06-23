const EventEmitter = require('events'); // Name begins with Capital to indicate it is a class

//Create class
class MyEmitter extends EventEmitter {}
//Init Object
const myEmitter = new MyEmitter();

//Event Listener - Register a listener
myEmitter.on('event', function(){console.log("Event ON")});

//Event Emitter - Raise or Signal an Event
myEmitter.emit('event');


//Note : Always register a listerner before emitting