import React, {useState} from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

export const ItemDetail= ({data}) => {
    const [goToCart, setGoToCart]= useState(false)

    const onAdd =(quantity) => {
        setGoToCart(true);
    }

    return(
        <div className="container">
            <div className="detail">
                <img className='detail_image' src={data.imagenURL} alt="" />
                <div className="content">
                    <h2>{data.nombre}</h2>
                    {
                        goToCart
                        ? <Link to='/Cart'>Terminar Compra</Link>
                        : <ItemCount initial ={1} stock={5} onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;