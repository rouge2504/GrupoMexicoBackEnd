import React,{useState} from "react";
import Axios from 'axios';
//import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const apiNameSet = 'https://grupo-mexico-backend.fly.dev/';
//const apiNameGet = 'http://26.255.20.111:3000/api/roadServices/getTollboths';

const RoadServices = ()=> {

    /*id_services,
			name,
			adress,
			lat,
			lon,
			cost,
			created_at,
			updated_at*/
    const [IdService, SetId] = useState("");
    const [Name, SetName] = useState("");
    const [Adress, SetAdress] = useState("");
    const [Lat, SetLat] = useState("");
    const [Lon, SetLon] = useState("");
    const [Cost, SetCost] = useState("");
    const [created, SetCreate] = useState("");
    const [updated, SetUpdate] = useState("");

    const [showGasStation, setGas] = useState(false);
    const [showCasetas, setCaseta] = useState(false);
    const [showServicios, setGServicios] = useState(false);

    const addValues=()=>{
        Axios.post(apiNameSet + 'api/roadServices/createRoadService', {
            id_services: IdService,
			name: Name,
			adress: Adress,
			lat: Lat,
			lon: Lon,
			cost: Cost,
			created_at: created,
			updated_at: updated}).then(()=>{
                clearData();
                alert("Registro de servicio");
            });
    
    }

    const clearData=()=>{
        SetId("");
        SetName("");
        SetAdress("");
        SetLat("");
        SetLon("");
        SetCost("");
        SetCreate("");
        SetUpdate("");
    }

    const ChangeCasetas=()=>{
      SetId(1);
      setCaseta(!showCasetas);
      setGServicios(false);
      setGas(false);
    }
    const ChangeGas=()=>{
      SetId(2);
      setCaseta(false);
      setGServicios(false);
      setGas(!showGasStation);
    }
    const ChangeService=()=>{
      SetId(3);
      setCaseta(false);
      setGServicios(!showServicios);
      setGas(false);
    }

    const formularioRoadService=()=>{
        return(
          
            <div>
              
           
                <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Nombre</span>
              <input type="text" value={Name}
              onChange={(e) => SetName(e.target.value)}
              className="form-control" placeholder="Ingrese el nombre del servicio de carretera" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Dirección</span>
              <input type="text" value={Adress}
              onChange={(e) => SetAdress(e.target.value)}
              className="form-control" placeholder="Ingrese la dirección del servicio de carretera" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Latitud</span>
              <input type="text" value={Lat}
              onChange={(e) => SetLat(e.target.value)}
              className="form-control" placeholder="Ingrese la latitud del servicio de carretera" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">longitud</span>
              <input type="text" value={Lon}
              onChange={(e) => SetLon(e.target.value)}
              className="form-control" placeholder="Ingrese la longitud del servicio de carretera" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Costo</span>
              <input type="text" value={Cost}
              onChange={(e) => SetCost(e.target.value)}
              className="form-control" placeholder="Ingrese el costo promedio del servicio de carretera" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Creación</span>
              <input type="date" value={created}
              onChange={(e) => SetCreate(e.target.value)}
              className="form-control" placeholder="Ingrese la fecha de creación del servicio de carretera" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Update</span>
              <input type="date" value={updated}
              onChange={(e) => SetUpdate(e.target.value)}
              className="form-control" placeholder="Ingrese la fecha de actualización del servicio de carretera" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
            
                <button type="button" className="btn btn-outline-danger" onClick={addValues}>Salvar Servicio de Carretera</button>
             </div>  
        )
    }

  return (

    <div className="container">


    <div className="RoadService">
    
</div>
<div className="card text-center">
  <div className="card-header">
    Servicios De Carretera
  </div>
  <div className="card-body">
  {showGasStation ?(
     <div>
     {formularioRoadService()} 
 </div>
       
    ):(
      <p>Haz click para generar una notificacion</p>
    )}
      {showCasetas ?(
     <div>
     {formularioRoadService()} 
 </div>
       
    ):(
      <p></p>
    )}
    {showServicios ?(
     <div>
     {formularioRoadService()} 
 </div>
       
    ):(
      <p></p>
    )}
 
  </div>
  <div className="card-footer text-muted">
  <button type="button" className="btn btn-outline-danger" onClick={ChangeGas}>Gasolineras</button>
  <button type="button" className="btn btn-outline-danger" onClick={ChangeCasetas}>Casetas</button>
  <button type="button" className="btn btn-outline-danger" onClick={ChangeService}>Servicios</button>
  </div>
</div>
</div>

    ); 
}
export default RoadServices;

/* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>

<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    1
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button className="dropdown-item" type="button">Action</button></li>
    <li><button className="dropdown-item" type="button">Another action</button></li>
    <li><button className="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>


 <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Id</span>
              <input type="text" value={IdService}
              onChange={(e) => SetId(e.target.value)}
              className="form-control" placeholder="Ingrese el id del servicio de carretera" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
    );*/