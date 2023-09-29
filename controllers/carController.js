const User = require ('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const storage = require('../utils/cloud_storage');
const Car = require ('../models/car');

module.exports = {
	async createCar(req, res)
	{
		console.log("Registrando carro");
		const id = req.body.id;
		User.findByID(id, async(err, myUser)=> {
			console.log('Usuario Car Controller', myUser);
			//const user = JSON.parse(myUser);
			if (myUser != null){
				console.log('Id for Car', myUser.id);
				console.log('Req Body', req.body);
				//const car = JSON.parse(req.body);
				Car.create(req.body, (err, data) => {
					console.log('Datos del carro', data);
					if(err){
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el registro del carro',
                    error: err
                });

      			return res.status(404).json({
                    success: false,
                    message: 'El carro no se creo',
                    data: err
                });;

            }

            console.log('Send Status 200');
                 return res.status(200).json({
                    success: true,
                    message: 'El carro se creo correctamente',
                    data: data
                });
				});
			}
			else {
				console.error('ALgo salio terriblemente mal');
      			return res.status(500).json({
                    success: false,
                    message: 'El carro no se creo',
                    data: err
                });;
			}
			 /*return res.status(200).json({
                    success: true,
                    message: 'El carro se creo correctamente',
                    data: myUser
                });*/

		});


	},

	async deleteCarByAlias(req, res){
		console.log('Deleting Car');
		Car.deleteCarByAlias(req.body, (err, data)=>{
			if (err){
				 return res.status(501).json({
                    success: false,
                    message: 'Error to delete car',
                    error: err
                });
			}

			 return res.status(200).json({
			    success: true,
			    message: 'Car deleted',
			    data: data
			});
		});
	},


		async deleteCarByNumberPlate(req, res){
		console.log('Deleting Car');
		Car.deleteCarByNumberPlate(req.body, (err, data)=>{
			if (err){
				 return res.status(501).json({
                    success: false,
                    message: 'Error to delete car',
                    error: err
                });
			}

			 return res.status(200).json({
			    success: true,
			    message: 'Car deleted',
			    data: data
			});
		});
	},

	async getCars(req, res){
		console.log('Get Cars');
		Car.getCars(req.body, (err, data)=>{
			if (err){
				return res.status(501).json({
					success: false,
                    message: 'Error to get cars',
                    error: err
				});
			}

			console.log(data);
			return res.status(200).json({
			    success: true,
			    message: 'Get Cars',
			    data: data
			});
		});

	}
}