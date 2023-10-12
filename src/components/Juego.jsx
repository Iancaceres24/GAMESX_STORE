
import { useEffect, useState } from "react";
import GetProductos from "./Productos";
import { Link, useParams } from "react-router-dom";
import { useCount } from "../hooks/contadors";




const Juego = () =>{
    const [produ, setprodu] = useState([]);
    const{Juegonombre}= useParams()
    const {count,incre,decre,} = useCount(1,1,8)
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
                <div className="row">
                <button onClick={decre} className="col-2">-</button>
                <h2 className="col-6 text-center">AGREGAR</h2>
                <button onClick={incre} className="col-2">+</button>
                <h2 className="col-10 text-center">{count}</h2>
                </div>
                <Link to={`/Compra`} className="col-10 btn btn-light">Comprar</Link>
            </div>
            <div className="row col-6">
                <img className="img" src={produ.img} alt={produ.nombre} />
            </div>
            
            
        </div>
        
       

    )
    
}

export default Juego 