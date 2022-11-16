import {useState, useEffect} from 'react';
import ItemList from '../itemList/itemList.jsx';
import {consultarBDD} from '../../assets/funciones.js'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {category} = useParams()


    useEffect(() => {
        if(category) {
            consultarBDD('../json/productos.json').then(products => {
                const productsList= products.filter(prod => prod.idCategoria === parseInt(category))
                setProductos(productsList)
            })
        } else {
            consultarBDD('./json/productos.json').then(productsList => {
                setProductos(productsList)
            })
        }
        
    },[category]);

    
    return (
        <div className='row'>
            <ItemList productsList={productos}/>
        </div>       
    );
}

export default ItemListContainer;