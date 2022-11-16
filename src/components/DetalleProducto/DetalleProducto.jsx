import React from 'react';
import Producto from '../Producto/Producto';

const DetalleProducto = () => {
    return (
        <div className='row g-0'>
            <div className="col-md-4">
                <img src={`../img/${Producto.img}`} className="img-fluid rounded-start"/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className='card-title'>{Producto.nombre}</h5>
                    <p className= 'card-text'>Modelo: {Producto.modelo}</p>
                    <p className= 'card-text'>Marca: {Producto.marca}</p>
                    <p className= 'card-text'>Precio: ${Producto.precio}</p>
                    <p className= 'card-text'>Stock: {Producto.stock}</p>
                    <button className="btn btn-dark">Agregar al carrito</button>
                </div>

            </div> 
         
        </div>
    );
}

export default DetalleProducto;
