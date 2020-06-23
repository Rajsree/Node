// Module Wrapper function : Node wraps code in this function before execution
// (function(exports,module,require,__filename,__dirname){
//     ...
// })
console.log("Exports :" , exports);
console.log("Module :" , module);
console.log("Require :" , require);
console.log("Filename :" , __filename);
console.log("Dirname :" , __dirname);
var url = "http://mylogger.com"

function log(msg) {
    //send an HTTP request
    console.log(msg);
}

module.exports = log;   