import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProducto } from '../../assets/firebase.js';



const ItemDetailContainer = () => {
    
    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    useEffect(()=>{
        getProducto(id).then(prod => {
            setProducto(prod)
        })    
    }, []);

    return (
        <div>
            <div className = "card mb-3 container itemDetail">
                <ItemDetail producto= {producto}/>
            </div>
            
        </div>
    );
}

export default ItemDetailContainer;
 
/* al no utilizar mas si base de datos local; esta fx queda modificada por la nueva, con las fx para firebase:

useEffect(()=>{
        consultarBDD('../json/productos.json').then(productos=> {
            const prod = productos.find(productoArray => productoArray.id === parseInt(id))
            setProducto (prod)
        })    
    }, []);

*/