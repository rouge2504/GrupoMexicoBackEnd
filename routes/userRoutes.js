const usersController = require('../controllers/usersController');
const carController = require('../controllers/carController');

module.exports = (app, upload) => {

    app.post('/api/users/create', usersController.register);
    app.post('/api/users/createWithImage', upload.array('image', 1), usersController.registerWithImage);
    app.post('/api/users/login', usersController.login);
    app.post('/api/car/createCar', carController.createCar);
	app.put('/api/users/update', upload.array('image', 1), usersController.updateWithImage);
	app.put('/api/users/updateWithoutImage', usersController.updateWithoutImage);

}