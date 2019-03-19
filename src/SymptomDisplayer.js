import React from 'react';
import SymptomChip from './SymptomChip'
import DiagnoseButton from './DiagnoseButton'

const SymptomDisplayer = ({selectedSymptoms, diagnoseClick, symptomDelete}) => {

    return (
        <div className='symptomDisplayer'>
            {selectedSymptoms.length ? (
                selectedSymptoms.map(symptom => {
                    return <SymptomChip 
                        key={symptom.id}
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