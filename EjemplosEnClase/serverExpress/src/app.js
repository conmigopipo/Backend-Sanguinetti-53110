const express = require("express")
const heroes = require("./heroes").heroes
const villanos = require("./heroes").villanos

const PORT = 3000

const app = express()

app.get("/", (req, res)=>{


    res.setHeader('Content-Type', 'text/plain')
    res.send("Server básico con express")
})



app.get("/bienvenido", (req, res)=>{

    res.send(`<h2 style="color:blue">BIENVENIDO!</h2>`)
})

app.get("/contacto", (req, res)=>{

    console.log(req.query)
    if(req.query.nombre){
        res.send(`Contact page ${req.query.nombre}`)
    }else{
        res.send("Contact Page")
    }
})


app.listen(PORT, ()=>{   //por lo general siempre al final
    console.log(`Server levantado en puerto: ${PORT}`)
})

