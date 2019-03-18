import React from 'react';
import SymptomSelecter from './SymptomSelecter'
import photo from './sidebar-background.jpg'

const SideBar = ({bodyPart, symptoms, symptomClick}) => {

    return (
        <div className='Sidebar'>
          <SymptomSelecter 
            bodyPart={bodyPart}
            symptoms={symptoms}
            symptomClick={symptomClick}
        />
        </div>
    )
}

export default SideBar
