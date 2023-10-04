import { useEffect, useState } from "react";
import Card from "../components/card";
import GetProductos from "../components/Productos";


const ListaProductos = () =>{
  const [produ, setprodu] = useState([]);

useEffect(()=>{

  GetProductos().then((Productos)=>{
    setprodu(Productos)
  })
},[])

if (produ.length === 0){
  return <h1>Cargando...</h1>
}



return (
    <div className="container-fluid">
      <h1>Juegos</h1>
      <ul className="row justify-content-around">
        {produ.map((Producto) => (
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
    
  );
  
        }


export default ListaProductos



