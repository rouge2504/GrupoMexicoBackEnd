const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'reactrojo'
});

db.connect(function(err){
    if (err) console.log("[mysql error]",err);
    console.log('DATABASE CONNECTED!');
});
/*
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
});*/

module.exports = db;