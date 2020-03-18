import './diferencial.css';
import React, { Component } from 'react';

import img1 from '../../assets/icons/prototipo.png';
import img2 from '../../assets/icons/suporte.png';
import img3 from '../../assets/icons/qualidade.png';


class DiferencialComponent extends Component {
    render ()  {
            
        return (

            <>
            <section className="section_diferencial">

                <div className="container_box">
                    <h2 className="title_diferencial">Nosso Diferencial</h2>
                    <div className="container-diferencial">

                        <div className="box_diferencial1">
                            <img className="img_diferencial1" src={img1}/>
                            <p className="texto_diferencial1">blabla</p>
                        
                        </div>

                        <div className="box_diferencial2">
                            <img className="img_diferencial2" src={img2}/>
                            <p className="texto_diferencial2">blabla</p>
                        
                        </div>

                        <div className="box_diferencial3">
                            <img className="img_diferencial3" src={img3}/>
                            <p className="texto_diferencial3">blabla</p>
                        
                        </div>
                    </div>
                </div>




            </section>
            </>

        )}}



    export default DiferencialComponent;