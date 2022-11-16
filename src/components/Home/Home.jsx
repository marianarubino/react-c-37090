import {useState, useEffect} from 'react';
import { link } from 'react-router-dom';
import {consultarBDD} from '../../assets/funciones.js'

const Home = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        consultarBDD('./json/productos.json').then(productos => {
            const cardProductos = productos.map(prod => 
                <div className="card cardProducto" key={prod.id}>
                        <img src={`./img/${prod.img}`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{prod.nombre}</h5>
                            <p className="card-text">Marca: {prod.marca}</p>
                            <p className="card-text">Modelo: {prod.modelo}</p>
                            <p className="card-text">Precio: ${prod.precio}</p>
                            <p className="card-text">Stock: {prod.stock}</p>
                            <button className='btn btn-dark'><link className='nav-link' to={`/producto/${prod.id}`}>Ver producto</link></button>
                        </div>
                </div>
                
                )
            setProductos(cardProductos)

        })
},[]);


    return (
        <div className='row'>
            {productos}  
        </div>
    );
}

export default Home;




/*    const consultarBBD = () =>{
        fetch ('./json/productos.json')
        .then (promise => promise.json())
        .then (productos => {
            const cardProductos = productos.map(prod =>
                )
        } 
            
            console.log(productos))


    }
consultarBBD() // llamo a que se ejecute la fx.

/* dentro de fetch: ./ salta directamente a carpeta public  
    el primer.then convierte los datos de la promesa a archivo json, que son objetos . y cuando termine esa conversion, le pido que me los muestre en consola con el segundo.then 
*/
 //el row es para q me muestre los prod en fila en la pag.
