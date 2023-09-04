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

module.exports = { async fiendClient(req, res){ 
    let client = req.body;
    console.log('Crear Cliente', client); 
    

 /*    var customer_data = { 
         "email": customer.email,
        
  "first_name": customer.first_name,
  "last_name": customer.last_name,
  "phone": {
    "area_code": customer.area_code,
    "number": customer.number },
  "identification": {
    "type": "CPF",
    "number": "12345678900" },
  "default_address": "Home",
  "address": {
    "id": "123123",
    "zip_code": "01234567",
    "street_name": "Rua Exemplo",
    "street_number": 123,
    "city": {} },
  "date_registered": "2021-10-20T11:37:30.000-04:00",
  "description": "Description del user",
  "default_card": "None"

}*/

    var customer_data = { 
        "email":client.email 
    }

  /*  mercadopago.customers.create(customer_data).then(function (customer) {


        console.log('Customer despues de email',customer.body);
        let customer_body = customer.body;
        console.log('Customer ID on log: ', customer_body.client_id);
      var card_data = {
        "token": "9b2d63e00d66a8c721607214cedaecda",
        "customer_id": customer_body.client_id,
        "issuer_id": "23",
        "payment_method_id": "debit_card",
        "description": client.description
      }
      console.log('Customer Card Data',card_data);


      console.log('Customer Card Data Body',card_data.body);
            console.log('Customer Card Data Customer ID',card_data.customer_id);



      mercadopago.card.create(card_data).then(function (cardCreated) {
        console.log(cardCreated);
      console.log('Este es el status card: ',cardCreated.status);
}).catch(function(error){
    //console.log('Dentro del error body: ', cardCreated.body);
  console.log(error);
});
     });*/

    const data = await mercadopago.customers.create(customer_data).catch((err) => {
        console.log('Error de mercado pago', err);
        console.log('Status ', res.status );
        return res.status(501).json({
            success: true,
            message: 'Error al crear el pago',
            error: errr,
        })
    });

    if (data){
        console.log('Los a ver que tal sale este jale', data.status);
        if (data !== undefined){
        }
    }

    return res.status(201).json({
                    success: true,
                    message: 'El cliente se creo correctamente',
                    data: data
                });
 }}

module.exports = {
    async findClient(req, res){
        let client = req.body;
        console.log('Find Client: ', client);

          var filters = {
    email:client.email,
  };

  mercadopago.customers.search({
    qs: filters
  }).then(function (customer) {
    console.log(customer);

    return res.status(200).json({
        success: true,
        message: 'El cliente se encontro correctamente',
        data: data
    });
  });

    }}