

import "./App.css"
import Layout from "./components/Layout";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import ListaProductos from "./components/listaProductos"
import Juego from "./components/Juego";
import Categoria from "./components/Categoria";
import Compra from "./components/Compra";
import CarritoProvider from "./context/carritoContext";
import img_error from "./assets/error.jpg"
import Carrito from "./components/Carrito";
import Orden from "./components/Orden";

function App() {
  
    

  return (
  <div className="vh-100"> 
        <CarritoProvider>
        <BrowserRouter>
        
        <Layout>
        
        
        <Route path="/" element={<ListaProductos/>}/>
        <Route path="/Categoria/:Categorianombre" element={<Categoria/>}></Route>

        <Route path="/Juego/:Juegonombre" element={<Juego/>}></Route>
        <Route path="*" element={<img src={img_error} alt="Error "></img>}></Route>
        <Route path="/Compra" element={<Compra/>}></Route>
        <Route path="/Carrito" element={<Carrito/>}></Route>
        <Route path="/Orden" element={<Orden/>}></Route>
        </Layout>
        
        </BrowserRouter>
        </CarritoProvider>
  </div>
  );
}

export default App;
