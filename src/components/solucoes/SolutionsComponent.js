import React, { Component } from 'react';
import './solutionsComponent.css';
import img_solucoes from '../../assets/imgs/img_solucoes.jpg'

import websites from '../../assets/icons/websites.png';
import redeSociais from '../../assets/icons/redes-sociais.png'
import Seo from '../../assets/icons/seo.png';

class SolutionsComponent extends Component {
render ()  {
        
    return (

        <section className="section_solucoes">
                
            <div className="container-box" >
                
                <h2 className="title_solucoes">Nossas Soluções</h2>
                <div className="container-solutions">
    
                        <div className="box_solucoes1">
                            <img className="img_solutions"
                                src={websites} 
                                alt="desenvolvimento de sites"
                                height="35%"/>
                            <p className="texto_solucoes1">Desenvolvimento de<br></br>
                                            websites</p>
                        </div>
                        <div className="box_solucoes2">
                            <img className="img_solutions"
                                src={redeSociais} 
                                alt="gerenciamento de redes sociais"
                                height="35%"/>
                            <p className="texto_solucoes2">Criação e gerenciamento <br></br>
                                de redes sociais</p>
                        </div>
                        <div className="box_solucoes3">
                            <img className="img_solutions_3"
                                src={Seo} 
                                alt="seo e google ads"
                                height="35%"/>
                            <p className="texto_solucoes3">Google Ads e SEO</p>
                        </div>
                </div>
            </div>
        </section>
                

    );
}

}

export default SolutionsComponent;