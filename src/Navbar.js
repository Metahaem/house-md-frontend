import React from 'react';
import Logo from './Logo'
import SymptomDisplayer from './SymptomDisplayer'


const Navbar = ({selectedSymptoms, diagnoseClick, symptomDelete}) => {


    return (
        <nav>
            <Logo />
            <SymptomDisplayer 
                selectedSymptoms={selectedSymptoms}
                diagnoseClick={diagnoseClick}
                symptomDelete={symptomDelete}
            />
        </nav>
    )
}

export default Navbar