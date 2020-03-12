
import './headerComponent.css';
import React from 'react';

const HeaderComponent = () => {
    return (

        <section className = "section_header">
            <div className = "menu_header"></div>
            <div className = "teste_header">
                <div className = "hero_header">
                    <h1 className = "titulo_header">Zawee</h1>
                    <h2 className = "legenda_header">Soluções digitais para o seu negócio</h2>
                </div>
                <div className="link_hero" href="a">
                    <p className="scroll_down"> Scroll Down </p>
                    <a className="ancora_hero" href="a">
                        <img className="icone_hero"   />
                    </a>
                </div>
            </div>
        </section>



    )
}


export default HeaderComponent


