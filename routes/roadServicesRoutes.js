const roadServicesController = require('../controllers/roadServicesController');

module.exports = (app, upload) => {
	app.post('/api/roadServices/createRoadService', roadServicesController.createRoadService);
	app.post('/api/roadServices/getTollboths', roadServicesController.getTollboths);

}