const { upload } = require('@google-cloud/storage/build/src/resumable-upload');
const notificacionController = require('../controllers/notificacionController');
const { update } = require('../models/user');

module.exports=(app,upload)=>{
    app.post('/api/notificaciones/create',notificacionController.createNoti);
    app.get('/api/notificaciones/getNotificaciones',notificacionController.getNotificaciones);
    app.get('/api/notificaciones/getNotificacionesById',notificacionController.getNotificacionesById);
}