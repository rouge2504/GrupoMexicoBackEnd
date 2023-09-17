const db = require('../config/config');

const Car = {};

Car.create = (car_user, result)=>{

const sql = `
	SELECT * FROM user_has_car WHERE id_user = ?`

	db.query(sql, [car_user.id],
		(err, car) => {

			if(err){
                console.log('Error:' , err);
                result(err,null);
            }else{
            	console.log('ID Result: ', car[0]);
        		if(car.length >= 3){
        			console.error("Limit of car: ", car.length);
	                result(err,null);

        		}else{

            	const sql_car = `
					INSERT INTO 
						user_has_car(
							id_user,
							image,
							alias,
							number_plate,
							mark,
							model,
							year,
							edges,
							created_at,
							updated_at
						)
						VALUES(?,?,?,?,?,?,?,?,?,?)
					`;
					db.query(
				        sql_car, [car_user.id, 
				        	car_user.image, 
				        	car_user.alias, 
				        	car_user.number_plate, 
				        	car_user.mark, 
				        	car_user.model, 
				        	car_user.year, 
				        	car_user.edge, new Date(), new Date()],
				        (err, res) => {
				            if(err){
				                console.log('Error:' , err);
				                result(err,null);
				            }else{
				                console.log('Carro obtenido: ', car_user.alias);
				                result(null,car_user);
				            }
				        }
				    );
                //console.log('Car get: ', car[0]);
                //result(null,car[0]);
				            }
				            }
						}
						);


	/*const sql = `
	INSERT INTO 
		user_has_car(
			id_user,
			image,
			alias,
			number_plate,
			mark,
			model,
			year,
			edges,
			created_at,
			updated_at
		)
		VALUES(?,?,?,?,?,?,?,?,?,?)
	`;
	db.query(
        sql, [car_user.id, 
        	car_user.image, 
        	car_user.alias, 
        	car_user.number_plate, 
        	car_user.mark, 
        	car_user.model, 
        	car_user.year, 
        	car_user.edge, new Date(), new Date()],
        (err, res) => {
            if(err){
                console.log('Error:' , err);
                result(err,null);
            }else{
                console.log('Carro obtenido: ', car_user.alias);
                result(null,car_user);
            }
        }
    );*/
}

Car.deleteCarByAlias = (car_alias, result)=>{
	const sql= `
		DELETE FROM user_has_car WHERE alias=?
	`;

	db.query(sql, [car_alias.alias], (err, car)=> {
		if(err){
            console.log('Error to delete car:' , err);
            result(err,null);
        }else{
            console.log('Delete Car: ', car_alias.alias);
            result(null,car_alias);
        }
	});
}

Car.deleteCarByNumberPlate = (car, result)=>{
	const sql= `
		DELETE FROM user_has_car WHERE number_plate=?
	`;

	db.query(sql, [car.number_plate], (err, car)=> {
		if(err){
            console.log('Error to delete car:' , err);
            result(err,null);
        }else{
            console.log('Delete Car: ', car.number_plate);
            result(null,car);
        }
	});
}

Car.getCars = (car, result) => {
	const sql = `
		SELECT * FROM user_has_car WHERE id_user = ?
	`;

	db.query(sql, [car.id_user], (err, cars) => {
		if (err){
			console.log('Error to get cars', err);
			result(err,null);
		}else{
			console.log('Get Cars: ', cars);
			result(null, cars);
		}
	});
}


module.exports = Car;