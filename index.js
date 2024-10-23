const http = require("http")
const url = require("url");
const fs = require("fs")
const myServer = http.createServer((req, res) => {
// Parsing the URL and query/ and working with path and query parameters
    // console.log(req.url);  // Logs the requested URL
    // const parsedUrl = url.parse(req.url, true);  // Parse the URL
    // console.log("Path: ", parsedUrl);  // Logs the path part of the URL
    // console.log("Query params: ", parsedUrl.query);     // Logs the query parameters as an object
    
    // const pathname = parsedUrl.pathname;
    // const query = parsedUrl.query;

    // if (pathname === "/home") {
    //     res.end("Welcome to the Home Page")
    // } else if (pathname === "/about") {
    //     res.end("Welcome to Learn Coding ")
    // } else if(pathname==="/search" && query.query){
    //    res.end(`Query ${query.query}`)
    // }else{
    //     res.end("Use /search?query=your query for params")
    // }
//sending  headers and specific content type messages
    // res.writeHead(200,{"Content-Type":"text/html"})// setting content type header
    // res.end("<h1>Hello from Server</h1>")

//handling post requests
    // if(req.method==="POST"){
    //     let body = "";
    //     req.on("data",(chunk)=>{
    //         body+=chunk.toString();
    //     })

    //     req.on("end",()=>{
    //         console.log("Received this post data: ", body)
    //         res.end("Post method completed")
    //     })
    //  }else{
    //     res.end("send a post request")
    //  }

    // if(req.url==="/"){
    //     fs.readFile("index.html",(err,data)=>{
    //         if(err){
    //             res.writeHead(500)
    //         }else{
    //             res.writeHead(200,{"Content-Type":"text/html"});
    //             res.end(data)
    //         }
    //     })
    // }

});

myServer.listen(3000, "localhost", () => console.log("Server Started!"));

