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
  else if (category==="Legs" || category==="Limbs") {
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
  const { symptomDelete, symptom, location} = props;
  return (
    <div>
    <Label image size='small' color='teal'>
        <img avatar className='Icon' src={getImage(symptom.category)} />
      {symptom.name}
      {location==='navbar' ? <Icon name='delete' onClick={(e) => symptomDelete(e, symptom.id)} /> : null}
    </Label>
    </div>
    )
}

export default SymptomChip

