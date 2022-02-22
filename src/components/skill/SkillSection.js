import React from 'react';
import NewSkillForm from './NewSkillForm';
import SkillItem from './SkillItem';

class SkillSection extends React.Component{
    constructor(props){
        super(props);
        this.state={
            renderForm: false,
        }
        this.displayNewSkillForm = this.displayNewSkillForm.bind(this);
        this.closeNewSkillForm = this.closeNewSkillForm.bind(this);
        this.addSkill = this.addSkill.bind(this);
    }
    displayNewSkillForm(){
        this.setState({
            renderForm: true,
        });
    }
    closeNewSkillForm(){
        this.setState({
            renderForm: false,
        });
    }
    addSkill(skill){
        this.setState({
            renderForm: false,
        });
        this.props.addSkill(skill);
    }
    render(){
        const {renderForm} = this.state;
        const {skills, deleteSkill, editSkill, editMode} = this.props;
        return(
            <div id='skill-section'>
                <h2 id='skill-title'>Skills</h2>
                <ul id='skill-list'>
                    {skills.map((skill)=><SkillItem key={skill.id} skill={skill}
                    deleteSkill={deleteSkill} editSkill={editSkill} editMode={editMode}/>)}
                </ul>
                {editMode?
                    renderForm?
                    <NewSkillForm removeForm={this.closeNewSkillForm} addSkill={this.addSkill}/>:
                    <button id='new-skill-button' onClick={this.displayNewSkillForm}>+ Skill</button>
                :<></>
                }
            </div>
        )
    }
}

export default SkillSection;