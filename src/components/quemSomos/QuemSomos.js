import React from 'react';
import './quemSomos.css';
import imgQuemSomos from '../../assets/icons/quem-somos.png';
import { Link, animateScroll as scroll } from "react-scroll";

const QuemSomos = () => {
    return (
        <div className="o-que-fazemos-container">
            <h2 className="title_quem_somos">Quem é a Zawee</h2>
            <div className="content" id="to-scroll">
                <h3 className="texto_quem_somos">Somos um grupo de alunos da UFRPE 
                                    buscando mudar a forma como pequenas e 
                                    médias empresas são vistas online</h3>
                <div className="imagem_quem_somos"> 
                    <img className="icone_quemSomos" 
                        src={imgQuemSomos} 
                        alt="desenvolvimento multi plataforma"
                        height="80%"
                    />
                </div>
            </div>
            <Link
                activeClass="active"
                to="section_form"
                spy={true}
                smooth={true}
                offset={1}
                duration={550}
            >
            <div className="button">
                
                <button>Contate-nos</button>
                
            </div>
            </Link>
        </div>
    )
}

export default QuemSomos