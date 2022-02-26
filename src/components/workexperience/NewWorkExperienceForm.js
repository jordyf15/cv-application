import React, { useState } from 'react';
import TextArea from '../inputs/TextArea';
import TextInput from '../inputs/TextInput';
import uniqid from 'uniqid';

const NewWorkExperienceForm = ({addWork, removeForm}) => {
    const [id] = useState(uniqid());
    const [companyName, setCompanyName] = useState('');
    const [city, setCity] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [position, setPosition] = useState('');
    const [description, setDescription] = useState('');

    const changeCompanyName = ({target}) => {
        setCompanyName(target.value);
    }

    const changeCity = ({target}) => {
        setCity(target.value);
    }

    const changeFrom = ({target}) => {
        setFrom(target.value);
    }

    const changeTo = ({target}) => {
        setTo(target.value);
    }

    const changePosition = ({target}) => {
        setPosition(target.value);
    }

    const changeDescription = ({target}) => {
        setDescription(target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const work = {
            id,
            companyName,
            city,
            from,
            to,
            position,
            description
        }
        addWork(work);
    }

    return <form id='new-work-form' onSubmit={onSubmit}>
        <div className='new-work-input-container'>
            <label htmlFor='new-work-company-name' className='new-work-input-label' id='new-work-company-name-label'>Company Name</label>
            <TextInput handleOnChange={changeCompanyName} className='new-work-input' value={companyName} placeholder='Company Name' id='new-work-company-name'/>
        </div>
        <div className='new-work-input-container'>
            <label className='new-work-input-label' htmlFor='new-work-city'>City</label>
            <TextInput handleOnChange={changeCity} className='new-work-input' value={city} placeholder="City" id="new-work-city"/>
        </div>
        <div className='new-work-input-container'>
            <label className='new-work-input-label' htmlFor='new-work-from'>From</label>
            <TextInput handleOnChange={changeFrom} className='new-work-input' value={from} placeholder="YYYY" id='new-work-from'/>
        </div>
        <div className='new-work-input-container'>
            <label className='new-work-input-label' htmlFor='new-work-to'>To</label>
            <TextInput handleOnChange={changeTo} className='new-work-input' value={to} placeholder="YYYY - Present" id='new-work-to'/>
        </div>
        <div className='new-work-input-container'>
            <label className='new-work-input-label' htmlFor='new-work-position'>Position</label>
            <TextInput handleOnChange={changePosition} className='new-work-input' value={position} id='new-work-position' placeholder="Position"/>
        </div>
        <div className='new-work-input-container'>
            <label className='new-work-input-label' htmlFor='new-work-description'>Further Descriptions</label>
            <TextArea handleOnChange={changeDescription} className='new-work-input' value={description} id='new-work-description' placeholder="Describe more about your work there"/>
        </div>
        <div id='new-work-btn-container'>
            <button id='cancel-new-work-experience-btn' type="button" onClick={removeForm}>Cancel</button>
            <button id='add-new-work-experience-btn' type="submit">Add Work Experience</button>
        </div>
    </form>
}

export default NewWorkExperienceForm;