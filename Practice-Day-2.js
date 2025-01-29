const http= require("http");
const fsPromises = require("fs/promises");
const newserver = http.createServer(async(req,res)=>{
       if(req.url=="/"){
        const data = await fsPromises.readFile("./pages/homepage.html");
        res.end(data);
        //res.write(`<body bgcolor ="red"><h2>Hello</h2></body>`);
       }
       else if(req.url=="/about"){
        const data = await fsPromises.readFile("./pages/About.html");
        res.end(data);
       }
       else{
        const data = await fsPromises.readFile("./pages/Error.html");
        res.end(data);
       }
    });
    
newserver.listen(8083);