import {useContext} from "react";
import ItemCount from "../ItemCount/ItemCount";
import {Link} from 'react-router-dom'
import {CartContext} from "../../context/CartContext";

const ItemDetail = ({producto}) => {

    // consulto los elementos que voy a agregar: 

    const {cart, isInCart, addItem} = useContext(CartContext)
    const onAdd = (contador) => {
        console.log(producto)
        console.log(contador)
        addItem(producto, contador) 
    }

    
    return (
        <div className='row g-0'>
            <div className="col-md-4">
                <img src={producto.img} className="img-fluid rounded-start"/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className='card-title'>{producto.nombre}</h5>
                    <p className= 'card-text'>Modelo: {producto.modelo}</p>
                    <p className= 'card-text'>Marca: {producto.marca}</p>
                    <p className= 'card-text'>Precio: ${producto.precio}</p>
                    <p className= 'card-text'>Stock: {producto.stock}</p>
                    <ItemCount stock= {producto.stock} onAdd={onAdd}/> <br />
                    <button className="btn btn-secondary"><Link to="/cart"className="nav-link">FINALIZAR COMPRA</Link></button>
                </div>

            </div> 
         
        </div>
    );
}

export default ItemDetail;
