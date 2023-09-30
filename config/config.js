const mysql = require('mysql');

/*const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'grupo_mexico'
});*/

const db = mysql.createPool({
    connectionLimit : 100,
    host: 'sql9.freemysqlhosting.net',
    user: 'sql9650030',
    password: 'rFxy2GqGA5',
    database: 'sql9650030',
});

db.getConnection(function(err,connection){
    if (err) console.log("[mysql error]",err);
    console.log('DATABASE CONNECTED!');
    connection.release();
});

module.exports = db;