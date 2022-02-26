import React, {useState} from 'react';
import TextArea from '../inputs/TextArea';
import TextInput from '../inputs/TextInput';

const EditWorkExperienceForm = ({work, editWork, closeForm}) => {
    const [id] = useState(work.id);
    const [companyName, setCompanyName] = useState(work.companyName);
    const [city, setCity] = useState(work.city);
    const [from, setFrom] = useState(work.from);
    const [to, setTo] = useState(work.to);
    const [position, setPosition] = useState(work.position);
    const [description, setDescription] = useState(work.description);

    const changeCompanyName = ({target}) =>{
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

    const onSubmitHandle = (e) => {
        e.preventDefault();
        const work={
            id,
            companyName,
            city,
            from,
            to,
            position,
            description
        };
        editWork(work);
        closeForm();
    }

    return <form onSubmit={onSubmitHandle}>
        <div className='edit-work-input-container'>
            <label className='edit-work-input-label' htmlFor={`edit-${id}-work-company-name`}>Company Name</label>
            <TextInput className='edit-work-input' handleOnChange={changeCompanyName} value={companyName} 
            placeholder='Company Name' id={`edit-${id}-work-company-name`}/>
        </div>
        <div className='edit-work-input-container'>
            <label className='edit-work-input-label' htmlFor={`edit-${id}-work-city`}>City</label>
            <TextInput className='edit-work-input' handleOnChange={changeCity} 
            value={city} placeholder="City" id={`edit-${id}-work-city`}/>
        </div>
        <div className='edit-work-input-container'>
            <label className='edit-work-input-label' htmlFor={`edit-${id}-work-from`}>From</label>
            <TextInput className='edit-work-input' handleOnChange={changeFrom} value={from} placeholder="YYYY" id={`edit-${id}-work-from`}/>
        </div>
        <div className='edit-work-input-container'>
            <label className='edit-work-input-label' htmlFor={`edit-${id}-work-to`}>To</label>
            <TextInput className='edit-work-input' handleOnChange={changeTo} value={to} placeholder="YYYY - Present" id={`edit-${id}-work-to`}/>
        </div>
        <div className='edit-work-input-container'>
            <label className='edit-work-input-label' htmlFor={`edit-${id}-work-position`}>Position</label>
            <TextInput className='edit-work-input' handleOnChange={changePosition}
            value={position} id={`edit-${id}-work-position`} placeholder="Position"/>
        </div>
        <div className='edit-work-input-container'>
            <label className='edit-work-input-label' htmlFor={`edit-${id}-work-description`}>Further Descriptions</label>
            <TextArea className='edit-work-input' handleOnChange={changeDescription} value={description} id={`edit-${id}-work-description`}
            placeholder="Describe more about your work there"/>
        </div>
        <div className='edit-work-btn-container'>
            <button className='cancel-edit-work-experience-btn' onClick={closeForm} type='button'>Cancel</button>
            <button className='save-edit-work-experience-btn' type="submit">Save</button>
        </div>
    </form>
}

export default EditWorkExperienceForm;