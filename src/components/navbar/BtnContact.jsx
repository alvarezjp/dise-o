import React from 'react';
import { useMediaQuery } from 'react-responsive';
// import "./styled.css"

function BtnContact() {
    const phone = useMediaQuery({maxWidth: 431});
    return (
        <>
        { phone ? (
            <img src="./icons/mail.svg" alt="Icons mail" className='mailIcon'/>
        ): (
            // <button className='btnContact'>Contact me</button>
            <></>
            
            
         
        )
    }
    </>
        
    );
}

export default BtnContact;