
class Persona{

    constructor(nombre, apellido, email){
        this.nombre=nombre
        this.apellido=apellido
        this.email=email
    }
    saludo(){
        console.log(`Hola me llamo ${this.nombre}`)
    }
    cambiarNombre(nombre){
        this.nombre=nombre
    }
}

let persona01=new Persona("Diego","Pereyra", "dp710@gmail.com" )
let persona02=new Persona("Laura", "Gonzales", "lgonzales@gmail.com")

persona02.saludo()
persona02.cambiarNombre("Sofia")
persona02.saludo()
