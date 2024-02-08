
const mysql=require('mysql')

require('dotenv').config()


const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'node_crud'

})

db.connect((error:any)=>{
    if(error){
        console.log('database concetion error '+error.stack);
        process.exit(1)
    }

})

module.exports=db;