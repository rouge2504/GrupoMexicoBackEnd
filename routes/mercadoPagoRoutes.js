const mercadoPagoController = require('../controllers/mercadoPagoController');
const passport = require('passport');
module.exports = (app) =>{
    app.post('/api/payment/create', mercadoPagoController.createPayment)
}