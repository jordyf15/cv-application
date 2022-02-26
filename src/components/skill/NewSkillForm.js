import React, {useState} from 'react';
import uniqid from 'uniqid';
import TextInput from '../inputs/TextInput';

const NewSkillForm = ({addSkill, removeForm}) => {
    const [id] = useState(uniqid());
    const [skillName, setSkillName] = useState('');

    const changeSkill = ({target}) => {
        setSkillName(target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const skill = {
            id,
            skillName,
        }
        addSkill(skill);
    }

    return  <form id='new-skill-form' onSubmit={onSubmit}>
        <div className='new-skill-input-container'>
            <label className='new-skill-input-label' htmlFor='new-skill-name'>Skill</label>
            <TextInput handleOnChange={changeSkill} className='new-skill-input' value={skillName} 
            placeholder='Skill' id='new-skill-name'/>
        </div>
        <div id='new-skill-btn-container'>
            <button id='cancel-new-skill-btn' type='button' onClick={removeForm}>Cancel</button>
            <button id='add-new-skill-btn' type='submit'>Add Skill</button>
        </div>
    </form>
};

export default NewSkillForm;