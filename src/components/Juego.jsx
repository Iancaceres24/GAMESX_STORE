
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useProductos from "../hooks/recibir_productos";
import { CarritoContext } from "../context/carritoContext";
import { Link } from "react-router-dom";


const Juego = () =>{
    const items = useProductos()
    const { agregar, setagregar } = useContext(CarritoContext);
    const{Juegonombre}= useParams()
    
    
    
    const productoEncontrado = items.find((item) => item.nombre === Juegonombre); 
    
    const agregarAlCarrito = () => {
      const productoExistente = agregar.find((item) => item.id === productoEncontrado.id);

      if (!productoExistente) {
        setagregar([...agregar, productoEncontrado]);
        toast("Se a agregado el producto al carrito ")
      }
    };
    
   
  

  if (!productoEncontrado){
    return <h1>cargando...</h1>
    
  }
  
    return(
        
        <div className="container-fluid row justify-content-center">
            <div className="row col-6">
                <h1 className="col-12">{productoEncontrado.nombre}</h1>
                <p className="col-12">{productoEncontrado.descripcion}</p>
                <p className="col-12">{`$${productoEncontrado.precio}US`}</p>
                <div className="row">
                <button onClick={agregarAlCarrito}>AGREGAR AL CARRITO </button>
                <ToastContainer position="bottom-right"/>
                <Link to="/"><button className="mt-3 mb-3 col-12">SEGUIR COMPRANDO</button></Link>
                
                <Link to="/Carrito"><button className="mb-3 col-12">IR AL CARRITO</button></Link>
                </div>

            </div>
            <div className="row col-6">
                <img className="img" src={productoEncontrado.img} alt={productoEncontrado.nombre} />
            </div>
            
            
        </div>
        

    )
    
}

export default Juego 





