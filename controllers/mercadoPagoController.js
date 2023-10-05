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
},


async createClient(req, res){ 
    let client = req.body;
    console.log('Crear Cliente', client); 
    


    var customer_data = { 
        "email":client.email 
    }

    let activeError = false;

    const data = await mercadopago.customers.create(customer_data).catch((err) => {
        console.log('Error de mercado pago', err);
        console.log('Error de mercado pago status', err.status);
        console.log('Status ', res.status );

        if (err.status == 400){
                activeError = true;
        }

        if (res.status == 400){
            return res.status
        }
        return res.status(501).json({
            success: false,
            message: 'Error al crear el pago',
            error: err,
        })

    });

    if (activeError){
            console.log('Mandado algo de este puto error');


            const customer = {
  success: false,
  message: "Usuario ya existe",
  data: "",
};


const jsonString = JSON.stringify(customer);
            return jsonString;

    }


    if (data){
        console.log('Los a ver que tal sale este jale', data.status);
        if (data !== undefined){
            console.log('No esta definido');
        }
            console.log('Esta definido');
    }

    return res.status(201).json({
                    success: true,
                    message: 'El cliente se creo correctamente',
                    data: data.body
                });
 },


  async findClient(req, res){
        let client = req.body;
        console.log('Find Client: ', client);

          var filters = {
    email:client.email,
  };

  data  = mercadopago.customers.search({
    qs: filters
  }).then(function (customer) { 
    console.log(customer);


  });

  console.log(data.status);
    return res.status(200).json({
        success: true,
        message: 'El cliente se encontro correctamente',
        data: data
    });
    }
}


/*
module.exports = { async createUser(req, res){ 
    let client = req.body;
    console.log('Crear Cliente', client); 
    


    var customer_data = { 
        "email":client.email 
    }

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
*/

/*
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

    }

}
*/