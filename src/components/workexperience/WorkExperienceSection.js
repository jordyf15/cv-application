import React from 'react';
import NewWorkExperienceForm from './NewWorkExperienceForm';
import WorkExperienceItem from './WorkExperienceItem';


class WorkExperienceSection extends React.Component{
    constructor(props){
        super(props);
        this.state={
            renderForm: false,
        }
        this.displayNewWorkExpForm = this.displayNewWorkExpForm.bind(this);
        this.closeNewWorkExpForm = this.closeNewWorkExpForm.bind(this);
        this.addWork = this.addWork.bind(this);
    }

    displayNewWorkExpForm(){
        this.setState({
            renderForm: true,
        })
    }
    closeNewWorkExpForm(){
        this.setState({
            renderForm: false,
        })
    }
    addWork(work){
        this.setState({
            renderForm: false,
        });
        this.props.addWork(work);
    }
    render(){
        const {renderForm} = this.state;
        const {workExperiences, deleteWork, editWork, editMode} = this.props;
        return(
            <div id='work-experience-section'>
                <h2 id='work-experience-title'>Work Experiences</h2>
                <ul id='work-experience-list'>
                    {workExperiences.map((workExp)=><WorkExperienceItem key={workExp.id} work={workExp} 
                    deleteWork={deleteWork} editWork={editWork} editMode={editMode}/>)}
                </ul>
                {editMode?
                    renderForm?
                    <NewWorkExperienceForm removeForm={this.closeNewWorkExpForm} addWork={this.addWork}/>:
                    <button id='new-work-experience-button' onClick={this.displayNewWorkExpForm}>+ Work Experience</button>
                :<></>}
            </div>
        );
    }
}

export default WorkExperienceSection;