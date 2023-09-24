const User = require ('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const storage = require('../utils/cloud_storage');
const CreditCard = require('../models/creditCard');

module.exports = {

	async createCard(req, res){
		console.log('Registrando tarjeta');
		const id = req.body.id_user;
        console.log("id", id);
        console.log("Body", req.body);
		CreditCard.createCreditCard(req.body, (err, data) => {
			console.log('Card Controller User', data);
			if (data != null){
				if(err){
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el registro de la tarjeta',
                    error: err
                });

      			return res.status(404).json({
                    success: false,
                    message: 'La tarjeta no se creo',
                    data: err
                });

            }
            console.log('Send Status 200');
                 return res.status(200).json({
                    success: true,
                    message: 'La tarejta no  se creo correctamente',
                    data: data
                });

			}else {
				console.error('ALgo salio terriblemente mal');
      			return res.status(500).json({
                    success: false,
                    message: 'La tarejta no  se creo correctamente',
                    data: err
                });
			}
			
		});
	},

        async getCards(req, res){
        console.log('Get Cards');
        CreditCard.getCards(req.body, (err, data)=>{
            if (err){
                return res.status(501).json({
                    success: false,
                    message: 'Error to get cards',
                    error: err
                });
            }



            return res.status(200).json({
                success: true,
                message: 'Get Cards',
                data: data
            });
        });

    }
}