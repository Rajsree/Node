const EventEmitter = require('events'); // Name begins with Capital to indicate it is a class
const uuid = require('uuid');

//Create Class
class MyEventLogger extends EventEmitter{
    log(msg) {
        //Call Event
        this.emit('message', {id : uuid.v4(), msg});
    }
}

module.exports = MyEventLogger;