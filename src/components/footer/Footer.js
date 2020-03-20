import React, { Component } from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";


import zaweeLogo from '../../assets/icons/zawee-logo.png';
import zaweeImg from '../../assets/icons/zawee.png';

class Footer extends Component {
    render ()  {
            
        return (

            <>
            <section className="footer-container">
                <div className="inner-footer">
                    <div className="logo-zawee">
                        <img className="img_zawee" 
                        src={zaweeImg}
                        height='30%'
                        width='35%'
                        />
                    </div>
                    <div className="icon-insta"><FontAwesomeIcon icon={faInstagramSquare} /></div>
                    <div className="icon-face"><FontAwesomeIcon icon={faFacebook} /></div>
                    <div className="icon-phone"> <FontAwesomeIcon icon={faPhoneAlt} />
                        <p>(81)99999-9999</p>
                    </div>
                    <div className="icon-map"><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
                    <div className="icon-mail"><FontAwesomeIcon icon={faEnvelope} /></div>
                   
                </div>
                <div className='final-footer'>
                    <p>Feito com ❤️ por nós</p>
                </div>
            </section>
            </>

        )}}



    export default Footer;