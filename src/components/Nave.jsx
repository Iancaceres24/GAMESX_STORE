import Gamesx from "../components/Gamesx";
import Nav_items from "../components/Nav_items";
import Carrito_nav from "./Carrito_nav";



const Nave = ()=>{
    return( 
        <nav className="navbar navbar-expand-lg  bg_nav">
        <div className="container-fluid row col-12 saca_bs-gutter-x ">
          <div className="row col-11">
            <button
              className="navbar-toggler col-2 bg-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
             <Gamesx />

            
            
          <div className="collapse navbar-collapse col-12" id="navbarNav">
              <ul className="navbar-nav row justify-content-center col-12">
                <li className="nav-item col-5">
                  <Nav_items text="JUEGOS DE ACCION" categoria="Categoria/Accion" />
                </li>
                <li className="nav-item col-5">
                  <Nav_items text="JUEGOS DE DEPORTES" categoria="Categoria/Deportes" />
                </li>
                <li className="nav-item col-5">
                  <Nav_items text="JUEGOS DE PELEAS" categoria="Categoria/Peleas" />
                </li>
                <li className="nav-item col-5">
                  <Nav_items text="TODOS LOS JUEGOS" categoria="/" />
                </li>
              </ul>
            </div>
          </div>
          <span className="col-1">
            <Carrito_nav />
          </span>
          
        </div>
      </nav>
   )
}

export default Nave;


