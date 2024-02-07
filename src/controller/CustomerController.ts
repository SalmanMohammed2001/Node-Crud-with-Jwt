//const CustomerSchema=require('../model/CustomerSchema')
import * as CustomerSchema from '../model/CustomerSchema'

export const save=(req:any,res:any)=>{

    // @ts-ignore
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