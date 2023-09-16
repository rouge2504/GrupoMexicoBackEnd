const db = require('../config/config');

const Car = {};

Car.create = (car_user, result)=>{
	const sql = `
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
                result(null,car_user.alias);
            }
        }
    );
}

module.exports = Car;