import React from "react";

 const PrimeiroComponenteDinamico = ({nome, dia}) => {

    return(
        <div>
            <h1>Hello {nome} hoje é {dia}</h1>
        </div>
    )
}

export default PrimeiroComponenteDinamico