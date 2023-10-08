import React,{useState} from "react";
import Axios from 'axios';
const apiNameNot = 'http://192.168.1.89:3000/api/notificaciones/create';
const apiNameSend ='http://192.168.1.89:3000/api/notificaciones/getNotificacionesById';

const NotificacionesReact = ()=>{

    const [Titulo,SetTitulo] = useState("");
    const [Descripcion,SetDescripcion] = useState("");
    const [URLImagen,SetURL] = useState("");
    const [Emission_date,SetEmisionDate] = useState("");
    const [Finalizacion_date,SetFinalizacion] = useState("");

    const[id,SetId] = useState("");

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
                id: id
            }
        }).then(()=>{
            alert("Notificacion Enviada");
            console.log(id);
        });
    }

    const getNotificacionById= async()=>{
        const {data} = await Axios.get(apiNameSend,{
            id:id
        })
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
                  <tr key={noti.id}>
                    <td style={{ textAlign: "center" }}>{noti.id}</td>
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
                         <input type="text" value={id} onChange={(e) => SetId(e.target.value)} />
                    </div>
                    <button onClick={getNotificacionById}> Chechar Notificaion por id</button> 
                    <div>
                        <button onClick={showSendNotiId}>VerNotificacion</button>  
                    </div>
                    {ShowNotiId?(
                            <div>
                                {console.log(id)}
                                
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
<div>
        <label>Título:</label>
        <input type="text" value={Titulo} onChange={(e) => SetTitulo(e.target.value)} />
    </div>
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
    </div>
        );
    }


    return(
    <div className="Notificaciones">
    
    <button onClick={showNotificaciones}>Generar Notificacion</button>
    {ShowNoti ?(
        <p>Haz click para generar una notificacion</p>
    ):(
        <div>
            {formularioNoti()}
        </div>
    )

    }
</div>

    );
}
export default NotificacionesReact;