

import "./App.css"
import Layout from "./components/Layout";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import ListaProductos from "./components/listaProductos"
import Juego from "./components/Juego";
import Categoria from "./components/Categoria";

function App() {
  return (
  <div className="container-fluid fondo vh-100"> 
        
        <BrowserRouter>
        <Layout>
        
        
        <Route path="/" element={<ListaProductos/>}/>
        <Route path="/Categoria/:Categorianombre" element={<Categoria/>}></Route>

        <Route path="/Juego/:Juegonombre" element={<Juego/>}></Route>
        <Route path="*" element={<h1>ERROR 404</h1>}></Route>
        
        </Layout>
        
        </BrowserRouter>
        
  </div>
  );
}

export default App;
