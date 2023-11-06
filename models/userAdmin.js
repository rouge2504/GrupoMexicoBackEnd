const db = require('../config/config');
const UserAdmin = {};

UserAdmin.createAdmin = (userA, result) =>{
const sql = `INSERT INTO userAdmin(nombre,apellido_paterno,apellido_materno,email,rol,contraseña)
VALUES(?,?,?,?,?,?)`;
db.query(
    sql,[
        userA.nombre,
        userA.apellido_paterno,
        userA.apellido_materno,
        userA.email,
        userA.rol,
        userA.contraseña],(err, res)  => {
            if(err){
                console.log('Error:' , err);
                result(err,null);
            }else{
                console.log('Admin registrado: ', userA.email);
                result(null,res);
            }
        }
    
    );
};

UserAdmin.getAdmin =(admin, result)=>{
const sql = `SELECT contraseña, email FROM userAdmin 
`;
db.query(
    sql,[admin.id],(err,admin)=>{
        if(err){
            console.log('Error al conseguir admin data',err);
        }else{
            console.log('get admins: ', admin);
            result(null,admin);
        }
    }
)
};

UserAdmin.getAdminByEmail =(admin, result)=>{
    const sql = `SELECT contraseña, email FROM userAdmin WHERE email = ?
    `;
    db.query(
        sql,[admin],(err,adminData)=>{
            if(err){
                console.log('Error al conseguir admin data',err);
            }else{
                console.log('get admins: ', adminData);
                result(null, adminData);
            }
        }
    )
    }; 

    UserAdmin.logIn = (admin, callback) => {
        const sql = `SELECT * FROM userAdmin WHERE email = ? AND contraseña = ?`;
        db.query(
          sql, [admin.email, admin.contraseña],
          (err, result) => {
            if (err) {
              callback(err, null);
            } else {
              if (result.length > 0) {
                callback(null, result[0]);
              } else {
                callback("Usuario no existente", null);
              }
            }
          }
        );
      };
module.exports = UserAdmin;