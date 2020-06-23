const os = require('os');

//Platform
console.log(os.platform());

//CPU Arch
console.log(os.arch());

//CPU core Info
console.log(os.cpus());

//Free memory
console.log("Free Memeory : ",os.freemem());

//Total memory
console.log("Total Memeory : ",os.totalmem());

//Home Directory
console.log("Home Directory :",os.homedir());

//Uptime
console.log("UPTIME : ",os.uptime());
