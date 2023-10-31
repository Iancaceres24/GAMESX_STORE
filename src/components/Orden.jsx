import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import img_gato from "../assets/gato.jpg"
import { Link } from "react-router-dom";
const Orden = () => {
    const [orderId, setOrderId] = useState(null);
    const [error,setError] = useState(null)
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "ordenes");
    getDocs(itemCollection)
    .then((snapshot) => {
      if (!snapshot.empty) {
        const firstDoc = snapshot.docs[0];
        setOrderId(firstDoc.id); 
      }
    }) 
    
}, []);
    if (orderId === null) {
    return <div className="row justify-content-center">
        <h1 className="col-12 text-center m-2" >No hay ninguna orden todavia</h1>
        <Link className="col-8 btn btn-primary m-2" to={"/"}>Volver al inicio</Link>

    </div>;
    
  }
  return (
    <div className="row justify-content-center">
        
      <h2 className="col-10 text-center">GRACIAS POR SU COMPRA</h2>
      <span className="col-10 text-center"> <img className="img  text-center" src={img_gato} alt="Imagen de un gato con capucha" /></span>
      <h3 className="col-10 text-center">El id de su compra es: {orderId}</h3>
      <Link className="col-8 btn btn-primary m-2" to={"/"}>Volver al inicio</Link>
    </div>
  );
};

export default Orden;



