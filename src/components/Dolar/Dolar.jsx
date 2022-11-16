// ejemplo clase 7 consumo Api. 

import {useState, useEffect} from 'react';

const Dolar = () => {
    
    const [dolar, setDolar] = useState([]);

    useEffect (() =>{
        setInterval(() => {
            fetch('https://criptoya.com/api/dolar')
        .then(response => response.json())
        .then(({solidario, blue, ccl, mep})=>{
            const dolarDOM = 
                <div>
                    <h2> Cotizacion del Dolar :</h2>
                        <p>Dolar Solidario: ${solidario}</p>
                        <p>Dolar Blue: ${blue}</p>
                        <p>Dolar Ccl: ${ccl}</p>
                        <p>Dolar Mep: ${mep}</p>
                </div>
            setDolar(dolarDOM)
            console.log(dolarDOM)
            })
    }, 60000)
}, []);

    return (
        <div>
           {dolar} 
        </div>
    );
}

export default Dolar;
