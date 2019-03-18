import React from 'react';
import body from './body.jpg'
import DiagnoseButton from './DiagnoseButton'
import Target from './Target';


const BodyImage = ({currentBodyPart, bodyClick}) => {

    return (
        <div>
            <img className='bodyOutline' src={body} />
            <div className='HandsTarget' onClick={(e) => bodyClick(e, "hands")}><Target/> </div>
            <div className='HeadTarget' onClick={(e) => bodyClick(e, "head")}> <Target/> </div>
            <div className='ChestTarget' onClick={(e) => bodyClick(e, "chest")}> <Target/> </div>
            <div className='StomachTarget' onClick={(e) => bodyClick(e, "stomach")}> <Target/> </div>
            <div className='PelvisTarget' onClick={(e) => bodyClick(e, "pelvis")}> <Target/> </div>
            <div className='LegsTarget' onClick={(e) => bodyClick(e, "legs")}> <Target/> </div>
        </div>

    )
}

export default BodyImage
