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

            <div className="footer">
                <div className="container-footer">
                    <div className="container-logo">
                        <img className="img_zawee" 
                            src={zaweeImg}
                            height='60%'
                            width='40%'
                        />
                        <div className="icons">
                        <a href="default.asp">
                            <FontAwesomeIcon icon={faInstagramSquare} />
                        </a>
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                    </div>

                    <div className="container-number">
                        <div className="phone">
                            <FontAwesomeIcon icon={faPhoneAlt} />
                            <p>(81)99999-9999</p>
                        </div>
                        <div className="address">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <p>Rua Dom Manuel de Medeiros, s/n - Dois Irmãos, 
                                Recife - PE, 52171-900</p>
                            
                        </div>
                    </div>

                </div>
                <div className='final-footer'>
                    <p>Feito com ❤️ por nós</p>
                </div>

            </div>

        )}}



    export default Footer;