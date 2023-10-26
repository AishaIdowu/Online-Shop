const mysql =  require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'online-shop',
    password: 'MySQL23%'
});

module.exports = pool.promise();