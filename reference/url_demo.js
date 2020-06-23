const URL = require('url').URL;

const myURL = new URL(
    'http://mywebsite.com:8080/hello.html?id=100&status=active'
    );

    //Serialized URL
    console.log("Serialized URL :",myURL.href);
    console.log("Serialized URL by toString :",myURL.toString());
    //Host (root domain) -- with port
    console.log("Host :",myURL.host);
   //Host name
   console.log("Hostname :",myURL.hostname);
   //Pathname
   console.log("Pathname :",myURL.pathname);
   //Serialized query
   console.log("Query :",myURL.search);
   //Params object
   console.log(myURL.searchParams);
   //Add Params
   myURL.searchParams.append('abc','123');
   console.log("After Appending :",myURL.searchParams);
   //Loop through Params
   myURL.searchParams.forEach((value,name) => console.log(`${name} : ${value}`));
