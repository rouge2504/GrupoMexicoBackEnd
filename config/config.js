const mysql = require('mysql');

const db = mysql.createConnection({
    host: '10.4.0.5',
    user: 'admin_gm_2024',
    password: 'GrupoMexico2024',
    database: 'sys',
    port: '3306'
});

db.connect(function(err){
    if (err) console.log("[mysql error]",err);
    console.log('DATABASE CONNECTED!');
});

/*const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'grupo_mexico'
});

db.connect(function(err){
    if (err) console.log("[mysql error]",err);
    console.log('DATABASE CONNECTED!');
});*/

/*
const db = mysql.createPool({
    connectionLimit : 100,
    host: '10.4.0.5',
    user: 'gm_1',
    password: 'GrupoMexico2024',
    database: 'sys'
});

db.getConnection(function(err,connection){
    if (err) console.log("[mysql error]",err);
    console.log('DATABASE CONNECTED!');
    connection.release();
});*/

module.exports = db;