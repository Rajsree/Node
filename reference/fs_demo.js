const fs = require('fs');
const path = require('path');


//Create folder
fs.mkdir(path.join(__dirname,'/test'), {}, err => {
    if(err) throw err;
    console.log("Folder Created")
}); 

//Create and write file
fs.writeFile(path.join(__dirname,'/test','hello.txt'), 'Hello World!!', err => {
    if(err) throw err;
    console.log("File Created")
        //Append file
        fs.appendFile(path.join(__dirname,'/test','hello.txt'), 'I love Nodejs', err => {
            if(err) throw err;
            console.log("File Appended..")
        });

        //Read file
        fs.readFile(path.join(__dirname,'/test','hello.txt'), 'utf8', (err,data) => {
            if(err) throw err;
            console.log("File Contents..",data)
        });
}); 

//Read file
fs.readFile(path.join(__dirname,'/test','hello.txt'), 'utf8', (err,data) => {
    if(err) throw err;
    console.log("File Contents..",data)
});


//Read file
/*fs.rename(
    path.join(__dirname,'/test','hello.txt'), 
    path.join(__dirname,'/test','helloWorld.txt'), 
    err => {
    if(err) throw err;
    console.log("File Renamed..")
});*/



//Sycnhronous Functions 
const files = fs.readdirSync('./');
console.log("Files Synch :",files)