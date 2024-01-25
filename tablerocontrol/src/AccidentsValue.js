import React,{useEffect,useState} from "react";
import Axios from 'axios';
//import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const apiName = 'http://172.208.66.103:3000/';
const AccidentesList = ()=> {

    const [usuariosList, setUsuarios] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getAccidents = async() =>{
      const {data} =  await Axios.get(apiName + 'api/accident/showAccidents' )
      console.log(data);
      setUsuarios(data);
      
  
     }
     const setShowArray=()=>{
        setIsLoading(!isLoading);
     }

     const listaAccidentes = ()=> {
        console.log("Lista usuarios boton" , usuariosList.data);
       
        return (
          <table className="table table-light">
              <thead>
                <tr>
                <th scope="col">Folio</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">Email</th>
                  <th scope="col">Teléfono</th>
                  <th scope="col">Coche</th>
                  <th scope="col">Latitud</th>
                  <th scope="col">Longitud</th>
                  <th scope="col">Placa</th>
                </tr>
              </thead>
              <tbody>
                {usuariosList.data.map((accidente) => (
                  <tr key={accidente.id}>
                    <th scope="row">{accidente.id}</th>
                    <td style={{ textAlign: "center" }}>{accidente.nombre}</td>
                    <td style={{ textAlign: "center" }}>{accidente.apellido}</td>
                    <td style={{ textAlign: "center" }}>{accidente.email}</td>
                    <td style={{ textAlign: "center" }}>{accidente.telefono}</td>
                    <td style={{ textAlign: "center" }}>{accidente.coche}</td>
                    <td style={{ textAlign: "center" }}>{accidente.latitud}</td>
                    <td style={{ textAlign: "center" }}>{accidente.longuitud}</td>
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
    <div className="container">
 

    <div>
    <h1>Tabla de Control Grupo México</h1>


    </div>
    <div className="card text-center">
  <div className="card-header">
    Accidentes
  </div>
    <div className="card-body">
    {isLoading ? (
      <p>Presiona para iniciar capibara...</p>
      ) : (
        <div>
          {listaAccidentes()}
        </div>
      )}
      
    </div>
    <div className="card-footer text-muted">
    <button type="button" className="btn btn-outline-danger" onClick={setShowArray}>Lista Accidentes</button>
    </div>
  </div>


    </div>
  ); 
}
export default AccidentesList;


/*
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
*/ 



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