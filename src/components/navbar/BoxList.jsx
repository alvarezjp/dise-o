import React from 'react';
import ItemsLi from './ItemsLi';

function BoxList({btnToggle}) {
    return (
        <section className='boxList'>
            <ItemsLi btnToggle={btnToggle}/>
        </section>
    );
}

export default BoxList;