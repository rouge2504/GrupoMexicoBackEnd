const db = require('../config/config');
const Accident ={};

Accident.create = (accident, result)=>{
    const sql = `INSERT INTO USUARIO_ACCIDENTE(
        nombre,apellido,email,telefono,coche,latitud,longuitud,placa)
        VALUES(?,?,?,?,?,?,?,?)`;
    db.query(
        sql,[
            accident.nombre,
            accident.apellido,
            accident.email,
            accident.telefono,
            accident.coche,
            accident.latitud,
            accident.longuitud,
            accident.placa],(err, res) => {
                if(err){
                    console.log('Error:' , err);
                    result(err,null);
                }else{
                    console.log('Accidente registrado: ', accident.email);
                    result(null,accident);
                }
            }
    );
};

module.exports = Accident;