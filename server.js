const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
/*  if(req.url === "/") {
    fs.readFile(path.join(__dirname, 'public', 'index.html'),(err,data) => {
      if(err) throw err;
      res.writeHead(200, {'Content-Type' : 'text/html'})
      res.end(data);
    });
  }
  //Example to serve RESTAPI
  if(req.url === "/api/users") {
    const users = [
      {name : 'Sathesh', age:40},
      {name : 'Raji', age:20}
    ]
    res.writeHead(200, {'Content-Type' : 'application/json'})
    res.end(JSON.stringify(users));
  }*/

  //Build File Path
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
  console.log(filePath);

  //Extension of file path
  let extname = path.extname(filePath);
  console.log("Extension name :",extname)
  //Initial Content type
  let contentType = 'text/html';
  //Check extenstion and set content type
  switch(extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
        contentType = 'application/json';
        break;
    case '.png':
          contentType = 'image/png';
          break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  //Read File 
  fs.readFile(filePath, (err,data) => {
    if(err) {
      if(err.code == 'ENOENT') {
        //Page NOT FOUND
        fs.readFile(path.join(__dirname,'public','404.html'),(err, data) => {
          res.writeHead(200, {'Content-Type' : 'text/html'})
          res.end(data, 'utf8');
        })
      } else {
        //Some other server erro
        res.writeHead(500);
        res.end(`Server Error : ${err.code}`);
      }
    } else { //Sucess
      res.writeHead(200, {'Content-Type' : contentType})
      res.end(data, 'utf8');
    }
  })
});
const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log(`Server RUNNING in ${PORT}`));