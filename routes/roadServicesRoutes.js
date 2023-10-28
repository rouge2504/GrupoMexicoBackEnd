const roadServicesController = require('../controllers/roadServicesController');

module.exports = (app, upload) => {
	app.post('/api/roadServices/createTollboth', roadServicesController.createRoadService);
	app.post('/api/roadServices/getTollboths', roadServicesController.getTollboths);

}