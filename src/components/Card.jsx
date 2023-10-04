import { Link } from "react-router-dom";

const Card = ({nombre,img,descripcion,precio,}) => {
  return (
    <div className="card" style={{width: "18rem"}}>
      <img src={img} className="card-img-top img" alt={nombre} />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">
          {descripcion}
        </p>
        <Link  to={`/Juego/${nombre}`} className="btn btn-primary">
          {precio}
        </Link>
      </div>
    </div>
  );
}

export default Card;
