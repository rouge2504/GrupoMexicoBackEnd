import React,{useEffect,useState} from "react";
import Axios from 'axios';
const apiName = 'http://192.168.1.89:3000/api/accident/showAccidents';
const AccidentesList = ()=> {

    const [usuariosList, setUsuarios] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getAccidents = async() =>{
      const {data} =  await Axios.get(apiName)
      console.log(data);
      setUsuarios(data);
      
  
     }
     const setShowArray=()=>{
        setIsLoading(!isLoading);
     }

     const listaAccidentes = ()=> {
        console.log("Lista usuarios boton" , usuariosList.data);
       
        return (
            <table>
              <thead>
                <tr>
                <th>Folio</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Email</th>
                  <th>Teléfono</th>
                  <th>Coche</th>
                  <th>Latitud</th>
                  <th>Longitud</th>
                  <th>Placa</th>
                </tr>
              </thead>
              <tbody>
                {usuariosList.data.map((accidente) => (
                  <tr key={accidente.id}>
                    <td style={{ textAlign: "center" }}>{accidente.id}</td>
                     <td style={{ textAlign: "center" }}>{accidente.nombre}</td>
                    <td style={{ textAlign: "center" }}>{accidente.apellido}</td>
                    <td style={{ textAlign: "center" }}>{accidente.email}</td>
                    <td style={{ textAlign: "center" }}>{accidente.telefono}</td>
                    <td style={{ textAlign: "center" }}>{accidente.coche}</td>
                    <td style={{ textAlign: "center" }}>{accidente.latitud}</td>
                    <td style={{ textAlign: "center" }}>{accidente.longitud}</td>
                    <td style={{ textAlign: "center" }}>{accidente.placa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          );
        };
     useEffect(() => {
        getAccidents(); // Llamamos a la función getAccidents dentro de useEffect
     // Configura un intervalo para actualizar los datos cada 5 segundos (ajusta el tiempo según tus necesidades)
    const intervalId = setInterval(() => {
        getAccidents();
      }, 3000); // 5000 milisegundos = 5 segundos
  
      // Limpia el intervalo cuando el componente se desmonta
      return () => clearInterval(intervalId);
    }, []);

      /*useEffect(() => {
        console.log("Lista usuarios" , usuariosList); // Mostrará el valor actualizado de usuariosList
      }, [usuariosList]);*/
  return (
    <div>
    <h1>Tabla de Accidentes</h1>
    <div className="Lista">
      <button onClick={setShowArray}>Lista Accidentes</button>
    </div>
    {isLoading ? (
      <p>Presiona para iniciar capibara...</p>
      ) : (
        <div>
          {listaAccidentes()}
        </div>
      )}
    </div>
  ); 
}
export default AccidentesList;

/*
<table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            
            </tr>
            </thead>
            <tbody>
            {
                usuariosList.map((usuario,index) => {
                    return <tr key={index}>
                  <td>{usuario}</td>
                  </tr>
                  })
                }
            </tbody>
          </table>
         
         
*/

/*
  {
        usuariosList.map((usuario,index) => {
            return <div>
          {usuario} </div>
      })
      }*/