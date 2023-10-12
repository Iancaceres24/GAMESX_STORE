import img_gato from "../assets/gato.jpg"
import { Link } from "react-router-dom";

const Compra = ()=>{

    return(
        <div className="row justify-content-center">
            <h1 className="col-6">COMPRA REALIZADA CON EXITO</h1>
            <span className="col-7 text-center"><img className="img" src={img_gato} alt="Gato" /></span>
            <Link to={`/`} className="btn btn-light col-6">Seguir comprando</Link>
            
        </div>
    )

}

export default Compra