import {SchemaType} from "mongoose";
import {request} from "express";

const UserSchema=require('../model/UserSchema')
const bcrypt=require('bcrypt')


 export  const register  = async (req:any,res:any)=>{
   let result =await  UserSchema.findOne({email:req.body.email})
  if(result===null){
      bcrypt.hash(req.body.password,10,function (err:any,hash:any) {
          if(err){
              return res.status(500).json(err)
          }else {
              const user=new UserSchema({
                  fullName:req.body.fullName,
                  password:hash,
                  email:req.body.email,
                  activeState:true
              })

              user.save().then((result:any)=>{
               return res.status(200).json({message:'user saved',data:result})
              }).catch((err:any)=>{
                  return res.status(500).json(err)
              })
          }

      })

  }







}



