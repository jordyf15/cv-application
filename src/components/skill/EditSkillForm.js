import React, { useState } from 'react';
import TextInput from '../inputs/TextInput';

const EditSkillForm = ({skill, editSkill, closeForm}) => {
    const [id] = useState(skill.id);
    const [skillName, setSkillName] = useState(skill.skillName);
    
    const changeSkillName = ({target}) => {
        setSkillName(target.value);
    }

    const onSubmitHandle = (e) => {
        e.preventDefault();
        const skill = {
            id,
            skillName,
        }
        editSkill(skill);
        closeForm();
    }

    return <form onSubmit={onSubmitHandle}>
         <div className='edit-skill-input-container'>
            <label className='edit-skill-input-label' htmlFor={`edit-${id}-skill`}>Skill</label>
            <TextInput handleOnChange={changeSkillName} value={skillName}
            placeholder='Skill' className='edit-skill-input' id={`edit-${id}-skill`}/>
        </div>
        <div className='edit-skill-btn-container'>
            <button className='cancel-edit-skill-btn' onClick={closeForm} type='button'>Cancel</button>
            <button className='save-edit-skill-btn' type='submit'>Save</button>
        </div>
    </form>
}

export default EditSkillForm;