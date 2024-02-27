const http = require("http")
const url = require("url")

const PORT = 3000

const server = http.createServer((req, res)=>{  //request / response

    let urlParsed=url.parse(req.url, true)
    console.log(urlParsed)

    if(req.url==="/contacto"){
        res.writeHead(200, {"Content-Type":"text/html; charset=utf-8" }) //respuesta, del server al cliente
        res.end("Contact Page") //end es un método, manda datos al servidor. body
        return
    }

    if(req.url==="/"){
        res.writeHead(200, {"Content-Type":"text/html; charset=utf-8" }) //respuesta, del server al cliente
        res.end("Server básico con http") //end es un método, manda datos al servidor. body
        return
    }

    
})

server.listen(PORT, ()=>{
    console.log("Server online en puerto", PORT)
})