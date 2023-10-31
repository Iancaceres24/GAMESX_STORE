import { useEffect,useState } from "react";
import Card from "../components/card";
import {getFirestore, collection, getDocs, doc } from "firebase/firestore";
import Productos_firestore from "../components/Firebase";
import useProductos from "../hooks/recibir_productos";
const ListaProductos = () =>{


  const items = useProductos()
  

if ( items.length === 0){
  return <h1>Cargando...</h1>
}



return (
    <div className="container-fluid">
      <h1>Todos los juegos</h1>
      <ul className="row justify-content-around">
        
        {items.map((Producto) => (
          <li className="col-3 m-4 li" key={Producto.id}>
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



