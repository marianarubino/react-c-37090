
import { useContext, useState, createContext } from 'react'

const CartContext = createContext([])

const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.find(prod => prod.id === id)
    }

    const addItem = (producto, cantidad) => {
        if(isInCart(producto.id)) {
            const indice = cart.findIndex(prod => prod.id === producto.id) // consulto por el indice del producto en el array
            const aux = [...cart]
            aux[indice].cant = cantidad // pisa la cantidad y no suma porque podria pasar que compren un numero mayor al stock de ese producto. 
            setCart(aux)
        } else {
// este else es para el caso en el que el usuario agrega un producto nuevo en el carrito. 
            const nuevoProducto = {
                ...producto,
                cant: cantidad
            }
// operador spread en js: es para copiar los valores pero no la referencia a memoria (siempre y cuando sean datos simples).

            setCart([...cart, nuevoProducto])
        }
        console.log(cart)
    }

    const emptyCart = () => {
        return setCart([])
    }
   
    const removeItem = (id) => {
        return setCart(cart.filter(prod => prod.id !== id))
// aca pido el id como parametro. uso el .filter para que me devuelva todos los productos cuyo id sea distinto del solicitado por el usuario.
    }

    const getItemQuantity = () => {
        return cart.reduce((acum, prod) => acum += prod.cant, 0)
// el metodo .reduce se utiliza para realizar varias operaciones. acum:acumulador, prod:producto. 
    }

    const totalPrice = () => {
        return cart.reduce((acum, prod) => acum += (prod.cant * prod.precio), 0)
// aca calculo el precio total del carrito.     
    }

    return (
        <CartContext.Provider value = {{cart, isInCart, addItem, emptyCart, removeItem,getItemQuantity, totalPrice}}>
            {props.children} 
        </CartContext.Provider>
    )

}

export {CartContextProvider, CartContext}