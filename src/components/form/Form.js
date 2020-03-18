import React, { Component } from 'react';
import './form.css';

import img_contato from '../../assets/icons/contato.png';

class Form extends Component {
    render ()  {
            
        return (

            <>
            <section className="section_form">
                <h2 className="title_form">Vem falar com a gente!</h2>
                <div className="container_form">
                    <div className="container_form"></div>
                    <img className="img_contato" src={img_contato}/>
                    <div className="button_form">
                        <button>Enviar</button>
                    </div>
                </div>
            </section>
            </>

        )}}



    export default Form;