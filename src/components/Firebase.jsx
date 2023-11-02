import {
  getFirestore,
  collection,
  writeBatch,
  doc,

  
} from "firebase/firestore";
import img_over from "../assets/overwatch_2.jpg";
import img_fc from "../assets/fc_24.webp";
import img_tlou from "../assets/tlou.jpg";
import img_mortal from "../assets/mortal_kombat_1.jpg";
import img_rocket from "../assets/rocket.jpg";
import img_drg from "../assets/dgbkakarot.jpg";
import img_re4 from "../assets/re4.jpg";
import img_di2 from "../assets/dead_island_2.jpg";
import img_cod from "../assets/cod.jpg";
import img_nba from "../assets/NBA.avif";
import img_naruto from "../assets/naruto.jpg";
import img_spiderman from "../assets/spiderman.jpg";

const Productos = [
  {
    id: 1,
    nombre: "Overwatch 2",
    descripcion: "Accion, Shooter",
    img: img_over,
    precio: "Gratis",
    categoria: "Accion",
    creado: true
  },
  {
    id: 2,
    nombre: "FC24",
    descripcion: "Simulador de Futbol",
    img: img_fc,
    precio: "$60US",
    categoria: "Deportes",
    creado: true
  },
  {
    id: 3,
    nombre: "The Last Of Us 2",
    descripcion: "Historia, Zombie, Horror",
    img: img_tlou,
    precio: "$30US",
    categoria: "Accion",
    creado: true
  },
  {
    id: 4,
    nombre: "Mortal Kombat 1",
    descripcion: "Peleas, Sangre, Violencia",
    img: img_mortal,
    precio: "$40US",
    categoria: "Peleas",
    creado: true
  },
  {
    id: 5,
    nombre: "Rocket League",
    descripcion: "Autos, Deportes",
    img: img_rocket,
    precio: "Gratis",
    categoria: "Deportes",
    creado: true
  },
  {
    id: 6,
    nombre: "Dragon Ball Z Kakarot",
    descripcion: "Juego de historia y peleas de Dragon Ball Z",
    img: img_drg,
    precio: "$40US",
    categoria: "Peleas",
    creado: true
  },
  {
    id: 7,
    nombre: "Resident Evil 4 Remake",
    descripcion: "Juego de Horror",
    img: img_re4,
    precio: "$60US",
    categoria: "Accion",
    creado: true
  },
  {
    id: 8,
    nombre: "Dead Island 2",
    descripcion: "Juego de Zombie",
    img: img_di2,
    precio: "$60US",
    categoria: "Accion",
    creado: true
  },
  {
    id: 9,
    nombre: "Call of duty modern warfare III",
    descripcion: "Shooter y Accion ",
    img: img_cod,
    precio: "$60US",
    categoria: "Accion",
    creado: true
  },
  {
    id: 10,
    nombre: "NBA 2K 24",
    descripcion: "Simulador de la NBA",
    img: img_nba,
    precio: "$60US",
    categoria: "Deportes",
    creado: true
  },
  {
    id: 11,
    nombre: "Nartuto ultimate ninja strom 4",
    descripcion: "Juego de peleas y historia de Naruto",
    img: img_naruto,
    precio: "$20US",
    categoria: "Peleas",
    creado: true
  },
  {
    id: 12,
    nombre: "Spiderman 2",
    descripcion: "Historia, Aventura, Mundo abierto",
    img: img_spiderman,
    precio: "$70US",
    categoria: "Accion",
    creado: true
  },
];

const Productos_firestore = () => {
  const db = getFirestore();
  const batch = writeBatch(db);
  const orderCollection = collection(db, "orders");


      Productos.forEach((producto) => {
        const newDoc = doc(orderCollection);
        batch.set(newDoc, producto);
      });

      
        return batch.commit();
      
    }
  


export default Productos_firestore;











  









