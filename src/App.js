import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home'
import Services from './components/pages/Services/Services'
import Products from './components/pages/Products/Products'
import Footer from './components/pages/Footer/Footer';
import SignUp from './components/pages/SignUp/SignUp';
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    AOS.init({duration: 1000})
  }, [])

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/react-website-v1/" exact component={Home}/>
        <Route path="/services" component={Services}/>
        <Route path="/products" component={Products}/>
        <Route path="/sign-up" component={SignUp}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;