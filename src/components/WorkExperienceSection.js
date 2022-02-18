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
        const {workExperiences, deleteWork, editWork} = this.props;
        return(
            <div>
                <h2>Work Experiences</h2>
                <ul>
                    {workExperiences.map((workExp)=><WorkExperienceItem key={workExp.id} work={workExp} 
                    deleteWork={deleteWork} editWork={editWork}/>)}
                </ul>
                {renderForm?
                <NewWorkExperienceForm removeForm={this.closeNewWorkExpForm} addWork={this.addWork}/>:
                <button onClick={this.displayNewWorkExpForm}>+ Work Experience</button>}
            </div>
        );
    }
}

export default WorkExperienceSection;