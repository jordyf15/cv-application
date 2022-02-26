import React, {useState} from 'react';
import NewWorkExperienceForm from './NewWorkExperienceForm';
import WorkExperienceItem from './WorkExperienceItem';

const WorkExperienceSection = (props) => {
    const [renderForm, setRenderForm] = useState(false);

    const displayNewWorkExpForm = () => {
        setRenderForm(true);
    }

    const closeNewWorkExpForm = () => {
        setRenderForm(false);
    }

    const addWork = (work) => {
        setRenderForm(false);
        props.addWork(work);
    }

    const {workExperiences, deleteWork, editWork, editMode} = props;
    return <div id='work-experience-section'>
        <h2 id='work-experience-title'>Work Experiences</h2>
        <ul id='work-experience-list'>
            {workExperiences.map((workExp)=><WorkExperienceItem key={workExp.id} work={workExp} 
            deleteWork={deleteWork} editWork={editWork} editMode={editMode}/>)}
        </ul>
        {editMode?
            renderForm?
            <NewWorkExperienceForm removeForm={closeNewWorkExpForm} addWork={addWork}/>:
            <button id='new-work-experience-button' onClick={displayNewWorkExpForm}>+ Work Experience</button>
        :<></>}
    </div>
}

export default WorkExperienceSection;