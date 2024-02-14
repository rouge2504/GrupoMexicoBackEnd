const db = require('../config/config');
const Accident ={};

Accident.create = (accident, result)=>{
    const sql = `INSERT INTO USUARIO_ACCIDENTE(
        nombre,apellido,email,telefono,coche,latitud,longuitud,placa,created_at)
        VALUES(?,?,?,?,?,?,?,?,?)`;
    db.query(
        sql,[
            accident.nombre,
            accident.apellido,
            accident.email,
            accident.telefono,
            accident.coche,
            accident.latitud,
            accident.longuitud,
            accident.placa,
            new Date()],(err, res)  => {
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
Accident.showAccidents =(accident, result)=>{
const sql = `SELECT * FROM USUARIO_ACCIDENTE ORDER BY id DESC `;
db.query(
    sql,[accident.id], (err, accident) => {
        if (err) {
            console.log('Error to get accidents table', err);
        } else {
            console.log('Get accidentes: ', accident);
            result(null,accident);
        }
    }
)
};

module.exports = Accident;