/* import { useState, createContext } from 'react'

const DarkModeContext = createContext() // 1)genero const del contexto. createContext es el Hook que me permite generar el contexto global dentro de mi app. 

constDarkModeProvider = (props)=>{
    const [darkMode, setDarkMode] = useState(false);
// el toogle niega el parametro original. devuelve true o false dependiendo el valor original que tenga el darkmode (en useState(false))
    const toggleDarkMode = () =>{
        setDarkMode (!darkMode)
    }

    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>
    )

}

export {DarkModeContext, DarkModeProvider}

 */
