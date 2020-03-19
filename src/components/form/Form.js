import React, { Component } from 'react';
import './form.css';
import HubspotForm from 'react-hubspot-form';

import img_contato from '../../assets/icons/contato.png';

class Form extends Component {
    render ()  {
            
        return (

            <>
            <section className="section_form">
                <h2 className="title_form">Vem falar com a gente!</h2>
                <div className="container_formulario">
                    <div className="container_form">
                    <HubspotForm
                        portalId="7337380"
                        formId="cebf6b2a-4702-432f-83ce-b4cddc0b536e"
                        onSubmit={() => console.log('Submit!')}
                        onReady={(form) => console.log('Form ready!')}
                        loading={<div>Loading...</div>}
                    />

                    </div>
                    <div className="box_img_botao">
                        <img className="img_contato" src={img_contato}/>
                        <div className="button_form">
                            <button>Enviar</button>
                        </div>
                    </div>
                </div>
            </section>
            </>

        )}}


    export default Form;