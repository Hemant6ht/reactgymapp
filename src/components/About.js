import React from 'react';
import Common from './Common';
import Img from '../static/images/about.png';

const About = () =>{
    const data={
        statement:"Mughalsarai, Near Sky-cafe ",
        Companyname:"Hs Fitness",
        hitline:"Hit India , Fit India",
        alink:"/contact",
        imgsrc:Img,
        btnname:"Send Us"
    };
    return(
        <Common data={data}/>
    );
}
export default About;