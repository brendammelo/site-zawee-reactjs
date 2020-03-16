import React, { Component } from 'react';
import './solutionsComponent.css';
import img_solucoes from '../../assets/imgs/img_solucoes.jpg';

class SolutionsComponent extends Component {
    render ()  {
        
        return (
            <div className="container-solutions" style={{backgroundImage: `url(${img_solucoes})`}}>
                
                
                <h2>Nossas Soluções</h2>
                    <div className="container-box">
                        
                        <div className="container-inner-solutions">
                            <div className="img-1"></div>
                            <div className="img-2"></div>
                            <div className="img-3"></div>
                        </div>
                        </div>
                
                        
            </div>


        );
    }
    }

    export default SolutionsComponent;