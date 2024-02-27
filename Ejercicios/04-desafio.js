class ProductManager{

    constructor(){
        this.products = []
    }
    
    getProducts(){
        return this.products
    }

    addProduct(title, description, price, thumbnail, stock){

        if(!title || !description || !price || !thumbnail || !stock ){
            console.log(`Error al cargar su producto...!!! Asegure que todos los campos fueron llenados de manera correcta.`)
            return
        }

        let existe = this.products.find(product=>product.title === title && product.description === description)
        if(existe){
            console.log(`El producto ${title} ya existe!`)
            return
        }

        let code=1
        if(this.products.length>0){
            code=this.products[this.products.length-1].code + 1
        }

        let newProduct={
            title, description, price, thumbnail, code, stock
        }
        this.products.push(newProduct)
    }

    getProductById(id){
        let productoPorId=this.products.find((product)=>product.code===id)
        if(!productoPorId){
            console.log(`El producto con el id: ${id} no existe`)
            return
        }
        return productoPorId
    }

    deleteProduct(id){
        let productoEliminar=this.products.find((producto)=>producto.id===id)
        if(!productoEliminar){
            console.log(`El producto con el id ${id} no existe`)
            return
        }
        let newProducts = this.products.filter((producto)=>producto.id!==id)
        console.log(newProducts)
        return
    }

}

const pm01 = new ProductManager()

console.log(pm01.getProducts())
pm01.addProduct("Shure 57", "Micrófono dinámico", 89, "url", 5) 
pm01.addProduct("AKG K72", "Auriculates de mezcla", 52, "url", 8)
pm01.addProduct("El Círculo, KASE.O", "Longplay", 19, "url", 3)
pm01.addProduct("Scarlett 2i2", "Interfaz de audio de tercera generación", 139, "url", 19)

pm01.addProduct("Scarlett 2i2", "Interfaz de audio de tercera generación", 139, "url", 19) //test de existe
pm01.addProduct("Scarlett 2i2", 139, "url", 19) //test campos obligatorios

console.log(pm01.getProducts())

console.log(pm01.getProductById(3))
console.log(pm01.getProductById(8)) //test este producto no existe

pm01.deleteProduct(3)