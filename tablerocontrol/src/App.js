import './App.css';
//import React, { useState, useEffect } from "react";
//import Axios from "axios";
import AccidentesList from './AccidentsValue';
import NotificacionesReact from './NotificacionesReact';

//const apiNameGet ='/api/accident/showAccidents';
//const apiName = 'http://192.168.1.89:3000/api/accident/showAccidents';
function App() {

  
  return (
    <div className="App">
      <AccidentesList/>
      <NotificacionesReact/>
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
    }, 3000);

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