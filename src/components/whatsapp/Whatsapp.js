import React, { Component } from "react";
import './whatsapp.css';
import wwp from '../../assets/icons/wwp-logo.png';

class WhatsApp extends Component {
    state = {};

    render() {
        return (
            <a href="https://wa.me/5581996347726" target="_blank">
                <div className="rounded-circle whatsapp-button">
                    <img src={wwp} alt="WhatsApp" className="whatsapp-logo"/>
                </div>
            </a>
        );
    }
}

export default WhatsApp;