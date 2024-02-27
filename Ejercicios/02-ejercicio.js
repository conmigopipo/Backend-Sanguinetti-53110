
const mostrarLista=(lista=[])=>{
    if(!Array.isArray(lista)){
        console.log(`El argumento no es de tipo Array; es de tipo ${typeof lista}`)
        return
    }

    if(lista.length===0){
        console.log("La lista no existe")
    }else{
        lista.forEach(objeto=>{
            console.log(objeto)
        })
        console.log(`la lista tiene ${lista.length} elementos`)
    }
}

mostrarLista([])
mostrarLista("hola")
mostrarLista(1)
mostrarLista(["pedro", "juampi", "guille"])