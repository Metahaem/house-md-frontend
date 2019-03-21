import React from 'react';
import { Icon, Label } from 'semantic-ui-react'
import Legs from './Images/Legs.png'
import Head from './Images/Head.png'
import Arms from './Images/Arms.png'
import Pelvis from './Images/Pelvis.png'
import Stomach from './Images/Stomach.png'
import Chest from './Images/Chest.png'

const getImage = (category) => {
  if (category==="Head") {
      return Head
  }
  else if (category==="Pelvis") {
      return Pelvis
  }
  else if (category==="Legs") {
      return Legs
  }
  else if (category==="Arms") {
      return Arms
  }
  else if (category==="Chest") {
      return Chest
  }
  else if (category==="Stomach") {
      return Stomach
  }

}


const SymptomChip = (props) => {
  // const { symptomDelete, symptom} = props;
  return (
    <div>
    <Label as='a'>
      <img src='https://react.semantic-ui.com/images/avatar/small/ade.jpg' />
      {/* {props.symptom.name} */}
      hi
      <Icon name='delete' onClick={(e) => props.symptomDelete(e, props.symptom)} />
    </Label>
    </div>
    )
}

export default SymptomChip

