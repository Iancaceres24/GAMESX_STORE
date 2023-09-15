import Gamesx from "../components/Gamesx";
import Nav_items from "../components/Nav_items";
import Carrito from "../components/Carrito";

const Nave = ()=>{
    return( 
        <nav className="navbar navbar-expand-lg  bg_nav ">
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
                  <Nav_items text="OFERTAS" />
                </li>
                <li className="nav-item col-5">
                  <Nav_items text="TODOS LOS JUEGOS" />
                </li>
              </ul>
            </div>
          </div>
          <span className="col-1">
            <Carrito />
          </span>
          
        </div>
      </nav>
   )
}

export default Nave;

