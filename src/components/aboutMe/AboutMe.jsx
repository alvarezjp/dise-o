import React from 'react';
import Text from './Text';
import "./style.css"
import Photography from './Photography';

function AboutMe() {
    return (
        <section className='aboutMe' id='About Me'>
            <Text/>
            <Photography/>
        </section>
    );
}

export default AboutMe;