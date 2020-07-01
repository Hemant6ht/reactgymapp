import React from 'react';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Footer from './components/Footer';
import {Route,Switch} from 'react-router-dom';

class App extends React.Component
{
  render(){
    return(
    <>
    <Nav/>
    <div className="body">
        <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/services">
              <Services/>
            </Route>
            <Route exact path="/contact">
              <Contact/>
            </Route>
        </Switch>
    </div>
    <Footer/>
    </>
    );
  }
}
export default App;
