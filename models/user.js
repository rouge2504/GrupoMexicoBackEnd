const db = require('../config/config');

const bcrypt = require('bcryptjs');

const Users = {};

Users.findById = (id, result) =>{
    const sql = 'SELECT id, email, name, lastname, password FROM users WHERE id = ?';

    db.query(
        sql, [id],
        (err, user) => {
            if(err){
                console.log('Error:' , err);
                result(err,null);
            }else{
                console.log('Usuario obtenido: ', user[0]);
                result(null,user[0]);
            }
        }
    );
}


Users.findByEmail = (email, result) =>{
    const sql = 'SELECT id, email, name, lastname, password FROM users WHERE email = ?';

    db.query(
        sql, [email],
        (err, user) => {
            if(err){
                console.log('Error:' , err);
                result(err,null);
            }else{
                console.log('Usuario obtenido: ', user[0]);
                result(null,user[0]);
            }
        }
    );
}

Users.create = async (user, result) => {
    const sql ='INSERT INTO users(email,name,lastname,phone,image,password,created_at,update_at) VALUES(?,?,?,?,?,?,?,?)';

	const hash = await bcrypt.hash(user.password, 10);

    db.query(
        sql,[
            user.email,
            user.name,
            user.lastname,
            user.phone,
            user.image,
            hash,
            new Date(),
            new Date()
        ],
        (err, res) => {
            if(err){
                console.log('Error:' , err);
                result(err,null);
            }else{
                console.log('Id del nuevo usuario: ', res.insertId);
                result(null,res.insertId);
            }
        }
    )
}

module.exports = Users;