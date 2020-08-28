import React, { Component, Fragment } from 'react'

import Header from '../components/Header';
import About from '../components/About';
import Products from '../components/Products';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export class Home extends Component {  

  render() {
    return (
      <Fragment>
        <Header />        
        <About />
        <Products />
        <Contact />
        <Footer />
      </Fragment>
    )
  }
}

export default Home