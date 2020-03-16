import React, { Component } from 'react';
import './solutionsComponent.css';
import img_solucoes from '../../assets/imgs/img_solucoes.jpg'

class SolutionsComponent extends Component {
render ()  {
        
    return (

        <section className="section_solucoes">
                
            <h2 className="title_solucoes">Nossas Soluções</h2>
            <div className="container-box">
                
                <div className="container-solutions" style={{backgroundImage: `url(${img_solucoes})`}}></div>
    
                    <div className="container-inner-solutions">
                        <div className="img-1"></div>
                        <div className="img-2"></div>
                        <div className="img-3"></div>
                    </div>
                </div>
        </section>
                

    );
}

}

export default SolutionsComponent;