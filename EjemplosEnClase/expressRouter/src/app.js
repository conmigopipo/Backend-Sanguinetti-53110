const express=require('express')
const petsRouter = require('./routes/pets.router.js')
const usersRouter = require('./routes/users.router.js')

import __dirname from './utils.js'
const PORT = 3000
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain')
    res.status(200).json({
        "mensaje":"OK"
    })
})