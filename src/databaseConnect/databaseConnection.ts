
const mysql=require('mysql')

require('dotenv').config()


const db=mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE_NAME

})

db.connect((error:any)=>{
    if(error){
        console.log('database concetion error '+error.stack);
        process.exit(1)
    }

})

module.exports=db;