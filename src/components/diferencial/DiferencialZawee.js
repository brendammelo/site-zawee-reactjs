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
                            <p className="texto_diferencial1">Pagamento só após a prototipação</p>
                            <img className="img_diferencial1" src={img1}/>
                        
                        </div>

                        <div className="box_diferencial2">
                            <p className="texto_diferencial2">Suporte gratuito</p>
                            <img className="img_diferencial2" src={img2}/>
                        </div>

                        <div className="box_diferencial3">
                            <p className="texto_diferencial3">Qualidade com o melhor custo-benefício</p>
                            <img className="img_diferencial3" src={img3}/>
                        
                        </div>
                        
                    </div>
                    <div className="button">
                        <button>Faça seu orçamento</button>
                    </div>
                </div>




            </section>
            </>

        )}}



    export default DiferencialComponent;