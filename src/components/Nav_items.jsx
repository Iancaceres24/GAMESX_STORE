import {  NavLink } from "react-router-dom";



const Nav_items = ({text,categoria })=>{
    return(  
    <NavLink className={({isActive}) =>  isActive ? "nav-link  text-center text-light navactive" : "nav-link  text-center text-light" } aria-current="page" to={categoria}>
        {text}
    </NavLink>
    )
}

export default Nav_items;



