import { createContext, useState,useEffect } from "react";

 

export const CarritoContext = createContext();




const CarritoProvider = ({children}) =>{
    const [agregar,setagregar] = useState([])
    
    const [total,setTotal] = useState([])
    
useEffect(() => {
  
    const nuevoTotal = agregar.reduce((acc, item) => acc + item.precio, 0);
    setTotal(nuevoTotal);
  }, [agregar]);
 
        


    return <CarritoContext.Provider value={{agregar,setagregar,total,}}>{children}</CarritoContext.Provider>
}

export default CarritoProvider


