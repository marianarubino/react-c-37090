/* CLASE 6 : PRIMERA PARTE 
hago un array de alumnos.
RETURN: voy a hacer una fx para que consulte de manera asincrona el array de alumnos.asi no tiene mucho sentido porque los datos estan en el mismo archivo, pero mas adelante consultaremos los datos a una fuente externa como firebase. por lo que se generará una demora en la rta.  

*/
const Home = () => {
    const alumno1 = {nombre: "Pepe", apellido: "Perez"}
    const alumno2 = {nombre: "Maria", apellido: "Martinez"}
    const alumno3 = {nombre: "Pedro", apellido: "Parker"}
    
    const alumnos = [alumno1, alumno2,alumno3]
//ahora genero la fx que consulte el array de alumnos, Mediante una promesa.
    const consultarAlumnos = (permiso) =>{
        return new Promise( (res, rej) => {
            if (permiso) {
                res (alumnos)
            }
            rej ("No cuenta con permisos suficientes") 
        })
    }
// si lo veo en consola me muestra la lista de alumnos; si pongo true, si le indico error tmb me lo muestra en consola con catch.
// RECORDAR: res y rej son returns tmb, por lo que al cumplirse una, se corta el codigo y la ejecucion   
    consultarAlumnos(false /*true */)
    .then(resultado => console.log(resultado))
    .catch (error => console.error(error))

    return (
        <>
            
        </>
    );
}

export default Home;
