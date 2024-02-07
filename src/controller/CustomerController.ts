const CustomerSchema=require('../model/CustomerSchema')


export const save=(req:any,res:any)=>{

    console.log(req.body)


    const tempCustomer=new CustomerSchema({
        nic:req.body.nic,
        name:req.body.name,
        address:req.body.address,
        salary:req.body.salary,
    });
    tempCustomer.save().then((result:any)=>{
        return   res.status(200).json({message:'save customer',data:result})
    }).catch((error:any)=>{
        return   res.status(500).json({message:'save customer',error:error})
    })
}

export  const finById=(req:any,res:any)=>{
    CustomerSchema.findOne({nic:req.params.id}).then((result:any)=>{
        if(result!=null){
            return res.status(201).json(result)
        }else {
            return res.status(500).json({message:'customer not found'})
        }
    }).catch((error:any)=>{
        return   res.status(500).json({message:'save customer',error:error})
    })
}

const update=(req:any,res:any)=>{
    CustomerSchema.findOneAndUpdate({'_id':req.params.id},{
        $set:{
            nic:req.body.nic,
            name:req.body.name,
            address:req.body.address,
            salary:req.body.salary,
        }
    },{new:true}).then((update:any)=>{
        if(update){
            res.status(201).json({status:true,message:'customer update'})
        }else {
            res.status(201).json({status:false,message:'Try again'})
        }
    }).catch((error: any)=>{
        res.status(500).json(error)
    })
}