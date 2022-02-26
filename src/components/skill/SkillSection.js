import React, { useState } from 'react';
import NewSkillForm from './NewSkillForm';
import SkillItem from './SkillItem';

const SkillSection = (props) => {
    const [renderForm, setRenderForm] = useState(false);
    const {skills, deleteSkill, editSkill, editMode} = props;
    const displayNewSkillForm = () => {
        setRenderForm(true);
    }

    const closeNewSkillForm = () => {
        setRenderForm(false);
    }

    const addSkill= (skill) => {
        setRenderForm(false);
        props.addSkill(skill);
    }

    return <div id='skill-section'>
        <h2 id='skill-title'>Skills</h2>
        <ul id='skill-list'>
            {skills.map((skill)=><SkillItem key={skill.id} skill={skill}
            deleteSkill={deleteSkill} editSkill={editSkill} editMode={editMode}/>)}
        </ul>
        {editMode?
            renderForm?
            <NewSkillForm removeForm={closeNewSkillForm} addSkill={addSkill}/>:
            <button id='new-skill-button' onClick={displayNewSkillForm}>+ Skill</button>
        :<></>
        }
    </div>
}

export default SkillSection;