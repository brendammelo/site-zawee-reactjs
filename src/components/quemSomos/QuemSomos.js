import React from 'react';
import './quemSomos.css';
import imgQuemSomos from '../../assets/icons/quem-somos.png';

const QuemSomos = () => {
    return (
        <div className="o-que-fazemos-container">
            <div className="title_quem_somos"><h2>Quem é a Zawee</h2></div>
            <div className="content" id="to-scroll">
                <div className="texto_quem_somos"><h3>Somos um grupo de alunos da UFRPE, 
                                    buscando mudar a forma como pequenas e 
                                    médias empresas, são vistas online</h3></div>
                <div className="imagem_quem_somos"> 
                    <img className="icone_quemSomos" 
                        src={imgQuemSomos} 
                        alt="desenvolvimento multi plataforma"
                        height="80%"
                    />
                </div>
            </div>
            <div className="button">
                <button>Contate-nos</button>
            </div>
        </div>
    )
}

export default QuemSomos

