import React, { Component } from 'react'
import '../assets/styles/components/Contact.scss'
export class Contact extends Component {
    render() {
        return (
            <div id="contacto" className='section section-contact py-5'>
                <div className="container section-inner">
                    <div className="row">
                    <div className="col text-uppercase text-center">                        
                        <h2>Contáctanos</h2>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col text-center my-3">
                        Venta al por mayor y menor de nuestros productos
                    </div>
                    </div>
                    <div className="row">
                    <div className="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2">
                        <form>
                        <div className="form-row">
                            <div className="form-group col-12 col-md-6">
                            <input type="text" className="form-control" placeholder="Nombres" />
                            </div>
                            <div className="form-group col-12 col-md-6">
                            <input type="email" className="form-control" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                            <textarea name="text" className="form-control form-control-lg" placeholder="Tu mensaje" rows="3"></textarea>
                            <small className="form-text text-muted">
                                Responderemos a la brevedad sus consultas o pedidos
                            </small>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col">
                            <button type="button" className="btn btn-enviar btn-block my-2">Enviar</button>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
