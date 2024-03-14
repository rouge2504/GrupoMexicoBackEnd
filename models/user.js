const db = require('../config/config');

const bcrypt = require('bcryptjs');

const Users = {};

Users.findByID = (id, result) => {
	console.log('Id user: ', id);
	const sql = `
	SELECT * FROM users WHERE id = ?`

	db.query(sql, [id],
		(err, user) => {

			if(err){
                console.log('Error:' , err);
                result(err,null);
            }else{
            	console.log('ID Result: ', user[0]);
        		if(user.length == 0){
        			console.error("ID not found: ", err);
	                result(err,null);

        		}else{
                console.log('Usuario obtenido: ', user[0]);
                result(null,user[0]);
            }
            }
		}
		);


}

Users.findById = (id, result) =>{
    const sql = `
	SELECT 
		CONVERT(R.id,char) AS id, 
		U.email, 
		U.name, 
		U.lastname, 
		U.password,
		JSON_ARRAYAGG(
			JSON_OBJECT(
				'id', CONVERT(R.id, char),
				'name', R.name,
				'image', R.image,
				'route', R.route
			)
		) AS roles
	FROM users  AS U
	INNER JOIN 
		user_has_roles AS UHR
		ON
		UHR.id_user = U.id
	INNER JOIN
		roles AS R
	ON
		UHR.id_rol = R.id
	WHERE U.id = ?
	GROUP BY
		U.id`;

    db.query(
        sql, [id],
        (err, user) => {
            if(err){
                console.log('Error:' , err);
                result(err,null);
            }else{
                console.log('Usuario obtenido: ', user[0]);
                result(null,user[0]);
            }
        }
    );
}


Users.findByEmail = (email, result) =>{
    /*const sql = `
	SELECT 
		U.id, 
		U.email, 
		U.name, 
		U.lastname, 
		U.phone,
		U.password,
		JSON_ARRAYAGG(
			JSON_OBJECT(
				'id_user', CONVERT(U.id, char),
				'alias', UHC.alias,
				'image', UHC.image,
				'number_plate', UHC.number_plate,
				'mark', UHC.mark,
				'model', UHC.model,
				'year', UHC.year,
				'edges',UHC.edges
			)
		) AS cars
	FROM users  AS U
	INNER JOIN 
		user_has_car AS UHC
		ON
		UHC.id_user = U.id
	WHERE email = ?
	GROUP BY
		U.id`;*/

	const sql=`
	SELECT
		id, 
		email, 
		name, 
		lastname,
		phone,
		image,
		password
	FROM users
		WHERE email = ?
		`;

    db.query(
        sql, [email],
        (err, user) => {
        	console.log('Users ', user);
            if(err){
                console.log('Error:' , err);
                result(err,null);
            }else{
                console.log('Usuario obtenido: ', user[0]);
                result(null,user[0]);
            }
        }
    );
}

Users.create = async (user, result) => {
    const sql ='INSERT INTO users(email,name,lastname,phone,image,password,created_at,updated_at) VALUES(?,?,?,?,?,?,?,?)';

	const hash = await bcrypt.hash(user.password, 10);

    db.query(
        sql,[
            user.email,
            user.name,
            user.lastname,
            user.phone,
            user.image,
            hash,
            new Date(),
            new Date()
        ],
        (err, res) => {
            if(err){
                console.log('Error:' , err);
                result(err,null);
            }else{
                console.log('Id del nuevo usuario: ', res.insertId);
                result(null,res.insertId);
            }
        }
    )
}

Users.updateWithoutImage = (user, result) => {
	const sql = `
	UPDATE
		users
	SET
		name = ?,
		lastname = ?,
		phone = ?,
		updated_at = ?
	WHERE
		id = ?
	`;
	
	db.query(
        sql,[
            user.name,
            user.lastname,
            user.phone,
            new Date(),
			user.id
        ],
        (err, res) => {
            if(err){
                console.log('Error:' , err);
                result(err,null);
            }else{
                console.log('Usuario actualizado: ', user.id);
                result(null, user.id);
            }
        }
    )
	
	
}

Users.update = (user, result) => {
	const sql = `
	UPDATE
		users
	SET
		name = ?,
		lastname = ?,
		phone = ?,
		image = ?,
		updated_at = ?
	WHERE
		id = ?
	`;
	
	db.query(
        sql,[
            user.name,
            user.lastname,
            user.phone,
            user.image,
            new Date(),
			user.id
        ],
        (err, res) => {
            if(err){
                console.log('Error al tratar de actualizar:' , err);
                result(err,null);
            }else{
                console.log('Usuario actualizado: ', user.id);
                result(null, user.id);
            }
        }
    )
	
	
}

Users.updatePassword= async (user, result) => {
	const sql = `
	UPDATE
		users
	SET
		password = ?,
		updated_at = ?
	WHERE
		id = ?
	`;
	const hash = await bcrypt.hash(user.password, 10);
	db.query(
        sql,[
            hash,
            new Date(),
			user.id
        ],
        (err, res) => {
            if(err){
                console.log('Error al tratar de actualizar:' , err);
                result(err,null);
            }else{
                console.log('Usuario actualizado: ', user.id);
                result(null, user.id);
            }
        }
    )
	
	
}

module.exports = Users;