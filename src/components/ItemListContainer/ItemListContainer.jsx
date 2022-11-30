import {useState, useEffect, useContext} from 'react'; //este usecontext se declara aqui porque sin el no puedo hacer uso del context.
import ItemList from '../itemList/itemList.jsx';
import {getProductos} from '../../assets/firebase.js'
import { useParams } from 'react-router-dom';
//import { DarkModeContext } from '../../context/darkMode.js';
const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {category} = useParams()

    //const {darkMode, toggleDarkMode} = useContext (DarkModeContext)

    useEffect(() => {
        if(category) {
            getProductos().then(products => {
                const productsList= products.filter(prod => prod.idCategoria === parseInt(category))
                setProductos(productsList)
            })
        } else {
            getProductos().then(productsList => {
                setProductos(productsList)
            })
        }
        
    },[category]);

    
    return (
        <div className=  'row'>
            <ItemList productsList={productos}/>
        </div>       
    );
}

export default ItemListContainer;