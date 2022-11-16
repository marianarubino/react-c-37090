import './app.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FormBusqueda from './FormBusqueda/FormBusqueda';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import CartWidget from './CartWidget/CartWidget';
import ItemCount from './ItemCount/ItemCount';
import Home from './Home/Home';
import Dolar from './Dolar/Dolar';
import Producto from './Producto/Producto';
import Carrito from './Carrito/Carrito';

const App = () => {
    return (
        <>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element= {<Home/>}/>
                <Route path='/producto/:id' element={<Producto/>}/>
                <Route path='/carrito' element={<Carrito/>}/>    
            </Routes>   
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
