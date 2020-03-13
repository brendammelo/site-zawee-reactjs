
import './headerComponent.css';
import React from 'react';
import {icone} from '../../assets/imgs/icone_play.png'

const HeaderComponent = () => {
    return (

        <section className = "section_header">




            <div className = "menu_header">
                <nav className="menu">
                    <ul className="menu_list">
                        <li className="menu_list_item">
                            <a className="menu_list_link" href="#home"> Home </a>
                        </li>
                        <li className="menu_list_item">
                            <a className="menu_list_link" href="#about"> Sobre nós </a>
                        </li>
                        <li className="menu_list_item">
                            <a className="menu_list_link" href="#whoDoes"> Soluções </a>
                        </li>
                        <li className="menu_list_item">
                            <a className="menu_list_link" href="#impactedWomen"> Contato </a>
                        </li>
                    </ul>
                </nav>      
    
            </div>




            <div className = "teste_header">
                <div className = "hero_header">
                    <h1 className = "titulo_header">Zawee oi</h1>
                    <h2 className = "legenda_header">Soluções digitais para o seu negócio</h2>
                </div>
                <div className="link_hero" href="a">
                    <p className="scroll_down"> Scroll Down </p>
                    <a className="ancora_hero" href="a">
                        <img className="icone_hero" src={icone} alt="teste" />
                    </a>
                </div>
            </div>
        </section>



    )
}


export default HeaderComponent


