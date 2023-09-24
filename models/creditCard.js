const db = require('../config/config');

const bcrypt = require('bcryptjs');

const Card = {};

Card.test = (card_user, result) => {
	console.log('A casa');
},

Card.createCreditCard = async (card_user, result) => {
	const sql =`
		SELECT * FROM user_card WHERE id_user = ?
		`;
	

	const hash = await bcrypt.hash(card_user.nip, 10);

	db.query(sql, [card_user.id_user], (err, card) => {
		if (err){
			console.log('Error: ', err);
			result(err, null);
		}else{
			const sql_card = `
				INSERT INTO 
					user_card(
						id_user,
						id_card,
						number_card,
						nip,
						created_at,
						updated_at
					)
					VALUES(?,?,?,?,?,?)
			`;

			db.query(sql_card, [
					card_user.id_user,
					card_user.id_card,
					card_user.number_card,
					hash,
					new Date(), 
					new Date()
				], (err, res) => {
				if (err){
					console.log('Error: ', err );
					result(err,null);
				}else{
					console.log('Card obtenido: ', card_user.id_user);
					result(null, card_user);
				}
			});
		}
	});
},

Card.getCards = (card, result) => {
	const sql = `
		SELECT * FROM user_card WHERE id_user = ?
	`;

	db.query(sql, [card.id_user], (err, cars) => {
		if (err){
			console.log('Error to get cards', err);
			result(err,null);
		}else{
			console.log('Get Cards: ', cars);
			result(null, cars);
		}
	});

}

module.exports = Card;