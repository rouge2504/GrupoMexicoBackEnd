const { upload } = require('@google-cloud/storage/build/src/resumable-upload');
const userAdminController = require('../controllers/userAdminController');
const { update } = require('../models/user');

module.exports = (app, upload)=>{
    app.post('/api/userAdmin/createAdmin', userAdminController.createAdmin);
    app.get('/api/userAdmin/getAdmin',userAdminController.getAdmins);
    app.get('/api/userAdmin/getAdminByEmail',userAdminController.getAdminByEmail);
    app.post('/api/userAdmin/logIn', userAdminController.logIn);
}