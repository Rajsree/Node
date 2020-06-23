const Person = require('./person');
const logger = require('./logger');
const myEventlogger = require('./eventLogger');

// console.log(person.name)
const p1 = new Person('Jon', 30)
p1.greetings();


logger("HII");


var name = "Raji This is to demostrate template string";
//TEMPLATE STRING - To avoid usage of concatnation console.log("" +name)
//ES6 //ES2015 : ECMASTRING2015
console.log(`Hello ${name}`) 

//Create Instance becauce myEventLogger is a class that is exported.
const myEvent = new myEventlogger();
//Listen Event logs 
myEvent.on('message', (data)=> {console.log("Event ON with data : ",data)})
//Calling event log
myEvent.log("HELOO RAJII")