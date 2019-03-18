import React from 'react';


const DiagnosesDisplayer = ({diagnoses}) => {
    return (
        <div>
            {diagnoses.length ? (
                diagnoses.map(symptom => {
                    return <p>symptom.name</p>
                })
            )        
            :
                <h2>No diagnoses</h2>
            }
        </div>

    )
}

export default DiagnosesDisplayer