import { Link } from "react-router-dom";



const Nav_items = ({text,categoria })=>{
    return(  
    <Link className="nav-link  text-center text-light" aria-current="page" to={categoria}>
        {text}
    </Link>
    )
}

export default Nav_items;
