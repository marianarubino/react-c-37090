import { cargarBDD, getProductos } from "./firebase.js"


/*  esta es la funcion que lo unico que hace es consultar mi base de datos local*/
export const consultarBDD = async (ruta) => {
    const promise = await fetch(ruta) 
    const productos = await promise.json()
    return productos
}

//cargarBDD ()

