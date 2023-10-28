const express = require('express');
const session = require('express-session');
const app = express();
const http = require('http');
const server =  http.createServer(app);
const logger = require('morgan');
const cors =  require('cors');
const passport =  require('passport');
const multer = require('multer');
const mercadopago = require('mercadopago');

mercadopago.configure({
    sandbox: true,
    access_token: "TEST-8253011200569563-072319-c7a718c5097c269fb5dd529b71dda761-72540198",
});

/*
        IMPORTAR RUTAS
*/

const usersRoutes = require('./routes/userRoutes');
const mercadoPagoRoutes = require('./routes/mercadoPagoRoutes');
const accidentRoutes = require('./routes/accidentRoutes');
const roadServicesRoutes = require('./routes/roadServicesRoutes');

const port = process.env.PORT || 3000;
    app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extends: true
}));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.disable('x-powered-by');

app.set('port', port);

const upload = multer ({
    storage: multer.memoryStorage()
});


/*
    LLAMADO DE RUTAS
*/
usersRoutes(app, upload);
mercadoPagoRoutes(app);
accidentRoutes(app,upload);
roadServicesRoutes(app,upload);
server.listen(3000,'172.20.15.47' || 'localhost', function(){
    console.log('Aplicacion de NodeJS '+ port + ' Iniciada...')
});

app.get('/', (req,res) => (
    res.send('Ruta Raiz backend')
));

app.get('/test', (req,res) => (
    res.send('Ruta para test')
));

app.use((err, req, res, next) =>{
    console.log(err);
    res.status(err.status || 500).send(err.stacks);
})