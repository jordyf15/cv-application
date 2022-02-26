import React, { useState } from 'react';
import EditSkillForm from './EditSkillForm';

const SkillItem = ({skill, deleteSkill, editSkill, editMode}) => {
    const [editable, setEditable] = useState(false);
    const {id, skillName} = skill;

    const displayEditForm = () => {
        setEditable(true);
    }

    const closeEditForm = () => {
        setEditable(false);
    }

    return  <li className='skill-list-items'>
        {editMode?<>
            {editable?
            <EditSkillForm closeForm={closeEditForm} editSkill={editSkill} skill={skill}/>:
            <div className='skill-list-item-info-container'>
                <div className='skill-list-item-info-container'>
                    <p className='skill-list-item-skill-name'>{skillName}</p>
                </div>
                <div className='skill-list-item-btn-container'>
                    <button className='skill-list-item-btn' onClick={displayEditForm}>Edit</button>
                    <button className='skill-list-item-btn' onClick={()=>deleteSkill(id)}>Delete</button>
                </div>
        </div>}
        </>
        :<div className='preview-skill-list-item-container'>
            <p className='skill-list-item-skill-name'>{skillName}</p>
        </div>
        }
    </li>
}

export default SkillItem;