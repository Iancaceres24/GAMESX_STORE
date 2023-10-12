import { useState } from "react"


export const useCount = (inicial = 0, min, max) =>{
   if (inicial < min || inicial > max)  inicial = min

   const [count, setCount] = useState(inicial)

   const decre = () =>{
    if (count > min) setCount(pre => pre - 1)
   }
   const incre = () =>{
    if (count < max) setCount(pre => pre + 1)
   }
   const reset = () => {
    setCount(inicial)
   }

   return{count, decre, incre,}
}