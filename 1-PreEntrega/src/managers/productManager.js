const { getDatos, saveDatos } = require("../varios.js")

class ProductManager{

    constructor(ruta){
        this.ruta = ruta
    }
    
     getProducts(){
        return getDatos(this.ruta)
    }

    addProduct(nombre, descripcion, precio, stock){
        	

        let products = this.getProducts()

        if(!nombre || !descripcion || !precio || !stock ){
            console.log(`Error al cargar su producto...!!! Todos los campos son obligatorios; nombre, descripcion, precio y stock`)
            return
        }

        let existe = products.find(product=>product.nombre === nombre && product.descripcion === descripcion)
        if(existe){
            console.log(`El producto "${nombre}" ya existe!`)
            return
        }

        let id=1
        if(products.length>0){
            id=Math.max(...products.map(p=>p.id))+1
        }

        let newProduct={
            nombre, descripcion, precio, id, stock
        }
        products.push(newProduct)

        saveDatos(this.ruta, products)

        return newProduct
    }

    getProductById(id){

        let products = this.getProducts()

        let productoPorId=products.find((product)=>product.id===id)
        if(!productoPorId){
            console.log(`El producto con el id: ${id} no existe`)
            return productoPorId = null
        }
        return productoPorId
    }

}

module.exports=ProductManager
