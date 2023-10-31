import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, } from "react-router-dom";
import { getFirestore, writeBatch, collection, addDoc,  } from 'firebase/firestore';
import { useContext, useState } from "react";
import { CarritoContext } from "../context/carritoContext";
const Compra = () => {
const [nombre, setNombre] = useState("");
const [apellido, setApellido] = useState("");
const [telefono, setTelefono] = useState("");
const [email, setEmail] = useState("");
const [email2, setEmail2] = useState("");
const [ordenEnviada, setOrdenEnviada] = useState(false);
const {total, agregar, } = useContext(CarritoContext)

    const db = getFirestore();
    const batch = writeBatch(db);
    const orderCollection = collection(db, "ordenes");
    const handleClick = async (e) => {
        e.preventDefault();
        if (email === email2){
        if (!ordenEnviada) {
        
        const ordenes = {
          nombre,
          apellido,
          telefono,
          email,
          total,
         
        };
      
        
        try {
          await addDoc(orderCollection, ordenes); 
          toast('Orden enviada exitosamente');
          setOrdenEnviada(true);
        } catch (error) {
          console.error('Error al enviar la orden', error);
        }
      }else{
        toast("Ya fue enviada su orden")
      };
    }else{
      toast("Sus email tienen que ser iguales")
    }}
  
    

  return (
    <div className="row justify-content-center">
      
      <form className="row justify-content-center">
        
      <div className="mb-3 col-7">
          <label  className="form-label">
            Nombre
          </label>
          <input 
            type="text"
            className="form-control"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3 col-7">
          <label  className="form-label">
            Apellido
          </label>
          <input  
            type="text"
            className="form-control"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3 col-7">
          <label  className="form-label">
            Telefono
          </label>
          <input  type="number"
            className="form-control"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3 col-7">
          <label  className="form-label">
            Email 
          </label>
          <input
            type="email"
            className="form-control"
            id="email1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            
          </div>
        </div>
        <div className="mb-3 col-7">
          <label  className="form-label">
            Vuelve a escribir tu Email
          </label>
          <input  type="email"
            className="form-control"
            id="email2"
            value={email2}
            onChange={(e) => setEmail2(e.target.value)}
            aria-describedby="emailHelp"/>
        </div>
        {agregar.map((item)=>(
        <div className='row justify-content-center fondo mb-2 align-items-center'>
          
            <span className='col-3'><img className='img' src={item.img} alt="imagen" /></span>
            <h2 className='col-3'>{item.nombre}</h2>
            <h2 className='col-3'>{`$${item.precio}US`}</h2>
            
        </div>))}
        <h2>Total:{`$${total}US`}</h2>
        <button  onClick={handleClick} className='col-6 mb-2 btn btn-danger '>
          Confirmar orden
          </button>
          <ToastContainer position="bottom-right"/>
        <Link to={`/Orden`} className='col-6 mb-2 btn btn-primary' >Ver mi orden</Link>
        
      </form>

      <Link to={`/`} className="btn btn-dark col-6 mb-2">
        Seguir comprando
      </Link>
    </div>
  );
;
}
export default Compra;
