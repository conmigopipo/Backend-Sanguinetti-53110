const express = require ('express');
const productsRouter = require ('./routes/products.router');
const carritoRouter = require ('./routes/carrito.router')

const PORT=3000
const app=express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const fs=require("fs")

app.use('/api/productos', productsRouter)
app.use('/api/carrito', carritoRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain')
    res.status(200).json({
        'productos': '/api/productos',
        'producto específico': '/api/productos/:pid',
        'carrito': '/api/carrito',
    })
})

app.listen(PORT, ()=>{
    console.log(`Server online en puerto ${PORT}`)
})


