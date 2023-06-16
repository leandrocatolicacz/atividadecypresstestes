import React from "react";

const Card = (props) => {

    return(
        <div className="card shadow-lg p-3 mb-5 bg-ligth rounded">
            <h5 className="card-header">{props.titulo}</h5>
                <div className="card-body">
                    {props.children}
                </div>
        </div>
    )
}

export default Card