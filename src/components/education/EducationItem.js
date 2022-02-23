import React from 'react';
import EditEducationForm from './EditEducationForm';

class EducationItem extends React.Component{
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
        const {education, deleteEducation, editEducation, editMode} = this.props;
        const {institutionName, city, from, to, degree, description, id} = education;
        const {editable} = this.state;
        return(
            <li className='education-list-items'>
                {
                    editMode?
                    <>
                    {editable?
                        <EditEducationForm closeForm={this.closeEditForm} editEducation={editEducation} education={education}/>
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
                                <button className='education-list-item-btn' onClick={this.displayEditForm}>Edit</button>
                                <button className='education-list-item-btn' onClick={()=>deleteEducation(id)}>Delete</button>
                            </div>
                     </div>
                    }
                    </>
                    :<div>
                        <p className='education-list-item-fromto'>{from} - {to}</p>
                        <p className='education-list-item-degree'>{degree}</p>
                        <p className='education-list-item-institution-name'>{institutionName}, {city}</p>
                        <p className='education-list-item-description'>{description}</p>
                    </div>
                }
            </li>
        );
    }
}

export default EducationItem;