import React from 'react';
import SymptomChip from './SymptomChip'
import DiagnoseButton from './DiagnoseButton'
import { Grid } from 'semantic-ui-react'



const SymptomDisplayer = ({selectedSymptoms, diagnoseClick, symptomDelete, showingDiagnoses, backToSymptomSelect}) => {
    
    const symptomChipArray = selectedSymptoms.map(symptom => {
        return <SymptomChip 
            key={symptom.id}
            symptom={symptom} 
            symptomDelete={symptomDelete}
            location="navbar"
        />
        })
        
    const symptomGrid = (
        <Grid style={{padding: "10px"}}>
            <Grid.Row centered columns={4}>
              <Grid.Column>
                <Grid verticalAlign='middle' columns={4} centered>
                    <DiagnoseButton backToSymptomSelect={backToSymptomSelect} showingDiagnoses={showingDiagnoses} diagnoseClick={diagnoseClick}/>  
                </Grid>        
              </Grid.Column>
              <Grid.Column>
                    {symptomChipArray.slice(0,5)}
              </Grid.Column>
              <Grid.Column>
                    {symptomChipArray.slice(5,10)}
              </Grid.Column>
              <Grid.Column>
                {symptomChipArray.slice(9, 14)}
              </Grid.Column>
            </Grid.Row>
        </Grid>
    )

    return (
        <div className='symptomDisplayer'>
            {selectedSymptoms.length ? (
                <div>
                   {symptomGrid}
                </div>
            )        
            :
                <div style={{padding: "50px"}}> <h2>Please select your symptoms</h2> </div>
            }
        </div>

    )
}

export default SymptomDisplayer