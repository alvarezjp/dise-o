import React from 'react';
import "./style.css"
import Text from "./Text"
import CoffeIcon from './CoffeIcon';
import { useEffect } from 'react';

function Home() {
    useEffect(() => {
        // Código para aplicar estilos dinámicos aquí
        const altura = window.innerHeight;
        // const calculo = altura * 0.99;
        // const elemento = document.getElementById("esto");
        // elemento.style.height = `${calculo}px`
    }, []);
    return (
        <section className='home' id='esto'>
            <Text/>
            <CoffeIcon/>
        </section>
    );
}

export default Home;