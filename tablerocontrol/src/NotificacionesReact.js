import React,{useState} from "react";
import Axios from 'axios';
const apiNameNot = 'http://192.168.1.89:3000/api/notificaciones/create';

const NotificacionesReact = ()=>{

    const [Titulo,SetTitulo] = useState("");
    const [Descripcion,SetDescripcion] = useState("");
    const [URLImagen,SetURL] = useState("");
    const [Emission_date,SetEmisionDate] = useState("");
    const [Finalizacion_date,SetFinalizacion] = useState("");

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
    const limpiarCampos=()=>{
        SetTitulo("");
        SetDescripcion("");
        SetURL("");
        SetEmisionDate("");
        SetFinalizacion("");
    }
    return(<div className="Notificaciones">
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
    <button>Enviar Notificaciones</button>
</div>
    );
}
export default NotificacionesReact;