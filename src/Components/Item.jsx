import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../Context/CartContext'

const Item= ({info}) => {
    const nombre = useContext(CartContext);
    console.log('Item: ', nombre);

    return(
        <Link to={'/Detalle/${info.Id}'} className="productos">
            <img src={info.ImagenURL} alt="" />
            <p>{info.nombre}</p>
        </Link>


    );
};


export default Item;