import {useState} from 'react';

const ItemCount = ({prod, onAdd}) => {
    const [contador, setContador] = useState(1) //valor inicial xq no puede comprar cero. 

    const modificarContador = (operacion) => {
        if(operacion === "+") {
            if(contador < prod.stock) //producto.stock
                setContador(contador + 1) //contador = contador + 1
        } else {
            if(contador > 1)
                setContador(contador - 1)
        }
    }
    return (
//todo lo que este dentro del return es lo q veo en mi pag.//
        <>
            <button onClick={() => modificarContador("+")} className='btn btn-dark'>+</button>
                {contador}
            <button onClick={() => modificarContador("-")} className='btn btn-light'>-</button>
            <button className="btn btn-dark">Agregar al carrito</button>
        </>
    );
} 

export default ItemCount;