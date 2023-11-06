const mysql = require('mysql');
/*
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'grupo_mexico'
});

db.connect(function(err){
    if (err) console.log("[mysql error]",err);
    console.log('DATABASE CONNECTED!');
});*/
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

/*const db = mysql.createPool({
    connectionLimit : 100,
    host: 'sql9.freemysqlhosting.net',
    user: 'sql9657433',
    password: 'CUsUUYcG9c',
    database: 'sql9657433',
});

db.getConnection(function(err,connection){
    if (err) console.log("[mysql error]",err);
    console.log('DATABASE CONNECTED!');
    connection.release();
});*/

module.exports = db;