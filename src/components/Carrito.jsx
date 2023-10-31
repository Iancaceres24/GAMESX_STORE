import { useContext,} from "react"
import { CarritoContext } from "../context/carritoContext";

import { Link } from "react-router-dom";



const Carrito = () =>{
    const {agregar,setagregar,total} = useContext(CarritoContext)
    
        
            const eliminarProducto = (id) => {
                const nuevoCarrito = agregar.filter(item => item.id !== id);
                setagregar(nuevoCarrito);
                
            }

            

    return(
    <div>
        <h1>Carrito</h1>
        
        {agregar.map((item)=>(
            <div className="container-fluid row p-2 mb-3 align-items-center fondo">
                <h2 className="col-12">{item.nombre}</h2>
                <span className="col-3"><img className="img" src={item.img} alt={item.nombre} /></span>
                <p className="col-3">{item.descripcion}</p>
                <p className="col-3">{`$${item.precio}`}</p>
                <button onClick={()=> eliminarProducto(item.id)} className="col-3">eliminar</button>
            </div>
            ))}
        <h3>Total: ${total}US</h3>
        <Link to={"/Compra"} className="btn btn-primary ">Finalizar Compra</Link>
        <Link to={"/"} className="btn btn-primary ">Seguir Comprando</Link>
        <Link to={"/Orden"} className="btn btn-primary ">Ver mi orden</Link>
    </div>
    )
}


export default Carrito




