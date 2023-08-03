const db = require('../config/config');

const Users = {};

Users.create = (users, result) => {
    const sql ='INSERT INTO users{email,name,lastname,phone, image,password,created_at,update_at} VALUES(?,?,?,?,?,?,?,?)';

    db.query(
        sql,[
            user.email,
            user.name,
            user.lastname,
            user.phone,
            user.image,
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