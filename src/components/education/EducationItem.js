import React, { useState } from 'react';
import EditEducationForm from './EditEducationForm';

const EducationItem = ({education, deleteEducation, editEducation, editMode}) =>{
    const {institutionName, city, from, to, degree, description, id} = education;
    const [editable, setEditable] = useState(false);

    const displayEditForm = () =>{
        setEditable(true);
    }
    const closeEditForm = () => {
        setEditable(false);
    }

    return (
        <li className='education-list-items'>
              {
                    editMode?
                    <>
                    {editable?
                        <EditEducationForm closeForm={closeEditForm} editEducation={editEducation} education={education}/>
                        :<div className='education-list-item-container'>
                            <div className='education-list-item-info-container'>
                                <div>
                                    <p className='education-list-item-fromto'>{from} - {to}</p>
                                </div>
                                <div>
                                    <p className='education-list-item-degree'>{degree}</p>
                                    <p className='education-list-item-institution-name'>{institutionName}, {city}</p>
                                    <p className='education-list-item-description'>{description}</p>
                                </div>
                            </div>
                            <div className='education-list-item-btn-container'>
                                <button className='education-list-item-btn' onClick={displayEditForm}>Edit</button>
                                <button className='education-list-item-btn' onClick={()=>deleteEducation(id)}>Delete</button>
                            </div>
                     </div>
                    }
                    </>
                    :<div className="preview-education-list-item-container">
                        <p className='education-list-item-fromto'>{from} - {to}</p>
                        <p className='education-list-item-degree'>{degree}</p>
                        <p className='education-list-item-institution-name'>{institutionName}, {city}</p>
                        <p className='education-list-item-description'>{description}</p>
                    </div>
                }
        </li>
    )
}

export default EducationItem;