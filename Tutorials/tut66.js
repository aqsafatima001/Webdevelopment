const http = require('http');
const fs = require('fs');
const FileContent = fs.readFileSync('tut54Interaction - Alert, Prompt, Confirm.html');

const server = http.createServer((req , res)=>{
    res.writeHead(200 , {'Content-type':'text/html'});
    res.end(FileContent)
})

server.listen(80 , '127.0.0.1', ()=>{
    console.log("Listening on port 80");

})