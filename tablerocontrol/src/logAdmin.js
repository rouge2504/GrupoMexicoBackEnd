import React,{useState} from "react";
import Axios from 'axios';
//import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const apiNameGet = 'http://26.255.20.111:3000/api/userAdmin/getAdminByEmail';

const LogAdmin=()=>{

const [listAdmin,SetAdminList] = useState([]);

const getAdminData = (adminEmail) => {
    Axios.get(apiNameGet, {
        params: { email: adminEmail }
    }).then((response) => {
        SetAdminList(response.data);
        console.log(response.data);
    });
 };

return(
    <div>
      <button type="button" className="btn btn-outline-danger" onClick={() => getAdminData('juareztamayojuan@gmail.com')}>
    Lista Admins
</button>

    </div>
);
}
export default LogAdmin;