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
        const {educations, deleteEducation, editEducation, editMode} = this.props;
        return(
            <div id='education-section'>
                <h2 id='education-title'>Education</h2>
                <ul id='education-list'>
                    {educations.map((education)=><EducationItem key={education.id} education={education}
                    deleteEducation={deleteEducation} editEducation={editEducation} editMode={editMode}/>)}
                </ul>
                {
                    editMode?
                        renderForm?
                        <NewEducationForm removeForm={this.closeNewEducationForm} addEducation={this.addEducation}/>:
                        <button id='new-education-button' onClick={this.displayNewEducationForm}>+ Education</button>
                    :<></>
                }
            </div>
        );
    }
}

export default EducationSection;