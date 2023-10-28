import React,{useState} from "react";
import Axios from 'axios';
//import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const apiNameSet = 'http://26.255.20.111:3000/api/roadServices/createRoadService';
const apiNameGet = 'http://26.255.20.111:3000/api/roadServices/getTollboths';

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

    const addValues=()=>{
        Axios.post(apiNameSet, {
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

    const formularioRoadService=()=>{
        return(
            <div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Id</span>
              <input type="text" value={IdService}
              onChange={(e) => SetId(e.target.value)}
              className="form-control" placeholder="Ingrese el id del servicio de carretera" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
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

    <div className="Notificaciones">
    
</div>
<div className="card text-center">
  <div className="card-header">
    Servicios De Carretera
  </div>
  <div className="card-body">
 {formularioRoadService()} 
  </div>
  <div className="card-footer text-muted">
  </div>
</div>
</div>

    ); 
}
export default RoadServices;

/* <div className="container">

    <div className="Notificaciones">
    
</div>
<div className="card text-center">
  <div className="card-header">
    Notificaciones
  </div>
  <div className="card-body">
  
  {ShowNoti ?(
        <p>Haz click para generar una notificacion</p>
    ):(
        <div>
            {formularioNoti()}
        </div>
    )}
  </div>
  <div className="card-footer text-muted">
  <button type="button" className="btn btn-outline-danger" onClick={showNotificaciones}>Generar Notificacion</button>
  </div>
</div>
</div>

    );*/