
import Footer from "../components/Footer"
import Nave from "../components/Nave"
import { Routes } from "react-router-dom"


const Layout = (props)=>{
    
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