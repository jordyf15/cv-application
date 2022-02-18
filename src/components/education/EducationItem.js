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
        const {education, deleteEducation, editEducation} = this.props;
        const {institutionName, city, from, to, degree, description, id} = education;
        const {editable} = this.state;
        return(
            <li>
                {editable?
                    <EditEducationForm closeForm={this.closeEditForm} editEducation={editEducation} education={education}/>
                    :<div>
                        <p>{institutionName}, {city}</p>
                        <p>{from} - {to}</p>
                        <p>{degree}</p>
                        <p>{description}</p>
                        <button onClick={this.displayEditForm}>Edit</button>
                        <button onClick={()=>deleteEducation(id)}>Delete</button>
                    </div>
                }
            </li>
        );
    }
}

export default EducationItem;