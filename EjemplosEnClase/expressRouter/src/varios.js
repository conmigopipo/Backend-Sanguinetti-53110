const fs=require('fs')

export default function getDatos(ruta){
    if(fs.existsSync(ruta)){
        return JSON.parse(fs.readFileSync(ruta, 'utf-8'))
    }else{
        return []
    }
}

export default function saveDatos(ruta, datos){
    fs.writeFileSync(ruta, JSON.stringify(datos, null, 5))
}

