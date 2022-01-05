const fs = require("fs");
const server=require("http").createServer();

server.on("request", (req,res)=>{
    
    const readable=fs.createReadStream("test-file.txt");
    readable.on("data",chunk =>{
        res.write(chunk);
    })
    readable.on("end", ()=>{
        res.end();
    });
    readable.on("error", err=>{
        console.log(err);
        res.statusCode=500;
        res.end("This movie is not available");
    })
});
    server.listen(3000, "127.0.0.1",()=>{
        console.log("it's working");
    });
