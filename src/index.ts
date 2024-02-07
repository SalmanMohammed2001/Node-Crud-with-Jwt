import express from 'express'
import mongoose from "mongoose";
const app=express()


mongoose.connect('mongodb://127.0.0.1:27017/node_crud').then(()=>{
    app.listen(3000,()=>{
        console.log(`server port running ${3000}`)
    })
})


