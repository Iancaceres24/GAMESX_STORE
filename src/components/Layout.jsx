
import Footer from "../components/Footer"
import Nave from "../components/Nave"
import { Routes } from "react-router-dom"
// import Productos_firestore from "../components/Firebase";

const Layout = (props)=>{
    // Productos_firestore()
    return (
        <div className="contenedor" >
        <Nave/>
        <Routes>
        {props.children}
        </Routes>

        <Footer/>
        </div>
        
    )

}

export default Layout 