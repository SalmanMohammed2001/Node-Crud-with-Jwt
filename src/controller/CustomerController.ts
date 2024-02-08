

const db=  require('../databaseConnect/databaseConnection')


 export const createCustomer=(req:any,resp:any)=>{
    let customer={
        id:req.body.id,
        nic:req.body.nic,
        name:req.body.name,
        address:req.body.address,
        salary:req.body.salary,
    }

    console.log(customer);

    const createQuery='INSERT INTO customer VALUES(?,?,?,?,?)';
    db.query(createQuery,[
        customer.id,customer.nic,customer.name,customer.address,customer.salary
    ],(error:any,result:any)=>{
        if(error){
            return resp.status(500).json({error:'somethong wnt Wrong'})
        }
        return resp.status(201).json({message:'customer saved'})
    })
}





 export  const findCustomer=(req:any,resp:any)=>{

    let id=req.params.id

    const findQuery='SELECT * FROM customer WHERE id=?'
    db.query(findQuery,[id],(error:any,result:any)=>{

        if(error){
            return resp.status(500).json({error:'something went wrong'})
        }else{
            return resp.status(200).json({message:'customer details',data:result})
        }

    })

}



 export const updateCustomer=(req:any,resp:any)=>{

    const findQuery='SELECT * FROM customer WHERE id=?'
    db.query(findQuery,[req.body.id],(error:any,result:any)=>{

        if(error){
            return resp.status(500).json({error:'something went wrong'})
        }else{

            const customers={
                id:req.body.id,
                nic:req.body.nic,
                name:req.body.name,
                address:req.body.address,
                salary:req.body.salary,
            }

            const updateQuery='UPDATE customer SET nic=?,name=?,address=?,salary=? WHERE id=?';
            db.query(updateQuery,[
              customers.nic,customers.name,customers.address,customers.salary,customers.id
            ],(error:any,result:any)=>{
                if(error){
                    console.log(error);
                    return resp.status(500).json({error:'somethong wnt Wrong'})
                }
                return resp.status(201).json({message:'customer update'})
            })


        }

    })

}


export  const deleteCustomer=(req:any,resp:any)=>{
    let id=req.params.id;

    const deleteQuery='DELETE FROM customer WHERE id=?';

    db.query(deleteQuery,[id],(error:any,result:any)=>{

        if(error){
            console.log(error);
            return resp.status(500).json({error:'somethong wnt Wrong'})
        }

        return resp.status(204).json({message:'customer delete'})
    })

}

export const findAllCustomer=(req:any,res:any)=>{

    const findAllQuery='SELECT * FROM customer'; //==> pagination
    db.query(findAllQuery,(error:any,result:any)=>{

        if(error){
            console.log(error);
            return res.status(500).json({error:'somethong wnt Wrong'})
        }

        return res.status(200).json({message:'customer all',data:result})
    })

}



