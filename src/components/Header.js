import React, { Component } from 'react'

import  '../assets/styles/components/Header.scss'

import imagen1 from '../assets/images/hero1.jpg'
import imagen2 from '../assets/images/hero2.jpg'
import imagen3 from '../assets/images/hero3.jpg'

export class Header extends Component {
    render() {
        return (
            <div id="inicio" className='section'>
                <div className="container mt-1 mb-2 section-inner3">

                    <div className="row">
                        <div className="col">
                            <div id="carousel" className="carousel slide carousel-fade text-center" data-ride="carousel" data-pause="false">
                                <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={imagen1} alt="Apireyna 1" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={imagen2} alt="Apireyna 2" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={imagen3} alt="Apireyna 3" />
                                </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                        
            </div>
        )
    }
}

export default Header
