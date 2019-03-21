import React from 'react';
import DiagnosesDisplayer from './DiagnosesDisplayer'
import BodyImage from './BodyImage'

const Main = ({diagnoses, currentBodyPart, bodyClick, selectedSymptoms, issueClick}) => {
    return (
        <div className='Main'>
            {diagnoses.length ? 
                <DiagnosesDisplayer diagnoses={diagnoses} selectedSymptoms={selectedSymptoms} issueClick={issueClick}/>
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