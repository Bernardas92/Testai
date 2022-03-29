import React from "react";

const Joke = (props)=>{
    return(
        <>
            <div className="card col-sm-3 mt-4">
                <h5 className="card-title">{props.id}</h5>
                <p className="card-text">{props.setup}</p>
                <p className="card-text">{props.delivery}</p>
            </div>
          
        </>
    )
}

export default Joke