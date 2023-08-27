var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken('TEST-8253011200569563-072319-c7a718c5097c269fb5dd529b71dda761-72540198');


module.exports = {
    async createPayment(req, res){
        let payment = req.body;
        console.log('PAYMENT: ', payment);
/*
        const payment_data = {
            token: payment.token,
            issuer_id: payment.issuer_id,
            payment_method_id: payment.payment_method_id,
            transaction_amount: payment.transaction_amount,
            installments: payment.installments,
            description: "Producto de prueba",
            payer: {
              email: payment.payer.email,

            }
    }*/
	
	
	let preference = {
  items: [
    {
                  token: payment.token,
            issuer_id: payment.issuer_id,
            payment_method_id: payment.payment_method_id,
            transaction_amount: payment.transaction_amount,
            installments: payment.installments,
            description: "Producto de prueba",
			quantity: payment.quantity,
			unit_price: payment.unit_price,
            payer: {
              email: payment.payer.email,
              /*identification: {

                number: payment.payer.identification.number,
              }*/
            }
    }
  ]
}
mercadopago.preferences.create(preference).then(function(response){
  console.log(response);
  console.log('Este es el status ',response.status);
}).catch(function(error){
  console.log(error);
});
   /* const data = await mercadopago.payment.create(payment_data).catch((err) => {
        console.log('Error de mercado pago', err);
        return res.status(501).json({
            success: true,
            message: 'Error al crear el pago',
            error: errr,
        })
    });
		console.log(data);

    if (data){
        console.log('Los datos del cliente son correctos', data.response);
        if (data !== undefined){
            const order = payment.order;
        }
    }*/
}
}