const { getDatos, saveDatos } = require("../varios.js")
const ProductManager = require('./productManager.js');

class CarritoManager {

    constructor (ruta){
        this.ruta = ruta
    }

    getCarritoProducts(){
        return getDatos(this.ruta)
    }

    addCarritoProduct(agregarProductoCarrito) {
        let carrito = this.getCarritoProducts()
        let keepId = agregarProductoCarrito.id
        let quantity = 1
    
        let existingProductIndex = carrito.findIndex(c => c.id === keepId)
    
        if (existingProductIndex !== -1) {
            // Update quantity of existing product
            carrito[existingProductIndex].quantity += quantity
        } else {
            // Add new product to the cart
            let newCarritoProduct = {
                id: keepId,
                quantity: quantity
            }
            carrito.push(newCarritoProduct)
        }
    
        saveDatos(this.ruta, carrito)
        return carrito
    }

    getCarritoProductById(id){

        let carrito = this.getCarritoProducts()

        let productoCarritoPorId=carrito.find((c)=>c.id===id)
        if(!productoCarritoPorId){
            console.log(`El producto con el id: ${id} no está en su carrito`)
            return productoCarritoPorId = null
        }
        return productoCarritoPorId
    }

}

module.exports=CarritoManager