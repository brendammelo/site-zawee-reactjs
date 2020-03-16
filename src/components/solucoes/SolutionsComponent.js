import React, { Component } from 'react';
import './solutionsComponent.css';
import img_solucoes from '../../assets/imgs/img_solucoes.jpg'

class SolutionsComponent extends Component {
render ()  {
        
    return (

        <section className="section_solucoes">
                
            <div className="container-box" >
                
                <h2 className="title_solucoes">Nossas Soluções</h2>
                <div className="container-solutions">
    
                        <div className="box_solucoes1">
                            <img></img>
                            <p className="texto_solucoes1"></p>
                        </div>
                        <div className="img-box_solucoes2">
                            <img></img>
                            <p className="texto_solucoes1"></p>
                        </div>
                        <div className="box_solucoes3">
                            <img></img>
                            <p className="texto_solucoes1"></p>
                        </div>
                </div>
            </div>
        </section>
                

    );
}

}

export default SolutionsComponent;