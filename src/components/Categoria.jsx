import { useEffect, useState } from "react";
import Card from "./card";
import GetProductos from "./Productos";
import { useParams } from "react-router-dom";

const Categoria = ()=>{
    
        const [produ, setprodu] = useState([]);
        const{Categorianombre}= useParams()
        
      useEffect(()=>{
      
        GetProductos().then((Productos)=>{
          setprodu(Productos)
        })
      },[])
    
      if (produ.length === 0 ){
        return <h1>Cargando...</h1>}
  
    const categoria_accion= produ.filter(producto => producto.categoria === Categorianombre);

    return (
    <div className="container-fluid">
      <h1>Juegos</h1>
      <ul className="row justify-content-around">
        {categoria_accion.map((Producto) => (
          <li className="col-3 mb-3" key={Producto.id}>
            <Card
              nombre={Producto.nombre}
              descripcion={Producto.descripcion}
              precio={Producto.precio}
              alt={Producto.nombre}
              img={Producto.img}
              
            />
            
          </li>
          
        ))}
        
      </ul>
      
    </div>
    )
}

export default Categoria