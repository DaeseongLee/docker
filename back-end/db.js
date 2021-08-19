const mysql = require("mysql");
const pool = mysql.createdPool({
    connectionLimit: 10,
    host: 'mysql',
    user: 'root',
    password: 'johnahn',
    database: 'myapp',
})

exports.pool = pool;