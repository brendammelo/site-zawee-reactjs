import React, { Component } from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram} from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";


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
                        <a className="icon-1" href="default.asp">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a className="icon-2" href="default.asp">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a className="icon-3" href="default.asp">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
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