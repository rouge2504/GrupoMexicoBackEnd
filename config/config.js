const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'grupo_mexico'
});

db.connect(function(err){
    if (err) console.log("[mysql error]",err);
    console.log('DATABASE CONNECTED!');
});

module.exports = db;