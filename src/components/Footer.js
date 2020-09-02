import React, { Component } from 'react'
import '../assets/styles/components/Footer.scss'

import Facebook from '../assets/images/facebook.svg'
import Instagram from '../assets/images/instagram.svg'

export class Footer extends Component {
    render() {
        return (
            <div id="footer" className="section pb-5 pt-5">
                <div className="container">
                    <div className="row text-center">
                        <div className="col">
                            <h5 className="m-2">APIREYNA @2020</h5>
                        </div>
                        <div className="col">
                            <h5>Síguenos en : 
                            <a href="https://www.facebook.com/ApireynaEIRL" target="_blank" ><img src={ Facebook } className='social-logo mx-1' alt='facebook' /></a>
                            <a href="https://www.instagram.com/apireyna" target="_blank" ><img src={ Instagram } className='social-logo mx-1' alt='instagram' /></a>
                                                       
                            </h5>
                        </div>
                    </div>
      </div>
            </div>
        )
    }
}

export default Footer
