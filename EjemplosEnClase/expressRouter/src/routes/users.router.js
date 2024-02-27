const Router = require('express').Router
export const router = Router()

router.get('/',(req, res)=>{

    res.status(200).json({
        users:"usuarios"
    })
})

router.post('/', (req,res)=>{

    res.status(201).json({
        users:"Usuario posteado"
    })
})
