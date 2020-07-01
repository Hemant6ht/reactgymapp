import React from 'react';
import Common from './Common';
import Img from '../static/images/home.png';

const Home = () =>{
    const data={
        statement:"Welcome to world of Fitness",
        Companyname:"Hs Fitness",
        hitline:"Keep Runnoing and never look back.",
        alink:"/services",
        imgsrc:Img,
        btnname:"Discover"
    };
    return(
        <Common data={data}/>
    );
}
export default Home;