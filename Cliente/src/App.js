import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import io from 'socket.io-client';

const socket = io('http://localhost:3001'); // Conectar al servidor Node.js
//import io from "socket.io-client"; // Importa socket.io-client

function App() {
    const [email, setEmail] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [contraseña, setPassword] = useState("");
    const [id, setId] = useState();

    const [editar, setEditar] = useState(false);
    const [showUsers, setShowUser] = useState(false);

    const [showNoti, setShowNoti] = useState(false);
    const [textNotificacion, setTextNoti] =useState("");
   
    const [usuariosList,setUsuarios] = useState([]);

    const [informacionRecibida, setInformacionRecibida] = useState(null);

  useEffect(() => {
    socket.on('informacionParaTablero', (data) => {
      console.log('Información recibida en el tablero de control:', data);
      setInformacionRecibida(data);
    });
  }, []);
    

    const add = () => {
        Axios.post("http://localhost:3001/create", {
            email: email,
            nombre: nombre,
            apellido: apellido,
            contraseña: contraseña
        }).then(() => {
           getUsuarios();
            limpiarCampos();
            alert("Usuario registrado");
        });
    }
    const editarUsuario =(val) =>{
        setEditar(true);
        setNombre(val.name);
        setApellido(val.lastname);
        setEmail(val.email);
        //setPassword(val.password);
        setId(val.id);
    }
    const updateUser = () => {
        Axios.put("http://localhost:3001/updateUsuario", {
            id: id,    
            email: email,
            nombre: nombre,
            apellido: apellido
        }).then(() => {
            getUsuarios();
            limpiarCampos();
            alert("Usuario Actualizado");
        });
    }

    const getUsuarios = ()=> {
        Axios.get("http://localhost:3001/usuarios").then((response) => {
           setUsuarios(response.data);
        });
    }

    const ShowUsersAction =()=>{
        getUsuarios();
        setShowUser(!showUsers);
    }

    const limpiarCampos = ()=>{
        setNombre("");
        setApellido("");
        setEmail("");
        setPassword("");
        setId();
        setEditar(false);
    }
    //getUsuarios();
    const sendNoti =()=>{
        setShowNoti(!showNoti);
    }
    const enviarMensaje = () => {
        socket.emit('enviarMensaje', textNotificacion);
        alert("Mensaje enviado a Server y usuarios");
      };
      
    //  const backgroundImageStyle = {
      //  backgroundImage: 'url("/cliente/Img/GrupoMexicoLogo.jpg")', // Reemplaza con la ruta real de tu imagen
        //backgroundSize: '100% 100%', // Ajusta el tamaño de fondo
        //backgroundRepeat: 'no-repeat',
        //backgroundPosition: 'center',
        //display: 'flex',
        //flexDirection: 'column',
        //justifyContent: 'center',
      //};
    
    return (
  
       
        <div className="container" >
            
        <div className="card text-center">
        <div className="card-header">
            TABLERO DE CONTROL
        </div>
        {!showNoti && ( 
        <div className="card-body">
           
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Nombre:</span>
                <input type="text" value={nombre}
                onChange={(event) => setNombre(event.target.value)}
                
                className="form-control"  placeholder="Ingrese un Nombre" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Apellido:</span>
                <input type="text" value={apellido}
                onChange={(event) => setApellido(event.target.value)}
                
                className="form-control" placeholder="Ingrese un Apellido" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Email:</span>
                <input type="email" value={email}
                onChange={(event) => setEmail(event.target.value)}
                
                className="form-control"  placeholder="Ingrese un Email" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Contraseña:</span>
                <input type="password"  
                onChange={(event) => setPassword(event.target.value)}
                
                className="form-control" placeholder="Ingrese una Contraseña" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>   
        </div>
        )} 
        {showNoti &&( 
            <div className="card-body">
                <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Notificacion:</span>
                <input type="text"  value={textNotificacion}
                onChange={(event) => setTextNoti(event.target.value)}
                
                className="form-control"  placeholder="Ingrese la Notificacion" aria-label="Username" aria-describedby="basic-addon1"/>
                <button className='btn btn-warning m-2' onClick={enviarMensaje}>Enviar</button>
            </div>
            </div>
        )}

        <div className="card-footer text-muted">
            {
                
                editar?
                <div>
                <button className='btn btn-warning m-2' onClick={updateUser}>Update</button>
                <button className='btn btn-info m-2' onClick={limpiarCampos}>Cancelar</button>
                </div>
                :
                <div>
                <button className='btn btn-danger m-2' onClick={add}>Registrar</button>
                <button type="button" className="btn btn-outline-danger m-2" onClick={ShowUsersAction}>Mostrar Usuarios</button>
                <button type="button" className="btn btn-danger m-2" onClick={sendNoti}>Enviar Notificacion</button>
                </div>

            }
            
        </div>
        </div>
        {showUsers &&(
        <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Email</th>
                <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
            {
            usuariosList.map((val,key) => {
                return <tr key={val.id}>
                        <th>{val.id}</th>
                        <td>{val.name}</td>
                        <td>{val.lastname}</td>
                        <td>{val.email}</td>
                        <td>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" 
                            onClick={()=>{
                                editarUsuario(val);
                            }}
                            className="btn btn-info">Editar</button>
                            <button type="button" className="btn btn-danger">Eliminar</button>
                        </div>
                        </td>
                    </tr> 
                })
            }
                
                
            </tbody>
        </table>
        )}
        </div>
    );
}

export default App;


    //const toggleNotificaciones = () => {
        // Cambia el estado para mostrar/ocultar las notificaciones al hacer clic en el botón
       // setMostrarNotificaciones(!mostrarNotificaciones);
    //}
    /*const enviarEventoAlServidor = () => {
      const datosUsuario = {
          nombre: nombre,
          apellido: apellido,
         // posicion: "inventa una posición", // Puedes inventar una posición aquí
      };
  
      // Envía el evento "nuevoUsuario" con los datos del usuario al servidor
      socket.emit("nuevoUsuario", datosUsuario);

       <button onClick={getUsuarios}>Mostrar Datos</button>
            {
              usuariosList.map((val) => {
                return (
                    <div key={val.email}>
                        {val.name + " " + val.lastname}
                    </div>)
            })
            }
    }*/