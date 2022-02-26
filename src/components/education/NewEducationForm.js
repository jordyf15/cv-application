import React, { useState } from 'react';
import uniqid from 'uniqid';
import TextArea from '../inputs/TextArea';
import TextInput from '../inputs/TextInput';

const NewEducationForm = ({addEducation, removeForm}) => {
    const [id, setId] = useState(uniqid());
    const [institutionName, setInstitutionName] = useState('');
    const [city, setCity] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [degree, setDegree] = useState('');
    const [description, setDescription] = useState('');

    const changeInstitutionName = ({target}) =>{
        setInstitutionName(target.value);
    }

    const changeCity = ({target}) =>{
        setCity(target.value);
    }

    const changeFrom = ({target}) =>{
        setFrom(target.value);
    }

    const changeTo = ({target}) =>{
        setTo(target.value);
    }


    const changeDegree = ({target}) => {
        setDegree(target.value);
    }

    const changeDescription = ({target}) => {
        setDescription(target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const education = {
            id,
            institutionName,
            city,
            from,
            to,
            degree,
            description
        }
        addEducation(education);
    }

    return (
        <form id='new-education-form' onSubmit={onSubmit}>
            <div className='new-education-input-container'>
                <label className='new-education-input-label' htmlFor='new-education-institution-name'>Institution Name</label>
                <TextInput handleOnChange={changeInstitutionName} value={institutionName}
                placeholder='Institution Name' className='new-education-input' id='new-education-institution-name'/>
            </div>
            <div className='new-education-input-container'>
                <label className='new-education-input-label' htmlFor='new-education-city'>City</label>
                <TextInput className='new-education-input' handleOnChange={changeCity} value={city} placeholder="City" id='new-education-city'/>
            </div>
            <div className='new-education-input-container'>
                <label className='new-education-input-label' htmlFor='new-education-form'>From</label>
                <TextInput className='new-education-input' handleOnChange={changeFrom} value={from} placeholder="YYYY" id='new-education-form'/>
            </div>
            <div className='new-education-input-container'>
                <label className='new-education-input-label' htmlFor='new-education-to'>To</label>
                <TextInput className='new-education-input' handleOnChange={changeTo} value={to} placeholder="YYYY or Present" id='new-education-to'/>
            </div>
            <div className='new-education-input-container'>
                <label className='new-education-input-label' htmlFor='new-education-degree'>Degree or Course</label>
                <TextInput className='new-education-input' handleOnChange={changeDegree} value={degree} id='new-education-degree' placeholder="Degree or Course"/>
            </div>
            <div className='new-education-input-container'>
                <label className='new-education-input-label' htmlFor='new-education-description'>Further Description</label>
                <TextArea className='new-education-input' handleOnChange={changeDescription} value={description} id='new-education-description' placeholder="Describe more about the course or degree"/>
            </div>
            <div id='new-education-btn-container'>
                <button id='cancel-new-education-btn' type="button" onClick={removeForm}>Cancel</button>
                <button id='add-new-education-btn' type="submit">Add Education</button>
            </div>
        </form>
    )
}

export default NewEducationForm;