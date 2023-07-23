import { Link } from "react-router-dom";

export const Item= ({info}) => {
    return(
        <Link to={'/Detalle/${info.Id}'} className="productos">
            <img src={info.ImagenURL} alt="" />
            <p>{info.nombre}</p>
        </Link>


    );
};


export default Item;