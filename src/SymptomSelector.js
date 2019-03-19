import React from 'react';
import { Button } from 'semantic-ui-react'

const SymptomSelector = ({bodyPart, symptoms, symptomClick}) => {

    return (
        <div>
            {symptoms.map(symp => {
                return <Button key={symp.id} onClick={(e) => symptomClick(e, symp)} color='teal'>{symp.name}</Button> 
            })}
        </div>

    )
}

export default SymptomSelector