import React, { useState } from 'react';
import EditWorkExperienceForm from './EditWorkExperienceForm';

const WorkExperienceItem = ({work, deleteWork, editWork, editMode}) => {
    const [editable, setEditable] = useState(false);
    const {companyName, city, from, to, position, description, id} = work;
    const displayEditForm = () => {
        setEditable(true);
    }

    const closeEditForm = () => {
        setEditable(false);
    }

    return <li className='work-experience-list-items'>
        {editMode?
            <>{editable?
                <EditWorkExperienceForm closeForm={closeEditForm} editWork={editWork} work={work}/>
                    :<div className='work-experience-list-item-container'>
                    <div className='work-experience-list-item-info-container'>
                        <div>
                            <p className='work-experience-list-item-fromto'>{from} - {to}</p>
                        </div>
                        <div>
                            <p className='work-experience-list-item-position'>{position}</p>
                            <p className='work-experience-list-item-company-name'>{companyName}, {city}</p>
                            <p className='work-experience-list-item-description'>{description}</p>
                        </div>
                    </div>
                    <div className='work-experience-list-item-btn-container'>
                        <button className='work-experience-list-item-btn' onClick={displayEditForm}>Edit</button>
                        <button className='work-experience-list-item-btn' onClick={()=>deleteWork(id)}>Delete</button>
                    </div>
                </div>}
            </>
            :<div className='preview-work-experience-list-item-container'>
                <p className='work-experience-list-item-fromto'>{from} - {to}</p>
                <p className='work-experience-list-item-position'>{position}</p>
                <p className='work-experience-list-item-company-name'>{companyName}, {city}</p>
                <p className='work-experience-list-item-description'>{description}</p>
            </div>
        }
    </li>
}

export default WorkExperienceItem;