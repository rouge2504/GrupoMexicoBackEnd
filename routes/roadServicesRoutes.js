const roadServicesController = require('../controllers/roadServicesController');

module.exports = (app, upload) => {
	app.post('/api/roadServices/createTollboth', roadServicesController.createTollboth);
	app.get('/api/roadServices/getTollboths', roadServicesController.getTollboths);

}