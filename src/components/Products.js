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
            <div id="productos" className="section">
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
                            <p className="card-text p-line">La miel es una excelente fuente de energía, pues contiene azúcares sencillos
(glucosa y fructosa) utilizables rápidamente por el organismo. <br />Contiene además
minerales como: hierro, calcio, fosfato, cloruro de sodio, potasio y magnesio.
Se le atribuye propiedades antibacteriana, antinflamatoria y antioxidante.</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="card">
                                <img className="card-img-top" src={Algarrobina} alt="Foto de Sacha" />
                                <div className="card-body">
                                <h4 className="card-title mt-2">Algarrobina</h4>
                                <p className="card-text">Es rica en vitamina A y calcio, además de contener potasio, magnesio y hierro,
entre otras sustancias. <br />Además contiene un alto porcentaje de azúcares
naturales y es buena para la digestión.
<br />Excelente energizante natural, es ideal para toda la familia y se recomienda su
consumo si se desea prevenir la anemia gracias a su alto porcentaje de hierro.</p>
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="card">
                                <img className="card-img-top" src={Polen} alt="Foto de Sacha" />
                                <div className="card-body">
                                <h4 className="card-title mt-2">Polen</h4>
                                <p className="card-text">Suplemento nutricional que contiene aminoácidos esenciales, siendo una excelente fuente de proteína vegetal.  Contiene minerales como
el calcio, magnesio, zinc y complejo B. <br />Dentro de los
beneficios que se le atribuyen son: regeneración de los tejidos,  reduce la
inflamación de próstata; regulador del tránsito intestinal.
<br />Para su consumo, se sugiere añadir los gránulos de polen a las frutas, los
jugos, el yogurt, los cereales o las ensaladas; siendo la dosificación diaria de 20
gramos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mx-3 mb-3">
                        <h3>También comercializamos</h3>
                        </div>
                    </div>
                    <div className="row">
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
