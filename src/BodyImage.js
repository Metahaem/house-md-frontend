import React from 'react';
import body from './body.jpg'
import { Popup, Button } from 'semantic-ui-react'
import Target from './Target';


const BodyImage = ({currentBodyPart, bodyClick}) => {

    return (
        <div>
            <img className='bodyOutline' src={body} />
            <div className='GeneralTarget' onClick={(e) => bodyClick(e, "all")}><Button circular size='medium' color='teal'>See General Symptoms</Button></div>
            <div className='ArmsTarget' onClick={(e) => bodyClick(e, "arms")}> <Popup trigger={<Target/> } content="Arms"/> </div>
            <div className='HeadTarget' onClick={(e) => bodyClick(e, "head")}> <Popup trigger={<Target/> } content="Head"/> </div>
            <div className='ChestTarget' onClick={(e) => bodyClick(e, "chest")}> <Target/> </div>
            <div className='StomachTarget' onClick={(e) => bodyClick(e, "stomach")}> <Target/> </div>
            <div className='PelvisTarget' onClick={(e) => bodyClick(e, "pelvis")}> <Target/> </div>
            <div className='LegsTarget' onClick={(e) => bodyClick(e, "legs")}> <Target/> </div>
        </div>

    )
}

export default BodyImage
