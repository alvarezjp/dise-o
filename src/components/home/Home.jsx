import React from 'react';
import "./style.css"
import Text from "./Text"
import CoffeIcon from './CoffeIcon';
import { useEffect } from 'react';

function Home() {
    return (
        <section className='home' id='esto'>
            <Text/>
            <CoffeIcon/>
        </section>
    );
}

export default Home;