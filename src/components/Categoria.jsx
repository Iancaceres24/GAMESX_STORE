import { useEffect, useState } from "react";
import Card from "./card";
import useProductos from "../hooks/recibir_productos"
import { useParams } from "react-router-dom";

const Categoria = ()=>{
    
        const [produ, setprodu] = useState([]);
        const{Categorianombre}= useParams()
        const items = useProductos()

    
      if (items.length === 0 ){
        return <h1>Cargando...</h1>}
  
    const categoria_accion= items.filter(producto => producto.categoria === Categorianombre);

    return (
    <div className="container-fluid">
      <h1>Juegos de {Categorianombre}</h1>
      <ul className="row justify-content-around">
        {categoria_accion.map((Producto) => (
          <li className="col-4 mb-4 li" key={Producto.id}>
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