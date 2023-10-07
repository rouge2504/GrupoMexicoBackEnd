const User = require ('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const storage = require('../utils/cloud_storage');
const Accident = require ('../models/accident');

module.exports = {
    async createAccident(req, res){
        console.log("Accidente detectado");
        Accident.create(req.body,(err,data)=>{
            if (err){
				return res.status(501).json({
					success: false,
                    message: 'Error to get accident',
                    error: err
				});
			}

			console.log(data);
			return res.status(200).json({
			    success: true,
			    message: 'Get Accident',
			    data: data
			});    
        });
    },

    async getAccidents(req, res){
        console.log("Accidente detectado");
        Accident.showAccidents(req.body,(err,data)=>{
            if (err){
				return res.status(501).json({
					success: false,
                    message: 'Error to get accident',
                    error: err
				});
			}

			console.log(data);
			return res.status(200).json({
			    success: true,
			    message: 'Get Accident',
			    data: data
			});    
        });
    }
}