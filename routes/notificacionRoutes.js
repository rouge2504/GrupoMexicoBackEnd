const { upload } = require('@google-cloud/storage/build/src/resumable-upload');
const notificacionController = require('../controllers/notificacionController');
const { update } = require('../models/user');

module.exports=(app,upload)=>{
    app.post('/api/notificaciones/create',notificacionController.createNoti);
}