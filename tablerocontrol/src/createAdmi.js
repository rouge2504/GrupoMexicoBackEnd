import React,{useState} from "react";
import Axios from 'axios';
//import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const apiNameSet = 'http://26.255.20.111:3000/api/userAdmin/createAdmin';


const AdminLogin = ()=> {

  const[Nombre, setNombre] =useState("");
  const[ApellidoPaterno, setApellidoPaterno] = useState("");
  const[ApellidoMaterno,setApellidoMaterno]=useState("");
  const[Email,setEmail]=useState("");
  const[Rol, setRol] = useState("");
  const[Contraseña,setContraseña]=useState("");

  const[ShowAdmins, setAdmins]=useState(false);

  const addAdmin=()=>{
    Axios.post(apiNameSet,{
      nombre:Nombre,
      apellido_paterno:ApellidoPaterno,
      apellido_materno:ApellidoMaterno,
      email:Email,
      rol:Rol,
      contraseña:Contraseña
    }).then(()=>{
      clearDataAdmin();
      alert("Registro de Admin");
    });
  }
  const clearDataAdmin=()=>{
    setNombre("");
    setApellidoPaterno("");
    setApellidoMaterno("");
    setEmail("");
    setRol("");
    setContraseña("");

}

const SetShowAdmin=()=>{
  setAdmins(!ShowAdmins);
}


const formularioAdmin=()=>{
  return(
    <div>
              <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Nombre</span>
              <input type="text" value={Nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="form-control" placeholder="Ingrese el nombre del Administrador" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

              <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">ApellidoPaterno</span>
              <input type="text" value={ApellidoPaterno}
              onChange={(e) => setApellidoPaterno(e.target.value)}
              className="form-control" placeholder="Ingrese el Apellido Paterno del Administrador" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">ApellidoMaterno</span>
              <input type="text" value={ApellidoMaterno}
              onChange={(e) => setApellidoMaterno(e.target.value)}
              className="form-control" placeholder="Ingrese el Apellido Materno del Administrador" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Email</span>
              <input type="email" value={Email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control" placeholder="Ingrese el email del Administrador" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Rol</span>
              <input type="email" value={Rol}
              onChange={(e) => setRol(e.target.value)}
              className="form-control" placeholder="Ingrese el rol del Administrador" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Contraseña</span>
              <input type="email" value={Contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              className="form-control" placeholder="Ingrese la contraseña " aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <button type="button" className="btn btn-outline-danger" onClick={addAdmin}>Salvar Administrador</button>
    </div>
  )
}

  return (
<div className="container">


<div className="Administradores">

</div>
<div className="card text-center">
<div className="card-header">
Administradores
</div>
<div className="card-body">
{ShowAdmins?(
  <div>
    {formularioAdmin()}
  </div>
):(
  <p>Haz click para generar un Administrador</p>
)

}
</div>
<div className="card-footer text-muted">
<button type="button" className="btn btn-outline-danger" onClick={SetShowAdmin}>Administrador</button>
</div>
</div>
</div>

    ); 
}
export default AdminLogin;
