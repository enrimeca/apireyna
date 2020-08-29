import React, { Component } from 'react'

import Miel from '../assets/images/miel.jpg'
import Algarrobina from '../assets/images/algarrobina.jpg'
import Propoleo from '../assets/images/propoleo.jpg'
import Polen from '../assets/images/polen.jpg'
import Jarabe from '../assets/images/jarabe.jpg'
import Jalea from '../assets/images/jalea.jpg'

export class Products extends Component {
    render() {
        return (
            <div id="products" className="section">
                <div className="container mt-2 mb-2 section-inner">
                    <div className="row">
                        <div className="col mx-3 mb-3">
                        <h2>Nuestros Productos</h2>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                    <div className="card">                        
                        <img className="card-img-top" src={Miel} alt="Foto de Sacha" />
                        <div className="card-body">
                        <h4 className="card-title mt-2">Miel de abeja</h4>
                        <p className="card-text p-line">La miel es altamente nutritiva. <br />Contiene minerales como: hierro, calcio, fosfato, cloruro de sodio, potasio y magnesio.  Además, vitaminas, glucosa y fructosa.  <br />Es un alimento ideal para una dieta balanceada.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                        <div className="card">
                            <img className="card-img-top" src={Algarrobina} alt="Foto de Sacha" />
                            <div className="card-body">
                            <h4 className="card-title mt-2">Algarrobina</h4>
                            <p className="card-text">La algarrobina es rica en glucosa, sacarosa y fructosa.  Es un alimento energético.  <br />Ayuda a los niños con dificultad para comer o con bajo peso.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                        <div className="card">
                            <img className="card-img-top" src={Jalea} alt="Foto de Sacha" />
                            <div className="card-body">
                            <h4 className="card-title mt-2">Jalea Real</h4>
                            <p className="card-text">Sustancia que segregan las abejas obreras y que contiene gran cantidad de proteíanas y vitaminas.  La Jalea Real es el alimiento exclusivo para la abeja reina y de las larvas, en sus primeros días.  <br />Es ideal para aumentar las defensas del organismo.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                        <div className="card">
                            <img className="card-img-top" src={Polen} alt="Foto de Sacha" />
                            <div className="card-body">
                            <h4 className="card-title mt-2">Polen</h4>
                            <p className="card-text">El polen es un alimento que se recoge de la colmena de las abejas; éstas lo toman de las flores y lo transportan en forma de gránulos anaranjados.  <br />Contiene aproximadamente 25% de proteína y un 4% de fibra. <br />Refuerza el sistema inmunológico, aumenta el rendimiento de las personas, aumenta la resistencia a la fatiga y la capacidad intelectual.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                        <div className="card">
                            <img className="card-img-top" src={Propoleo} alt="Foto de Sacha" />
                            <div className="card-body">
                            <h4 className="card-title mt-2">Propóleo</h4>
                            <p className="card-text">El propóleo lo producen las abejas a partir de resinas vegetales y está enriquecido con secreciones enzimáticas salivares.<br />Presenta propiedades antimicrobianas y antibacterianas.  Por lo que es ideal para tratar afecciones de las vías respiratorias.  Además refuerza el sistema inmunológico.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                        <div className="card">
                            <img className="card-img-top" src={Jarabe} alt="Foto de Sacha" />
                            <div className="card-body">
                            <h4 className="card-title mt-2">Jarabe BIO - Bron</h4>
                            <p className="card-text">Jarabe natural a base de miel con propóleo e infusiones de hierbas como eucalipto, muña, mullaca, huamanrripa, entre otros.  <br />Es ideal para prevenir y tratar procesos infecciosos de las vías respiratorias.  Refuerza el sistema inmunológico.</p>
                            </div>
                        </div>
                    </div>                   
                    
                </div>          
                </div>
            </div>
        )
    }
}

export default Products
