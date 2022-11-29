import './app.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Context
import { CartContextProvider } from '../context/CartContext';

//Componentes
import FormBusqueda from './FormBusqueda/FormBusqueda';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import CartWidget from './CartWidget/CartWidget';
import ItemCount from './ItemCount/ItemCount';
import Home from './Home/Home';
import Dolar from './Dolar/Dolar';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <CartContextProvider>
                    <Navbar/>
                    <Routes>
                        <Route path='/' element= {<ItemListContainer/>}/>
                        <Route path='/product/:id' element={<ItemDetailContainer/>}/>
                        <Route path='/cart' element={<Cart/>}/>    
                    </Routes>
                </CartContextProvider>   
            </BrowserRouter>
        </>

    );
}


export default App;

/* 
<ItemCount/>     ej, clase 5 
<FormBusqueda busqueda ={"Login"} />   ejemplo de la clase 4
<CartWidget/>
<ItemListContainer greeting ={"greeting"} />    ej. clase 
<Dolar/> .  ejemplo consumo API clase 7

                <ItemCount/>
                <CartWidget/>
                <ItemListContainer/>*/
