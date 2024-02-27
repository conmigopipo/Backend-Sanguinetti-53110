import { PetManager } from "../managers/PetsManager";
const join=require('path').join
const Router=require('express').Router
const router=Router()

const petsManager= new PetManager

router.get('/', (req, res)=>{

    let pets=petsManager.getPets()
    
    res.setHeader('Content-Type','text/plain')
    res.status(200).json({pets})

})

router.post('/', (req,res)=>{

    let {nombre}=req.body
    if(!nombre){
//
    }
})