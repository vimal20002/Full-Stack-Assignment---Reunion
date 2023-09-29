import './App.css';
import React from 'react';
import About from './components/About';
import AddProperty from './components/AddProperty';
import Contact from './components/Contact';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Property from './components/Property';
import Signup from './components/Signup';
import { Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
        <Switch>
        <React.Fragment>
    <Navbar/>
    <ToastContainer/>
    <Route exact path ="/"><Home/></Route>
    <Route exact path ="/contact">   <Contact/></Route>
    <Route exact path ="/cart">   <Cart/></Route>
    <Route exact path ="/about">   <About/></Route>
    <Route exact path ="/addproperty"><AddProperty/></Route>
    <Route exact path ="/login"><Login/></Route>
    <Route exact path ="/signup"><Signup/></Route>
    <Route exact path ="/property:id"><Property/></Route>
    <Route exact path ="/addproperty:id"><AddProperty/></Route>

    


   
   
   
   </React.Fragment>
   </Switch>
    </>
  );
}

export default App;
