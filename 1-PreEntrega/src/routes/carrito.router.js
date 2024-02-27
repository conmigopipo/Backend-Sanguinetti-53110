const CarritoManager = require('../managers/carritoManager.js');
const {join}=require('path')
const Router=require('express').Router
const router=Router()

const ProductManager = require('../managers/productManager.js');
let rutaProducts=join(__dirname, "..", "data", "products.json")
const productManager=new ProductManager(rutaProducts)

let rutaCarrito=join(__dirname, "..", "data", "carrito.json")
const carritoManager=new CarritoManager(rutaCarrito)

router.get('/',(req,res)=>{

    let carrito=carritoManager.getCarritoProducts()
    res.setHeader('Content-Type','application/json')
    res.status(200).json({carrito})
})

router.get('/:cid',(req,res)=>{
    
    let id=Number (req.params.cid)
    
    if(isNaN(id)){
        res.setHeader('Content-Type','application/json')
        return res.status(400).json({error:` 'el id debe ser numerico: ${req.params.cid}'`})
    }

    let productCarritoById=carritoManager.getCarritoProductById(id)
    if(productCarritoById=== null){
        res.setHeader('Content-Type','application/json')
        return res.status(404).json({error: `No se encontró ningún producto en su carrito con el ID ${req.params.cid}`})
    }

    res.setHeader('Content-Type','text/plain')
    res.status(200).json({productoEnCarrito: productCarritoById})
})

router.post('/', (req, res)=>{

    let {id}=req.body
    if(!id){
        res.setHeader('Content-Type','application/json')
        return res.status(400).json({error: 'Asegurate de inrgesar un ID válido.'})
    }
    if(isNaN(id)){
        res.setHeader('Content-Type','application/json')
        return res.status(400).json({error: `el id debe ser nuérico`})
    }
    
    let newCarritoProduct=productManager.getProductById(id)
    if(!newCarritoProduct){
        res.setHeader('Content-Type','application/json')
        return res.status(400).json({error: `No existe un producto con el id ${id}`})
    }

    carritoManager.addCarritoProduct(newCarritoProduct)

    res.setHeader('Content-Type','application/json')
    res.status(201).json({product: newCarritoProduct, mensaje: 'fue agregado al carrito'})

})


module.exports=router