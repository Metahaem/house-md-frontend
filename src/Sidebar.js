import React from 'react';
import SymptomSelector from './SymptomSelector'
import photo from './sidebar-background.jpg'
import IssueDisplayer from './IssueDisplayer'


const displayIssue = (issue, selectedIssueSymptoms) => {
    return issue ? 
        <IssueDisplayer issue={issue} symptoms={selectedIssueSymptoms} /> : null
}
const SideBar = ({bodyPart, symptoms, symptomClick, selectedIssue, selectedIssueSymptoms}) => {
    
    return (
        <div className='Sidebar'>
        {symptoms.length ? 
          <SymptomSelector 
            bodyPart={bodyPart}
            symptoms={symptoms}
            symptomClick={symptomClick}
        />
        : displayIssue(selectedIssue, selectedIssueSymptoms)}
        </div>
    )
}

export default SideBar
