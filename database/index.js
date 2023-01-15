const mysql = require("mysql2");
require("dotenv").config(); // kết nối biến môi trường

const pool = mysql.createPool({
  host: "localhost",
  user: process.env.USER,
  database: process.env.NAME,
  password: process.env.PASSWORD,
});

console.log(process.env.CLIENT_URL);
console.log(process.env.USER);
console.log(process.env.NAME);
console.log(process.env.PASSWORD);
module.exports = pool.promise();
