import express from 'express'
import mongoose from "mongoose";
import * as process from "process";
import bodyParser from "body-parser";

require('dotenv').config()
const app=express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// @ts-ignore
const port:string | undefined =process.env.SERVER_PORT |8080


import UserRouter from '../src/router/UserRouter'
import CustomerRouter from "../src/router/CustomerRouter";


/*
mongoose.connect('mongodb://127.0.0.1:27017/node_crud').then(()=>{
    app.listen(port,()=>{
        console.log(`server port running ${port}`)
    })
})
*/

app.listen(port,()=>{
    console.log(`server up & running on port${port}`);
})

app.use("/api/v1/users",UserRouter)
app.use("/api/v1/customers",CustomerRouter)

