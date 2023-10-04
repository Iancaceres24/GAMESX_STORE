
import { useEffect, useState } from "react";
import GetProductos from "./Productos";
import { useParams } from "react-router-dom";




const Juego = () =>{
    const [produ, setprodu] = useState([]);
    const{Juegonombre}= useParams()
    
  useEffect(()=>{
  
    GetProductos().then((producto)=>{
        const productoEncontrado = producto.find((item) => item.nombre === Juegonombre);
      setprodu(productoEncontrado)
    })
  },[Juegonombre])
 
  if (!produ){
    return <h1>Cargando...</h1>
    
  }

    return(
        
        <div className="container-fluid row justify-content-center">
            <div className="row col-6">
                <h1 className="col-12">{produ.nombre}</h1>
                <p className="col-12">{produ.descripcion}</p>
                <button className="col-12">{produ.precio}</button>
                
            </div>
            <div className="row col-6">
                <img className="img" src={produ.img} alt={produ.nombre} />
            </div>
            
            
        </div>
        
       

    )
    
}

export default Juego 