const { upload } = require('@google-cloud/storage/build/src/resumable-upload');
const accidentController = require('../controllers/accidentController');
const { update } = require('../models/user');

module.exports = (app, upload) =>{
    app.post('/api/accident/create',accidentController.createAccident);
    app.get('/api/accident/showAccidents',accidentController.getAccidents);
}
