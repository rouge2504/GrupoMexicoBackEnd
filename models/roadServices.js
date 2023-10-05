const db = require('../config/config');

const RoadServices = {};

RoadServices.createTollboth = (tollboth, result)=> {
	const sql = `INSERT INTO 
		road_services(
			name,
			adress,
			lat,
			lon,
			cost,
			created_at,
			updated_at
		)
		VALUES(?,?,?,?,?,?,?)
		`;

		db.query(sql, [tollboth.name,
						tollboth.adress,
						tollboth.lat,
						tollboth.lon,
						tollboth.cost,
						new Date(),
						new Date()], (err, res )=> {
							if (err){
								console.log('Error to create Tollboth:' , err);
				                result(err,null);
							}else{
				                console.log('Tollboth obtenido: ', tollboth.name);
				                result(null,tollboth);
							}
						});

}

Car.getTollboths = (tollboth, result) => {
	const sql = `
		SELECT * FROM road_services WHERE name = ?
	`;

	db.query(sql, [tollboth.name], (err, cars) => {
		if (err){
			console.log('Error to get tollboth', err);
			result(err,null);
		}else{
			console.log('Get tollboths: ', tollboth);
			result(null, tollboth);
		}
	});
}




module.exports = RoadServices;