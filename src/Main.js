import React from 'react';
import DiagnosesDisplayer from './DiagnosesDisplayer'
import BodyImage from './BodyImage'

const Main = ({diagnoses, diagnosisScreenToggle, currentBodyPart, bodyClick}) => {
    return (
        <div className='Main'>
            {diagnosisScreenToggle ? 
                <DiagnosesDisplayer diagnoses={diagnoses} />
            :
                <BodyImage 
                    currentBodyPart={currentBodyPart}
                    bodyClick={bodyClick}
                /> 
            }
        </div>
    )
}

export default Main