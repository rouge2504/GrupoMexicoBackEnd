const accidentController = require('../controllers/accidentController');
const { update } = require('../models/user');

module.exports = (app, upload) =>{
    app.post('/api/accident/create',accidentController.createAccident)
}