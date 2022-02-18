import React from 'react';
import EducationItem from './EducationItem';
import NewEducationForm from './NewEducationForm';

class EducationSection extends React.Component{
    constructor(props){
        super(props);
        this.state={
            renderForm: false,
        }
        this.displayNewEducationForm = this.displayNewEducationForm.bind(this);
        this.closeNewEducationForm = this.closeNewEducationForm.bind(this);
        this.addEducation = this.addEducation.bind(this);
    }
    displayNewEducationForm(){
        this.setState({
            renderForm: true,
        });
    }
    closeNewEducationForm(){
        this.setState({
            renderForm: false,
        });
    }
    addEducation(education){
        this.setState({
            renderForm: false,
        });
        this.props.addEducation(education);
    }

    render(){
        const {renderForm} = this.state;
        const {educations, deleteEducation, editEducation} = this.props;
        return(
            <div>
                <h2>Education</h2>
                <ul>
                    {educations.map((education)=><EducationItem key={education.id} education={education}
                    deleteEducation={deleteEducation} editEducation={editEducation}/>)}
                </ul>
                {renderForm?
                <NewEducationForm removeForm={this.closeNewEducationForm} addEducation={this.addEducation}/>:
                <button onClick={this.displayNewEducationForm}>+ Education</button>}
            </div>
        );
    }
}

export default EducationSection;