import React,{useState} from "react";
import Axios from 'axios';
const apiNameNot = 'http://26.255.20.111:3000/api/notificaciones/create';
const apiNameSend ='http://26.255.20.111:3000/api/notificaciones/getNotificacionesById';
const apiNameSecond ='http://26.255.20.111:3000/api/notificaciones/getNotificaciones';

const NotificacionesReact = ()=>{

    const [Titulo,SetTitulo] = useState("");
    const [Descripcion,SetDescripcion] = useState("");
    const [URLImagen,SetURL] = useState("");
    const [Emission_date,SetEmisionDate] = useState("");
    const [Finalizacion_date,SetFinalizacion] = useState("");

    const[Id,SetId] = useState("");

    const [NotificacionesList,SetNotificacionesList] = useState([]);
    const [ShowNotiId,SetShowNotiId] = useState(false);

    const [ShowNoti,SetShowNoti] = useState(true);
    const [SendNoti,SetSendNoti] = useState(false);
    const addNoti = ()=>{
        Axios.post(apiNameNot,{
            Titulo: Titulo,
            Descripcion: Descripcion,
            URLImagen: URLImagen,
            Emission_date: Emission_date,
            Finalizacion_date: Finalizacion_date}).then(()=>{
               limpiarCampos();
                alert("Evento Registrado");
            });
    }

    const sendNotiById=()=>{
        Axios.get(apiNameSend,{
            params: {
                Id: Id
            }
        }).then(()=>{
            alert("Notificacion Enviada");
            console.log(Id);
        });
    }

    const getNotificacionById= async()=>{
        const {data} = await Axios.get(apiNameSecond)
        console.log(data);
        SetNotificacionesList(data);
    }

    const listaNotificaciones =()=>{
        
        return(
            <table>
              <thead>
                <tr>
                <th>Id</th>
                  <th>Titulo</th>
                  <th>Description</th>
                  <th>URL</th>
                  <th>Fecha de emision</th>
                  <th>Fecha finalizacion</th>
                </tr>
              </thead>
              <tbody>
                {NotificacionesList.data.map((noti) => (
                  <tr key={noti.Id}>
                    <td style={{ textAlign: "center" }}>{noti.Id}</td>
                     <td style={{ textAlign: "center" }}>{noti.Titulo}</td>
                    <td style={{ textAlign: "center" }}>{noti.Descripcion}</td>
                    <td style={{ textAlign: "center" }}>{noti.URLImagen}</td>
                    <td style={{ textAlign: "center" }}>{noti.Emission_date}</td>
                    <td style={{ textAlign: "center" }}>{noti.Finalizacion_date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
        );
        
    }
    const limpiarCampos=()=>{
        SetTitulo("");
        SetDescripcion("");
        SetURL("");
        SetEmisionDate("");
        SetFinalizacion("");
    }

    const showNotificaciones=()=>{
        SetShowNoti(!ShowNoti);
    }

    const showSendNoti=()=>{
        SetSendNoti(!SendNoti);
    }

    const showSendNotiId=()=>{
        SetShowNotiId(!ShowNotiId);
    }
    const formularioSendNoti=()=>{
        return(
            <div>
             
             {
                SendNoti?(
                    <div>
                      
                    <p>Ingresa el id de la notificacion deseada y despues da click en enviar</p>
                    
                    <div>
                         <label>Id Notificacion:</label>
                         <input type="text" value={Id} onChange={(e) => SetId(e.target.value)} />
                    </div>
                    <button onClick={getNotificacionById}> Chechar Notificaion</button> 
                    <div>
                        <button onClick={showSendNotiId}>VerNotificacion</button>  
                    </div>
                    {ShowNotiId?(
                            <div>
                                {console.log(Id)}
                                {listaNotificaciones()}
                            </div>
                        ):(
                            <div>
                                
                            </div>
                        )

                        }
                    </div>
                ):(
                    <div>
                    
                </div> 
                )
             }
            </div>
        )
    }
    const formularioNoti=()=>{
        return(
<div>
            <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Titulo</span>
  <input type="text" value={Titulo}
  onChange={(e) => SetTitulo(e.target.value)}
  className="form-control" placeholder="Ingrese el titulo de la notificación" aria-label="Username" aria-describedby="basic-addon1"/>
    </div>

    <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">Descripción</span>
      <input type="text" value={Descripcion}
      onChange={(e) => SetDescripcion(e.target.value)}
      className="form-control" placeholder="Ingrese la descripcion de la notificación" aria-label="Username" aria-describedby="basic-addon1"/>
     </div>

     <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">Imagen Url</span>
      <input type="text" value={URLImagen}
      onChange={(e) => SetURL(e.target.value)}
      className="form-control" placeholder="Ingrese la URL de la imagen" aria-label="Username" aria-describedby="basic-addon1"/>
     </div>

     <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">Fecha de Emisión</span>
      <input type="date" value={Emission_date} onChange={(e) => SetEmisionDate(e.target.value)}
      className="form-control" placeholder="Ingrese la fecha de la emisión" aria-label="Username" aria-describedby="basic-addon1"/>
     </div>

     <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">Fecha de Finalización</span>
      <input type="date" value={Finalizacion_date} onChange={(e) => SetFinalizacion(e.target.value)}
      className="form-control" placeholder="Ingrese la fecha de la Finalización" aria-label="Username" aria-describedby="basic-addon1"/>
     </div>
     
        <button type="button" className="btn btn-outline-danger" onClick={addNoti}>Salvar Notificación</button>
    
        <button type="button" className="btn btn-outline-danger" onClick={showSendNoti}>Enviar Notificaciones</button>
        <div>
            {formularioSendNoti()}
        </div>
</div>
        );
    }


    return(
        <div className="container">

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

    );
}
export default NotificacionesReact;

/*
<div>
        <label>Descripción:</label>
        <textarea value={Descripcion} onChange={(e) => SetDescripcion(e.target.value)} />
    </div>
    <div>
        <label>URL de la Imagen:</label>
        <input type="text" value={URLImagen} onChange={(e) => SetURL(e.target.value)} />
    </div>
    <div>
        <label>Fecha de Emisión:</label>
        <input type="date" value={Emission_date} onChange={(e) => SetEmisionDate(e.target.value)} />
    </div>
    <div>
        <label>Fecha de Finalización:</label>
        <input type="date" value={Finalizacion_date} onChange={(e) => SetFinalizacion(e.target.value)} />
    </div>
    <button onClick={addNoti}>Salvar Notificación</button>
    <div>
    <button onClick={showSendNoti}>Enviar Notificaciones</button>
    <div>
            {formularioSendNoti()}
        </div>
    </div>
*/