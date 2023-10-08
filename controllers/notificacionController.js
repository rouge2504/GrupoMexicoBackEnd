const User = require ('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const storage = require('../utils/cloud_storage');
const Notificacion = require ('../models/notificaciones');

module.exports = {
    async createNoti(req, res){
        console.log("Notificacion registrada");
        Notificacion.create(req.body,(err,data)=>{
            if (err){
				return res.status(501).json({
					success: false,
                    message: 'Error to set Notificacion',
                    error: err
				});
			}

			console.log(data);
			return res.status(200).json({
			    success: true,
			    message: 'Get Notificacion',
			    data: data
			});    
        });
    },

 async getNotificaciones(req,res){
	console.log("Get Notificacion");
	Notificacion.getNotificaciones(req.body,(err,data)=>{
		if (err){
			return res.status(501).json({
				success: false,
				message: 'Error to get notificaciones',
				error: err
			});
		}

		console.log(data);
		return res.status(200).json({
			success: true,
			message: 'Get Notificaciones',
			data: data
		});
	});
 },
 async getNotificacionesById(req,res){
	console.log("Get Notificacion con ID");
	Notificacion.getNotificacionesById(req.body,(err,data)=>{
		if (err){
			return res.status(501).json({
				success: false,
				message: 'Error to get notificaciones',
				error: err
			});
		}

		console.log(data);
		return res.status(200).json({
			success: true,
			message: 'Get Notificaciones',
			data: data
		});
	});
 }
}