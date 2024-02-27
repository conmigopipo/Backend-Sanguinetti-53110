const express = require("express")

const PORT = 3000

const app = express()

app.get("/", (req, res)=>{

    res.send("Server básico con express")
})

app.get("/suma/:valor1/:valor2", (req, res)=>{

    let {valor1, valor2}=req.params
    valor1=Number(valor1)
    valor2=Number(valor2)

    try{

    }catch(error){
        return res.status(500).send("Error inesperado, reintente en un rato...")
    }

    if(isNaN(valor1) || isNaN(valor2)){
        return res.status(400).send("Ingrese valores numéricos")
    }

    let resultado = `La suma de ${valor1} y ${valor2} es:  ${valor1 + valor2}`

    res.setHeader('Content-Type', 'text/plain')
    res.status(200).send(resultado)
   
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