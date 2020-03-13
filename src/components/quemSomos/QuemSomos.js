import React from 'react';
import './quemSomos.css';
import imgQuemSomos from '../../assets/icons/quem-somos.png';

const QuemSomos = () => {
    return (
        <div className="container">
            <div className="title"><h2>Quem é a Zawee</h2></div>
            <div className="content">
                <div className="texto"><h3>Somos um grupo de alunos da UFRPE, 
                                    buscando mudar a forma como pequenas e 
                                    médias empresas, são vistas online</h3></div>
                <div className="imagem"> 
                    <img className="icone_quemSomos" 
                        src={imgQuemSomos} 
                        alt="desenvolvimento multi plataforma"
                        height="50%"
                    />
                </div>
            </div>
            <div className="button"></div>
        </div>
    )
}

export default QuemSomos

