import express from 'express'
import mongoose from "mongoose";
import * as process from "process";

require('dotenv').config()
const app=express()

// @ts-ignore
const port:string | undefined =process.env.SERVER_PORT | 8080

mongoose.connect('mongodb://127.0.0.1:27017/node_crud').then(()=>{
    app.listen(port,()=>{
        console.log(`server port running ${port}`)
    })
})


