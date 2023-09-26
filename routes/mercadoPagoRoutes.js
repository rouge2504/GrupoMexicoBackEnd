const mercadoPagoController = require('../controllers/mercadoPagoController');
const passport = require('passport');
module.exports = (app) =>{
    app.post('/api/payment/create', mercadoPagoController.createPayment)
    app.post('/api/payment/createUser', mercadoPagoController.createClient)
    app.post('/api/payment/findUser', mercadoPagoController.findClient)
}

/*
module.exports = (app) =>{

}

module.exports = (app) =>{

}
*/


