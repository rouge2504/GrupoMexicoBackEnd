const User = require ('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const storage = require('../utils/cloud_storage');
const RoadServices = require ('../models/roadServices');


module.exports = {
	async createRoadService(req, res){
		console.log ("Registrando Servicio De Carretera");
		RoadServices.createRoadService(req.body, (err, data) => {
			if (err){
				return res.status(501).json({
					success: false,
                    message: 'Error al crear RoadService',
                    error: err
				});
			}

			console.log(data);
			return res.status(200).json({
			    success: true,
			    message: 'Creando RoadService',
			    data: data
			});
		});
	},

		async getTollboths(req, res){
		console.log('Get tollboths');
		RoadServices.getTollboths(req.body, (err, data)=>{
			if (err){
				return res.status(501).json({
					success: false,
                    message: 'Error to get tollboths',
                    error: err
				});
			}

			console.log(data);
			return res.status(200).json({
			    success: true,
			    message: 'Get tollboths',
			    data: data
			});
		});

	}
}