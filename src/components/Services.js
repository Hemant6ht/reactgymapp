import React from 'react';
import Service from './Service';
import {List} from '../static/serviceslist';
import '../static/css/Services.css';
const Services = () =>{
    return(
            <div className="maintop">
                <div className="heading">Our Services</div>
                <div className="serv">
                {
                    List.map((list,index)=>{
                        return(
                            <Service data={list} key={index}/>
                        );
                    })
                }
                </div>
            </div>
    );
}
export default Services;