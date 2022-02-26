import React, { useState } from 'react';
import TextArea from '../inputs/TextArea';
import TextInput from '../inputs/TextInput';

const EditEducationForm = ({education, editEducation, closeForm}) =>{
    const [id, setId] = useState(education.id);
    const [institutionName, setInstitutionName] = useState(education.institutionName);
    const [city, setCity] = useState(education.city);
    const [from, setFrom] = useState(education.from);
    const [to, setTo] = useState(education.to);
    const [degree, setDegree] = useState(education.degree);
    const [description, setDescription] = useState(education.description);

    const changeInstitutionName= ({target})=>{
        setInstitutionName(target.value);
    }

    const changeCity = ({target})=>{
        setCity(target.value);
    }

    const changeFrom = ({target})=>{
        setFrom(target.value);
    }

    const changeTo = ({target})=>{
        setTo(target.value);
    }

    const changeDegree = ({target})=>{
        setDegree(target.value);
    }

    const changeDescription = ({target})=>{
        setDescription(target.value);
    }
    const onSubmitHandle =(e)=>{
        e.preventDefault();
        const education = {
            id,
            institutionName,
            city,
            from,
            to,
            degree,
            description
        };
        editEducation(education);
        closeForm();
    };

    return(
        <form onSubmit={onSubmitHandle}>
            <div className='edit-education-input-container'>
                <label className='edit-education-input-label' htmlFor={`edit-${id}-education-institution-name`}>Institution Name</label>
                <TextInput className='edit-education-input' handleOnChange={changeInstitutionName} value={institutionName} placeholder="Institution Name" id={`edit-${id}-education-institution-name`}/>
            </div>
            <div className='edit-education-input-container'>
                <label className='edit-education-input-label' htmlFor={`edit-${id}-education-city`}>City</label>
                <TextInput className='edit-education-input' handleOnChange={changeCity} value={city} 
                placeholder="City" id={`edit-${id}-education-city`}/>
            </div>
            <div className='edit-education-input-container'>
                <label className='edit-education-input-label' htmlFor={`edit-${id}-education-from`}>From</label>
                <TextInput className='edit-education-input' handleOnChange={changeFrom} value={from}
                id={`edit-${id}-education-from`} placeholder="YYYY"/>
            </div>
            <div className='edit-education-input-container'>
                <label className='edit-education-input-label' htmlFor={`edit-${id}-education-to`}>To</label>
                <TextInput className='edit-education-input' handleOnChange={changeTo} value={to}
                id={`edit-${id}-education-to`} placeholder="YYYY or Present"/>
            </div>
            <div className='edit-education-input-container'>
                <label className='edit-education-input-label' htmlFor={`edit-${id}-education-degree`}>Degree or Course</label>
                <TextInput className='edit-education-input' handleOnChange={changeDegree} value={degree}
                id={`edit-${id}-education-degree`} placeholder="Degree or Course"/>
            </div>
            <div className='edit-education-input-container'>
                <label className='edit-education-input-label' htmlFor={`edit-${id}-education-description`}>Further Descriptions</label>
                <TextArea className='edit-education-input' handleOnChange={changeDescription} value={description} id={`edit-${id}-education-description`}
                placeholder="Describe more about the course or degree"/>
            </div>
            <div className='edit-education-btn-container'>
                <button className='cancel-edit-education-btn' type="button" onClick={closeForm}>Cancel</button>
                <button className='save-edit-education-btn' type="submit">Save</button>
            </div>
        </form>
    );
}

export default EditEducationForm;