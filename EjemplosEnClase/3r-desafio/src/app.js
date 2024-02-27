const express = require('express')
const app = express()
const PORT= 3000
import ProductManager from './productsClass'


app.get("/", (req, res)=>{

    res.setHeader('Content-Type', 'text/plain')
    res.send("Server básico con express")
})

app.listen(PORT,()=>{
    console.log(`Server levantado en puerto: ${PORT}`)
})