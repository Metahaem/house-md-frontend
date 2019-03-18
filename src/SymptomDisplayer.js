import React from 'react';
import SymptomChip from './SymptomChip'
import DiagnoseButton from './DiagnoseButton'

const SymptomDisplayer = ({symptoms, diagnoseClick, symptomDelete}) => {

    return (
        <div className='symptomDisplayer'>
            {symptoms.length ? (
                symptoms.map(symptom => {
                    return <SymptomChip 
                        symptom={symptom} 
                        symptomDelete={symptomDelete}
                    />
                })
            )        
            :
                <h2>Please select your symptoms</h2>
            }
        </div>

    )
}

export default SymptomDisplayer