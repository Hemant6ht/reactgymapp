import React from 'react';
import '../static/css/Common.css';
import {Link} from 'react-router-dom';
const Common = (props) =>{
    return(
        <>
            <div className="container">
                <div className="rows">
                    <div className="info">
                        <span className="statement">{props.data.statement}</span>
                        <div className="company-name">{props.data.Companyname}</div>
                        <h3 className="hit-line">{props.data.hitline}</h3>
                        <Link to={props.data.alink} className="btn btn-lg btn-outline-success">{props.data.btnname}</Link>
                    </div>
                    <div className="svg">
                        <div>
                            <img src={props.data.imgsrc} alt="homeimage"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Common;