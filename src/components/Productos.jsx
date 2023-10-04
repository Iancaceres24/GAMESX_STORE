
import img_over from "../assets/overwatch_2.jpg"
import img_fc from "../assets/fc_24.webp"
import img_tlou from "../assets/tlou.jpg"
import img_mortal from "../assets/mortal_kombat_1.jpg"
import img_rocket from "../assets/rocket.jpg"
import img_drg from "../assets/dgbkakarot.jpg"
import img_re4 from "../assets/re4.jpg"
import img_di2 from "../assets/dead_island_2.jpg"

const Productos = [
    {
      id: 1, 
      nombre: "Overwatch 2",
      descripcion: "Juego de disparos",
      img: img_over,
      precio: "Gratis",
      categoria: "Accion",
      
    },
    {
      id: 2,
      nombre: "FC24",
      descripcion: "Juego de Futbol",
      img: img_fc,
      precio: "$60US",
      categoria: "Deportes",
    },
    {
      id: 3,
      nombre: "The Last Of Us 2",
      descripcion: "Juego de zombie",
      img: img_tlou,
      precio: "$30US",
      categoria: "Accion",
    },
    {
      id: 4,
      nombre: "Mortal Kombat 1",
      descripcion: "Juego de peleas",
      img: img_mortal,
      precio: "$40US",
      categoria: "Peleas"
    },
    {
      id: 5,
      nombre: "Rocket League",
      descripcion: "Juego de autos",
      img: img_rocket,
      precio: "Gratis",
      categoria: "Deportes",
    },
    {
      id: 6, nombre: "Dragon Ball Z Kakarot",
      descripcion: "Juego de pelea",
      img: img_drg,
      precio: "$40US",
      categoria: "Peleas"
    },
    {
      id: 7, nombre: "Resident Evil 4 Remake",
      descripcion: "Juego de Horror",
      img: img_re4,
      precio: "$60US",
      categoria: "Accion",
    },
    {
      id: 8, nombre: "Dead Island 2",
      descripcion: "Juego de Zombie",
      img: img_di2,
      precio: "$60US",
      categoria: "Accion",
    },
  ];


  const GetProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Productos);
      }, 1500);
    });
  };
  

 

  
  export default GetProductos; Productos;