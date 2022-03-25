import React from "react";

const Joke = ()=>{
    return(
        <>
            <div className="card col-sm-3 mt-4">
                <h5 className="card-title">{this.props.id}</h5>
                <p className="card-text">{this.props.setup}</p>
                <p className="card-text">{this.props.delivery}</p>
            </div>
          
        </>
    )
}

export default Joke