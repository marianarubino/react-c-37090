
// https://firebase.google.com/docs/web/setup#available-libraries


import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, getDoc, getDocs, doc, updateDoc, deleteDoc} from "firebase/firestore"
// Your web app's Firebase configuration



const firebaseConfig = {
  apiKey:process.env.API_KEY , //NUNCA SUBIR A GITHUB PORQUE ES MI CONTRASEÑA. ENVIAR AL PROFE POR MSG AL MOMENTO DE ENTREGAR.
  authDomain: "react-37090.firebaseapp.com",
  projectId: "react-37090",
  storageBucket: "react-37090.appspot.com",
  messagingSenderId: "790597580330",
  appId: "1:790597580330:web:c9b2d1b62097b64b56f553"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getProductos = async() => {
  const productos = await getDocs (collection (db, "productos"))
  const items = productos.docs.map(prod => {return {...prod.data(), id: prod.id}} )
  return items

}

const getProducto = async (id) => {
  const prod = await getDoc(doc(db, "productos",id))
  let item
  if(prod.data()) {
      item = {...prod.data(), id: prod.id}
  } else {
      item = "Producto no encontrado"
  }
  
  return item
}

const cargarBDD = async () => { 
  const promise = await fetch ('./json/productos.json')
  const productos = await promise.json ()
  productos.forEach(async (prod) => {
    await addDoc ( collection (db, "productos"),{
      nombre:prod.nombre,
      marca:prod.marca,
      modelo:prod.modelo,
      idCategoria:prod.idCategoria,
      stock: prod.stock,
      precio: prod.precio,
      img: prod.img
    
    })
  })
}
const createProducto = async (objProducto) => {
  const estado = await addDoc(collection(db, "productos"), {
      nombre: objProducto.nombre,
      marca: objProducto.marca,
      modelo: objProducto.modelo,
      idCategoria: objProducto.idCategoria,
      stock: objProducto.stock,
      precio: objProducto.precio,
      img: objProducto.img
  })

  return estado
}

const updateProducto = async(id, info) => {
  const estado = await updateDoc(doc(db, "productos",id), info)
  return estado
}

const deleteProducto = async(id) => {
  const estado = await deleteDoc(doc(db,"productos", id))
  return estado
}

const createOrdenCompra = async (cliente, precioTotal, fecha) => {
  const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
      nombre: cliente.nombre,
      apellido: cliente.apellido,
      email: cliente.email,
      dni: cliente.dni,
      celular:cliente.celular,
      direccion: cliente.direccion,
      fecha: fecha,
      precioTotal: precioTotal
  })

  return ordenCompra
}

const getOrdenCompra = async(id) => {
  const item = await getDoc(doc(db, "ordenCompra", id))
  const ordenCompra = {...item.data(), id: item.id}
  return ordenCompra
}






export {cargarBDD, getProductos,getProducto, createProducto,updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra}


/* clase 12:
1) importo getfirestore, collection y addDoc
2) f(x) que consulte mi base de datos = const db
3) f(x) todo asincronico. 
  con addDoc genero un nuevo doc en mi base de datos, llamo a collection y la consulta, si no existe la crea y agrega los nuevos productos. 
  CICLO FOR EACH: por cada objeto en mi archivo json: genero uno nuevo y guardo en firestore, en la base de datos db, en la coleccion productos.  
  el addDoc genera el id unico de cada producto.
4)exporto la funcion {cargarBDD}
5) importo en index.js. 
-----------------
      f(x) que consulte datos:
  1)le agrego al import getDocs y getDoc
  2) const getProductos con fx que tome los datos de firebase
  
  CRUD: CREATE - READ - UPDATE - DELETE:
  const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db, "productos"), {
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })
}

const createProducto = async (objProducto) => {
    const estado = await addDoc(collection(db, "productos"), {
        nombre: objProducto.nombre,
        marca: objProducto.marca,
        modelo: objProducto.modelo,
        idCategoria: objProducto.idCategoria,
        stock: objProducto.stock,
        precio: objProducto.precio,
        img: objProducto.img
    })

    return estado
}

const updateProducto = async(id, info) => {
    const estado = await updateDoc(doc(db, "productos",id), info)
    return estado
}

const deleteProducto = async(id) => {
    const estado = await deleteDoc(doc(db,"productos", id))
    return estado
}

  
//CREATE AND READ ORDENES DE COMPRA

const createOrdenCompra = async (cliente, preTotal, fecha) => {
    const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
        nombre: cliente.nombre,
        apellido: cliente.apellido,
        email: cliente.email,
        dni: cliente.dni,
        direccion: cliente.direccion,
        fecha: fecha,
        precioTotal: preTotal
    })

    return ordenCompra
}

const getOrdenCompra = async(id) => {
    const item = await getDoc(doc(db, "ordenCompra", id))
    const ordenCompra = {...item.data(), id: item.id}
    return ordenCompra
}
  
  */