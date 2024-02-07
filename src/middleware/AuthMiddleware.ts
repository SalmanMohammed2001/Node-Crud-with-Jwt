const jsonWebToken=require('jsonwebtoken')
const secretKey="dfcznckasjnaskncdsakndaskjdnaskdaksndasjdnaskncd"

const verifyToken=(req:any,res:any,next:any)=>{
    const authorizationHeader= req.headers.authorization;

    if(!authorizationHeader){
        return res.status(401).json({error:'no token provided'})
    }

    if(!authorizationHeader.startsWith('Bearer ')){
        return res.status(401).json({error:'invalid token format'})
    }


    const token=authorizationHeader.slice(7)
    if(!token){
        return res.status(401).json({error:'invalid token '})
    }

    try{

        const decodedData=jsonWebToken.verify(token,secretKey)

        next();

    }catch(error){
        return res.status(401).json({error:'invalid token'})
    }
}

module.exports=verifyToken