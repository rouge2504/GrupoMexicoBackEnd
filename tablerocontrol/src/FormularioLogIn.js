import "./FormularioLog.css"
import { useState } from "react"
import axios from "axios"



export function FormularioLog({ bool1, setBool }) {
    //const [body, setBody] = useState({userName: "", password: ""});
    const [nombreUser, setNombreUser] = useState("");
    const [contraseñaUser, setContraseñaUser] = useState("");
    const [bool1,setBool] = useState(false);
    const [error,setError] =useState(false);
    const apiName ='http://26.255.20.111:3000/api/userAdmin/logIn';
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

    /*const inputChange=({target}) =>{
        const{name,value} = target
        setBody({
            ...body,
            [name]: value
        })
    }*/
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
    return(
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
          {bool1?(
            <p>Me active</p>
          ):(
            <p>No me active</p>
          )
          }
        </section>
    )
}