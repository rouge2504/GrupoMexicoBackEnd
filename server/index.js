const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const http = require("http");//.Server(app); // Agregamos el servidor HTTP para usar con socket.io
const socketIo = require('socket.io');
const server = http.createServer(app);

const io = socketIo(server,{
    cors: {origin: '*' }
});
const corsOptions = {
    origin: "http://localhost:3000", // Reemplaza con la URL de tu aplicación de React
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

app.use(cors(corsOptions));
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "reactrojo"
});



app.post("/create", (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const email = req.body.email;
    const contraseña = req.body.contraseña;

    db.query('INSERT INTO users(email,name,lastname,password) VALUES(?,?,?,?)', [email, nombre, apellido, contraseña],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                // Modificamos la notificación para incluir un mensaje
                const nuevaNotificacion = { mensaje: "Nuevo usuario registrado", nombre, apellido };
                res.send("Usuario registrado con éxito, capibara");
            }
        }
    );
});
// Ruta para obtener el historial de notificaciones
//app.get("/notificaciones", (req, res) => {
//    res.json(historialNotificaciones);
//});
app.get("/usuarios", (req, res) => {
    db.query('SELECT * FROM users', 
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});
app.put("/updateUsuario", (req, res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const email = req.body.email;
    const contraseña = req.body.contraseña;

    db.query('UPDATE users SET email = ?,name= ?,lastname= ? WHERE id = ?', [email, nombre, apellido,id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                // Modificamos la notificación para incluir un mensaje
                //const nuevaNotificacion = { mensaje: "Nuevo usuario registrado", nombre, apellido };
                res.send("Usuario actualizado con éxito, capibara");
            }
        }
    );
});


    io.on('connection', (socket) => {
    console.log('Cliente conectado');

    socket.on('enviarInformacion', (data) => {
        console.log('Información recibida desde la aplicación de usuario:', data);
        // Procesar la información y enviarla al tablero de control
        io.emit('informacionParaTablero', data);
      });

    socket.on('enviarMensaje', (mensaje) => {
        console.log('Mensaje recibido desde el tablero de control:', mensaje);
        // Enviar el mensaje a la aplicación de usuarios
        io.emit('mensajeParaUsuarios', mensaje);
      });
    
      socket.on('disconnect', () => {
        console.log('Cliente desconectado');
      });
    });


    server.listen(3001, () => {
        console.log("Funcionando en el puerto 3001");
    });

