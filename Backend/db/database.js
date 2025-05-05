const {Client} = require('pg');
const dotenv = require('dotenv')
//require('dotenv').config();
//dotenv.config({path: './.env'})

const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

//const abc = process.env.DB_TEST

console.log("DB Port ->",process.env.DB_PORT);

client.connect().then(()=>{
    console.log("Connected to postgreSQL")
}).catch((error)=>{
    console.log("Error while connecting to DB-->",error);
 
})

module.exports = Client;


