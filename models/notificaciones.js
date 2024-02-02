const db = require('../config/config');
const Notificacion = {};

Notificacion.create =(noti, result)=>{
    const sql =`INSERT INTO notificaciones_img(
        Titulo,Descripcion,URLImagen,Emission_date,Finalizacion_date)
        VALUES(?,?,?,?,?)`;
        db.query(
            sql,[
                noti.Titulo,
                noti.Descripcion,
                noti.URLImagen,
                noti.Emission_date,
                noti.Finalizacion_date],(err,res) =>{
                    if(err){
                        console.log('Error:' , err);
                        result(err,null);
                    }else{
                        console.log('Notificacion registrada: ', noti.Descripcion);
                        result(null,result);
                    }   
                }
        );
};
Notificacion.getNotificaciones =(noti,result)=>{
const sql =`SELECT * FROM notificaciones_img`;
db.query(
sql,(err,noti)=>{
    if (err) {
        console.log('Error to get notificaciones table', err);
    } else {
        console.log('Get notificaciones: ', noti);
        result(null,noti);
    }
}
)
};

Notificacion.getNotificacionesById = (noti,result)=>{
    const sql =`SELECT * FROM notificaciones_img WHERE id = ?`;
    db.query(
    sql,[
        noti.id
    ],(err,noti)=>{
        if (err) {
            console.log('Error to get notificaciones table', err);
        } else {
            console.log('Get notificaciones: ', noti);
            result(null,noti);
        }
    }
    )
};
module.exports = Notificacion;