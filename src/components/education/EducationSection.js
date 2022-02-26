import React, {useState} from 'react';
import EducationItem from './EducationItem';
import NewEducationForm from './NewEducationForm';

const EducationSection = (props)=>{
    const [renderForm, setRenderForm] = useState(false);

    const displayNewEducationForm = () =>{
        setRenderForm(true);
    }

    const closeNewEducationForm = () =>{
        setRenderForm(false);
    }

    const addEducation = (education) =>{
        setRenderForm(false);
        props.addEducation(education)
    }

    return(
        <div id='education-section'>
            <h2 id='education-title'>Education</h2>
            <ul id='education-list'>
                {props.educations.map((education)=><EducationItem key={education.id} education={education}
                deleteEducation={props.deleteEducation} editEducation={props.editEducation} editMode={props.editMode}/>)}
            </ul>
            {
                props.editMode?
                    renderForm?
                    <NewEducationForm removeForm={closeNewEducationForm} addEducation={addEducation}/>:
                    <button id='new-education-button' onClick={displayNewEducationForm}>+ Education</button>
                :<></>
            }
        </div>
    );
}

export default EducationSection;