const Pool=require("pg").Pool;

const pool=new Pool({
    user:"postgres",
    password:"Nishi@212",
    host:"localhost",
    port:5432,
    database:"nistodo"

});

module.exports=pool;