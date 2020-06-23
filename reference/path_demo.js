const path = require('path');

//Base file Name
console.log(path.basename(__filename));

//Directory Name
console.log(path.dirname(__filename));

//File Extension
console.log(path.extname(__filename));

//Create Path Object
console.log(path.parse(__filename));

//Concatnate Path
const myLoc = "myfilelocation"
console.log(path.join(__dirname,myLoc)); //Concatnates with forward slash