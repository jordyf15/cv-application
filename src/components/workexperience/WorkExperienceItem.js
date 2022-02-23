import React from 'react';
import EditWorkExperienceForm from './EditWorkExperienceForm';

class WorkExperienceItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            editable: false,
        }
        this.displayEditForm = this.displayEditForm.bind(this);
        this.closeEditForm = this.closeEditForm.bind(this);
    }
    displayEditForm(){
        this.setState({
            editable: true,
        });
    }
    closeEditForm(){
        this.setState({
            editable: false,
        });
    }
    render(){
        const {work, deleteWork, editWork, editMode} = this.props;
        const {companyName, city, from, to, position, description, id} = work;
        const {editable} = this.state;
        return(
            <li className='work-experience-list-items'>
                {editMode?
                    <>{editable?
                        <EditWorkExperienceForm closeForm={this.closeEditForm} editWork={editWork} work={work}/>
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
                                <button className='work-experience-list-item-btn' onClick={this.displayEditForm}>Edit</button>
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
        );
    }
}

export default WorkExperienceItem;