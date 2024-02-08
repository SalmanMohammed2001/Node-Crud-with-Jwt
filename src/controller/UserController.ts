import {SchemaType} from "mongoose";
import {request} from "express";


const bcrypt=require('bcrypt')
const jsonWebToken=require('jsonwebtoken')
const db=require('../databaseConnect/databaseConnection')

/*
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

  }else {
      return res.status(409).json({error:'already exists!'})
  }
}
*/


export  const register  = async (req:any,res:any)=>{
    const email=req.body.email

    console.log(req.body)
   const findQuery='SELECT * FROM user WHERE email=?'
    db.query(findQuery,[email],(error:any,result:any)=>{
        if(result!=null){
            bcrypt.hash(req.body.password,10,function (err:any,hash:any) {
                if(err){
                    return res.status(500).json(err)
                }else {
                    const{id,fullName,password,email,activeState} =req.body;
                    db.query('INSERT INTO user VALUES(?,?,?,?,?)',
                        [id,fullName,email,hash,activeState],(error:any,result:any)=>{
                                if(error){
                                    return res.status(500).json(err)
                                }else {
                                    return res.status(200).json({message:'user save',data:result})
                                }
                        })
                }

            })

        }else {
            return res.status(409).json({error:'already exists!'})
        }

    })

}



export const login=  (req:any,res:any)=>{

    const email=req.body.email
    const findQuery ='SELECT * FROM user WHERE email=?'
     db.query(findQuery,[email],(error:any,selectedUser:any)=>{
        if(selectedUser){
            bcrypt.compare(req.body.password,selectedUser[0].password,function (err:any,result:any){
                   const  SECRET_KEY="dfcznckasjnaskncdsakndaskjdnaskdaksndasjdnaskncd"
                    const expiresIn=3600;
                    const token=  jsonWebToken.sign({'email':selectedUser[0].email},
                        SECRET_KEY,{expiresIn});
                    res.setHeader("Authorization",`Bearer ${token}`)
                    return res.status(200).json({token})
                }
            )}

    })

/*     UserSchema.findOne({email:req.body.email}).then((selectedUser:any)=>{
         if(selectedUser!=null){
             bcrypt.compare(req.body.password,selectedUser.password,function (err:any,result:any){
                 if(result){
                   const  SECRET_KEY="dfcznckasjnaskncdsakndaskjdnaskdaksndasjdnaskncd"
                     const expiresIn=3600;
                     const token=  jsonWebToken.sign({'email':selectedUser.email},
                         SECRET_KEY,{expiresIn});
                     res.setHeader("Authorization",`Bearer ${token}`)
                     return res.status(200).json({token})
                 }
             })
         }
     })*/
}


/*
export const login=(req:any,res:any)=>{
    UserSchema.findOne({email:req.body.email}).then((selectedUser:any)=>{
        if(selectedUser!=null){
            bcrypt.compare(req.body.password,selectedUser.password,function (err:any,result:any){
                if(result){
                    const  SECRET_KEY="dfcznckasjnaskncdsakndaskjdnaskdaksndasjdnaskncd"
                    const expiresIn=3600;
                    const token=  jsonWebToken.sign({'email':selectedUser.email},
                        SECRET_KEY,{expiresIn});
                    res.setHeader("Authorization",`Bearer ${token}`)
                    return res.status(200).json({token})
                }
            })
        }
    })
}
*/



