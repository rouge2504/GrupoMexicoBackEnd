const User = require ('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const storage = require('../utils/cloud_storage');
const UserAdmin = require ('../models/userAdmin');

module.exports = {
    async createAdmin(req, res){
        console.log("Usuario registrado");
        UserAdmin.createAdmin(req.body,(err,data)=>{
            if (err){
				return res.status(501).json({
					success: false,
                    message: 'Error to get ADMIN',
                    error: err
				});
			}

			console.log(data);
			return res.status(200).json({
			    success: true,
			    message: 'Get ADMIN',
			    data: data
			}); 

        });
    },

	async getAdmins(req, res){
		console.log("Obteniendo Admins");
		UserAdmin.getAdmin(req.body,(err,data)=>{
			if (err){
				return res.status(501).json({
					success: false,
                    message: 'Error to get Admins',
                    error: err
				});
			}

			console.log(data);
			return res.status(200).json({
			    success: true,
			    message: 'Get Admins',
			    data: data
			});    
		});
	},
	async getAdminByEmail(req, res){
		console.log("Obteniendo Admins");
		UserAdmin.getAdminByEmail(req.body,(err,data)=>{
			if (err){
				return res.status(501).json({
					success: false,
                    message: 'Error to get Admins',
                    error: err
				});
			}

			console.log(data);
			return res.status(200).json({
			    success: true,
			    message: 'Get Admins',
			    data: data
			});    
		});
	}
}