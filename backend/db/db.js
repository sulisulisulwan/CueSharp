const mysql = require('mysql2');
require('dotenv')
const connection = mysql.createConnection({
  host: process.env.SQL_HOST,
  user: process.env.SQL_USER,
  password: process.env.SQL_PW,
  database: process.env.SQL_DB,
  port: process.env.SQL_PORT,
})

module.exports = {
  connection
}