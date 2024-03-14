const usersController = require('../controllers/usersController');
const carController = require('../controllers/carController');
const cardController = require('../controllers/cardController');

module.exports = (app, upload) => {

    app.post('/api/users/create', usersController.register);
    app.post('/api/users/createWithImage', upload.array('image', 1), usersController.registerWithImage);
    app.post('/api/users/login', usersController.login);
    app.post('/api/car/createCar', carController.createCar);
    app.post('/api/car/deleteCarByAlias', carController.deleteCarByAlias);
    app.post('/api/car/getCars', carController.getCars);
    app.post('/api/car/deleteCarByNumberPlate', carController.deleteCarByNumberPlate);
    app.post('/api/card/createCard', cardController.createCard);
    app.post('/api/card/getCards', cardController.getCards);
	app.put('/api/users/update', upload.array('image', 1), usersController.updateWithImage);
    app.put('/api/users/updateWithoutImage', usersController.updateWithoutImage);
	app.post('/api/users/updatePassword', usersController.updatePassword);

}