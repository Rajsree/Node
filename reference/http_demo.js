const http = require('http');

//Create a server object
http
    .createServer((req,res) => {
        if(req.url === "/") {
            res.write("Hello World");
            res.end(); 
        }
        if(req.url === "/apicheck") {
            res.write(JSON.stringify([1,2,3]));
            res.end();
        }
    })
    .listen(5000, () => console.log("Listening to port 5000"));