
import Carrito_img from "../components/Carrito_img";
import Carrito_num from "../components/Carrito_num";

const Carrito = ()=>{
    return( 
        <div className="row justify-content-end">
            <Carrito_img />
            <Carrito_num num="4"/>
        </div>
    )

}

export default Carrito;