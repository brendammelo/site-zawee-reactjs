import './headerComponent.css';
import React, { Component } from 'react';
import icone from '../../assets/imgs/icone_play.png';


import { Link, animateScroll as scroll } from "react-scroll";


class HeaderComponent extends Component {
render ()  {
    
    return (

        <section className = "section_header">
            


            <div className = "menu_header">
                <nav className="menu">
                    <ul className="menu_list">
                        <li className="menu_list_item">
                            <Link
                                activeClass="active"
                                to="section_header"
                                spy={true}
                                smooth={true}
                                offset={1}
                                duration={550}
                            >
                                <a className="menu_list_link" href="#home"> Home </a>
                            </Link>
                        </li>
                        <li className="menu_list_item">
                            <Link
                                activeClass="active"
                                to="o-que-fazemos-container"
                                spy={true}
                                smooth={true}
                                offset={1}
                                duration={550}
                            >
                                <a className="menu_list_link" href="#about"> Sobre nós </a>
                            </Link>
                        </li>
                        <li className="menu_list_item">
                            <Link
                                activeClass="active"
                                to="section_solucoes"
                                spy={true}
                                smooth={true}
                                offset={1}
                                duration={550}
                            >
                                <a className="menu_list_link" href="#whoDoes"> Soluções </a>
                            </Link>
                        </li>
                        <li className="menu_list_item">
                            <Link
                                activeClass="active"
                                to="section_form"
                                spy={true}
                                smooth={true}
                                offset={1}
                                duration={550}
                            >
                                <a className="menu_list_link" href="#impactedWomen"> Contato </a>
                            </Link>
                        </li>
                    </ul>
                </nav>      
    
            </div>




            <div className = "teste_header">
                <div className = "hero_header">
                    <h1 className = "titulo_header">Zawee</h1>
                    <h2 className = "legenda_header">Soluções digitais para o seu negócio</h2>
                </div>
                
                <div className="link_hero">
                    <p className="scroll_down"> Saiba mais </p>
                    <a className="ancora_hero" >
                        <Link
                            activeClass="active"
                            to="o-que-fazemos-container"
                            spy={true}
                            smooth={true}
                            offset={1}
                            duration={500}
                        >
                        <img className="icone_hero"  src={icone} alt="teste" />
                        </Link>
                    </a>
                </div>
            </div>
        </section>



    );
}

}

export default HeaderComponent;


