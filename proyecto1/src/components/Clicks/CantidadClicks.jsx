import React, { useState } from 'react'

const CantidadClick = ({stock}) => {

    // stock => tienes que recibir como parametro en el main , recuerda poner lo !

    // es el state que manipula la cantidad de clicks que haz hecho ! 
    // recuerda descomentar lo en el Main , si vas a usar ) 

    const [clicks , setClicks] = useState(0)

    // es la funcion que incrementa los clicks siempre y cuando sean menor que el stock 
    const addClick = () => {
        if(clicks < stock) setClicks(clicks+1)
    }

    // es la funcion que disminuye los clicks siempre y cuando sean mayor a 0 
    const removeClick = () => {
        if(stock > 0) setClicks(clicks-1)
    }
    return (
        <div>
            {/* Aca en el h1 muestro los clicks y en onClicks de bontones estoy asignando las funciones correspondientes */}
        <h1>{clicks}</h1>
        <button onClick={()=>addClick()}>Add</button>
        <button onClick={()=>removeClick()}>Remove</button>
        </div>
    )
}

export default CantidadClick