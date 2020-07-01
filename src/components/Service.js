import React from 'react';
const Service = (props) =>{
    return(
        <div className="card">
            <div className="cardbody">
                <img src={props.data.image} className="card-img-top" alt={props.data.name}/>
                <div className="card-body">
                <p className="card-text">{props.data.name}</p>
            </div>
        </div>
    </div>
    );
}
export default Service; 