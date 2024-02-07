

 export  const register=(req:any,res:any)=>{
     console.log(req.body)

    return res.status(200).json({message:"ok"})
}



