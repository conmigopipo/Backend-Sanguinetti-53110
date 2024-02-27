const ProductManager = require('../managers/productManager.js');
const {join}=require('path')
const Router=require('express').Router
const router=Router()


let rutaProducts=join(__dirname, "..", "data", "products.json")
const productManager=new ProductManager(rutaProducts)

router.get('/',(req,res)=>{

    let products=productManager.getProducts()
    console.log(products)
    res.setHeader('Content-Type','application/json')
    res.status(200).json({products})
})

router.get('/:pid',(req,res)=>{
    
    let id=Number (req.params.pid)
    
    if(isNaN(id)){
        res.setHeader('Content-Type','application/json')
        return res.status(400).json({error:` 'el id debe ser numerico: ${req.params.pid}'`})
    }
    let productById=productManager.getProductById(id)
    if(productById=== null){
        res.setHeader('Content-Type','application/json')
        return res.status(404).json({error: `No se encontró ningún producto con el ID ${req.params.pid}`})
    }

    res.setHeader('Content-Type','text/plain')
    res.status(200).json({product: productById})
})

router.post('/', (req, res)=>{

    let {nombre, descripcion, precio, stock}=req.body
    if(!nombre || !descripcion || !precio || !stock ){
        res.setHeader('Content-Type','application/json')
        return res.status(400).json({error: 'Complete todos los campos; nombre, descripcion, precio y stock.'})
    }
    
    let newProduct=productManager.addProduct(nombre,descripcion,precio,stock)

    res.setHeader('Content-Type','application/json')
    res.status(201).json({product: newProduct})

})


module.exports=router