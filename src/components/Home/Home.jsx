import {useState, useEffect} from 'react';
import { Item } from '../item/Item.jsx';
import {consultarBDD} from '../../assets/funciones.js'

const Home = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        consultarBDD('../json/productos.json').then(productos => {
            setProductos(productos)
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
