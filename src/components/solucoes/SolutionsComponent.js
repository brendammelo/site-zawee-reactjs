import React, { Component } from 'react';
import './solutionsComponent.css';
import img from '../../assets/imgs/prog.jpg';

class SolutionsComponent extends Component {
    render ()  {
        
        return (
            <div className="container-solutions" style={{backgroundImage: `url(${img})`}}>
                
                <div className="container-cover" >
                <h2>Nossas Soluções</h2>
                    <div className="container-box">
                        
                        <div className="container-inner-solutions">
                            <div className="img-1"></div>
                            <div className="img-2"></div>
                            <div className="img-3"></div>
                        </div>
                        </div>
                
                        </div>
            </div>


        );
    }
    }

    export default SolutionsComponent;