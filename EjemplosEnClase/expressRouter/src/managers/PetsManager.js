//falta el get datos en un varios.js

import getDatos from "../varios"

export class PetManager{

    constructor(ruta){
        this.ruta=ruta
    }
    getPets(){
        return getDatos(this.path)
    }

    createPet(pet){
        let pets=this.getPets()

        let id=1
        if(pets.length>0){
            id=Math.max(...pets.map(d=>d.id))+1
        }

        let nuevaMascota={
            id,...pet
        }

        pets.push(nuevaMascota)
        saveDatos()//??????
    }
}