import React from 'react';
import SymptomSelector from './SymptomSelector'
import photo from './sidebar-background.jpg'

const SideBar = ({bodyPart, symptoms, symptomClick}) => {

    return (
        <div className='Sidebar'>
        {symptoms.length ? 
          <SymptomSelector 
            bodyPart={bodyPart}
            symptoms={symptoms}
            symptomClick={symptomClick}
        />
        : null}
        </div>
    )
}

export default SideBar
