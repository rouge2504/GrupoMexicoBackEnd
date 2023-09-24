const mercadoPagoController = require('../controllers/mercadoPagoController');
const passport = require('passport');
module.exports = (app) =>{
    app.post('/api/payment/create', mercadoPagoController.createPayment)
}
module.exports = (app) =>{
    app.post('/api/payment/createUser', mercadoPagoController.createClient)

}

module.exports = (app) =>{
    app.post('/api/payment/findUser', mercadoPagoController.findClient)

}



