import React from 'react';
import Logo from './Logo'
import SymptomDisplayer from './SymptomDisplayer'


const Navbar = ({symptoms, diagnoseClick, symptomDelete}) => {


    return (
        <nav>
            <Logo />
            <SymptomDisplayer 
                symptoms={symptoms}
                diagnoseClick={diagnoseClick}
                symptomDelete={symptomDelete}
            />
        </nav>
    )
}

export default Navbar