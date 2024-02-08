

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



/*

const findCustomer=(req,resp)=>{
    console.log(req.params.nic);
    let nic=req.params.nic

    const findQuery='SELECT * FROM customer WHERE nic=?'
    db.query(findQuery,[nic],(error,result)=>{

        if(error){
            return resp.status(500).json({error:'something went wrong'})
        }else{
            return resp.status(200).json({message:'customer details',data:result})
        }

    })

}


const updateCustomer=(req,resp)=>{

    const findQuery='SELECT * FROM customer WHERE nic=?'
    db.query(findQuery,[req.body.nic],(error,result)=>{

        if(error){
            return resp.status(500).json({error:'something went wrong'})
        }else{

            const customers={
                nic:req.body.nic,
                name:req.body.name,
                address:req.body.address,
                salary:req.body.salary
            }

            const updateQuery='UPDATE customer SET name=?,address=?,salary=? WHERE nic=?';
            db.query(updateQuery,[
                customers.name,customers.address,customers.salary,customers.nic
            ],(error,result)=>{
                if(error){
                    console.log(error);
                    return resp.status(500).json({error:'somethong wnt Wrong'})
                }
                return resp.status(201).json({message:'customer update'})
            })


        }

    })

}

const deleteCustomer=(req,resp)=>{
    let nic=req.params.nic;

    const deleteQuery='DELETE FROM customer WHERE nic=?';

    db.query(deleteQuery,[nic],(error,result)=>{

        if(error){
            console.log(error);
            return resp.status(500).json({error:'somethong wnt Wrong'})
        }

        return resp.status(204).json({message:'customer delete'})
    })

}

const findAllCustomer=(req,res)=>{

    const findAllQuery='SELECT * FROM customer'; //==> pagination
    db.query(findAllQuery,(error,result)=>{

        if(error){
            console.log(error);
            return res.status(500).json({error:'somethong wnt Wrong'})
        }

        return res.status(200).json({message:'customer all',data:result})
    })

}

*/


