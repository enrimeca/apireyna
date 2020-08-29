import React, { Component } from 'react'

import Miel from '../assets/images/miel.jpg'
import Algarrobina from '../assets/images/algarrobina.jpg'
import Propoleo from '../assets/images/propoleo.jpg'

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
                            <img className="card-img-top" src={Propoleo} alt="Foto de Sacha" />
                            <div className="card-body">
                            <h4 className="card-title mt-2">Propóleo</h4>
                            <p className="card-text">El propóleo lo producen las abejas a partir de resinas vegetales y está enriquecido con secreciones enzimáticas salivares.<br />Presenta propiedades antimicrobianas y antibacterianas.  Por lo que es ideal para tratar afecciones de las vías respiratorias.  Además refuerza el sistema inmunológico.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                        <div className="card">
                            <img className="card-img-top" src={Miel} alt="Foto de Sacha" />
                            <div className="card-body">
                            <h4 className="card-title mt-2">Algarrobina</h4>
                            <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                        <div className="card">
                            <img className="card-img-top" src={Miel} alt="Foto de Sacha" />
                            <div className="card-body">
                            <h4 className="card-title mt-2">Algarrobina</h4>
                            <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                        <div className="card">
                            <img className="card-img-top" src={Miel} alt="Foto de Sacha" />
                            <div className="card-body">
                            <h4 className="card-title mt-2">Algarrobina</h4>
                            <p className="card-text"></p>
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
