import './App.css';
//import React, { useState, useEffect } from "react";
import axios from "axios";
import AccidentesList from './AccidentsValue';
import NotificacionesReact from './NotificacionesReact';
import RoadServices from './roadservice';
import AdminLogin from './createAdmi';
//import { FormularioLog } from './FormularioLogIn';
import { useState } from 'react';
import "./FormularioLog.css"
//import LoginAdmin from './logAdmin';

//const apiNameGet ='/api/accident/showAccidents';
//const apiName = 'http://192.168.1.89:3000/api/accident/showAccidents';

function App() {
  const [nombreUser, setNombreUser] = useState("");
    const [contraseñaUser, setContraseñaUser] = useState("");
    const [bool1,setBool] = useState(false);
   const [error,setError] =useState(false);
    const apiName ='http://26.255.20.111:3000/api/userAdmin/logIn';
//const [ShowContent, setShowCont] = useState(false);
//const [bool1, setBool] = useState(false);
/*const SetContent =()=>{
  if( === true){
    setShowCont(false);
  }
 
}*/
const handleSubmit =(e)=>{
  if(bool1 ===false){
      e.preventDefault()
      if(nombreUser ==="" || contraseñaUser ===""){
          setError(true)
          return
      }
      setError(false)
  }
}
const showBool =()=>{
  setBool(!bool1);
} 
const sendValue = () => {
  axios.post(apiName, {
    email: nombreUser,
    contraseña: contraseñaUser,
  })
    .then(() => {
      alert("Bienvenido");
      setBool(!bool1); // Cambia el valor de bool1 en el componente App
    })
    .catch((error) => {
      console.error(error);
    });
}
  return (

    
    <div className="App">
    {bool1 ? (
      <>
        <AccidentesList />
        <NotificacionesReact />
        <RoadServices />
        <AdminLogin />
      </>
    ) : (
      <section>
      <h1>Log In</h1>
      <h2>Grupo México</h2>

      <form className="formulario"
      onSubmit={ handleSubmit}
      >
          <input type="text"
          value={nombreUser}
          onChange={e => setNombreUser(e.target.value)}
          
          />
          <input type="password"
          value={contraseñaUser}
          onChange={e => setContraseñaUser(e.target.value)}
        
          />
          <button onClick={sendValue}>Iniciar Sesion</button>
      </form>
  </section>
    )}
  </div>
  );
}

export default App;

 /* const fetchData = async () => {
    try {
      const response = await Axios.get(apiName); // Utiliza Axios para obtener datos
      if (response.status === 200) {
        console.log("Estoy entrando para setear los datos de usuario accidente")
        setUsuarios(response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Llama a fetchData inmediatamente al cargar el componente
    fetchData();

    // Configura el intervalo para llamar a fetchData cada 3 segundos
    const pollInterval = setInterval(() => {
      fetchData();
    }, 3001);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(pollInterval);
  }, []);
*/
/*<ul>
  {Array.isArray(usuariosList) ? (
    usuariosList.map((usuario, key) => (
      <li key={usuario.id}>Nombre: {usuario.nombre}</li>
    ))
  ) : (
    <li>No hay datos disponibles</li>
  )}
</ul>*/

/*
 
              */