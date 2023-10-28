const db = require('../config/config');

const RoadServices = {};

RoadServices.createRoadService = (RoadService, result)=> {
	const sql = `INSERT INTO 
		road_services(
			id_services,
			name,
			adress,
			lat,
			lon,
			cost,
			created_at,
			updated_at
		)
		VALUES(?,?,?,?,?,?,?,?)
		`;

		db.query(sql, [
			RoadService.id_services,
			RoadService.name,
			RoadService.adress,
			RoadService.lat,
			RoadService.lon,
			RoadService.cost,
						new Date(),
						new Date()], (err, res )=> {
							if (err){
								console.log('Error to create RoadService:' , err);
				                result(err,null);
							}else{
				                console.log('RoadService obtenido: ', RoadService.name);
				                result(null,RoadService);
							}
						});

}

RoadServices.getTollboths = (tollboth, result) => {
	const sql = `
		SELECT * FROM road_services WHERE id_services = ?
	`;

	db.query(sql, [tollboth.id_services], (err, tollboths) => {
		if (err){
			console.log('Error to get tollboth', err);
			result(err,null);
		}else{
			console.log('Get tollboths: ', tollboths);
			result(null, tollboths);
		}
	});
}




module.exports = RoadServices;