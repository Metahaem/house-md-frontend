import React from 'react';
import Logo from './Logo'
import SymptomDisplayer from './SymptomDisplayer'


const Navbar = ({selectedSymptoms, diagnoseClick, symptomDelete, backToSymptomSelect, showingDiagnoses}) => {


    return (
        <nav>
            <Logo />
            <SymptomDisplayer 
                selectedSymptoms={selectedSymptoms}
                diagnoseClick={diagnoseClick}
                symptomDelete={symptomDelete}
                backToSymptomSelect={backToSymptomSelect}
                showingDiagnoses={showingDiagnoses}
            />
        </nav>
    )
}

export default Navbar