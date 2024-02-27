const http = require("http")

const PORT = 3000

const server = http.createServer((req, res)=>{  //request / response


    res.writeHead(200, {"Content-Type":"text/html; charset=utf-8" }) //respuesta, del server al cliente
    res.end("Server básico con http") //end es un método, manda datos al servidor. body
})

server.listen(PORT, ()=>{
    console.log("Server online en puerto", PORT)
})