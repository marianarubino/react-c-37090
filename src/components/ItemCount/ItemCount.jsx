import {useState} from 'react';

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1) //valor inicial xq no puede comprar cero. 

    const modificarContador = (operacion) => {
        const agregarAlCarrito = () => {
            onAdd(contador)
        }
    
        const incrementar = () => contador < stock && setContador(contador + 1)
    
        const decrementar = () => contador > 1 && setContador(contador - 1) 
    }
    return (
//todo lo que este dentro del return es lo q veo en mi pag.//
        <>
            <button onClick={decrementar} className='btn btn-light botItem'><i class="fas fa-minus"></i></button>
                    {contador}
            <button onClick={incrementar} className='btn btn-light botItem'><i class="fas fa-plus"></i></button>
            <button className="btn btn-dark" onClick={agregarAlCarrito}><i class="fas fa-cart-plus"></i></button>
        </>
    );
} 

export default ItemCount;

/* esta funcion dejo de funcionar luego de la clase 10 :
const modificarContador = (operacion) => {
        if(operacion === "+") {
            if(contador < prod.stock) //producto.stock
                setContador(contador + 1) //contador = contador + 1
        } else {
            if(contador > 1)
                setContador(contador - 1)
        }
        */