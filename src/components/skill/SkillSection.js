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
        const {skills, deleteSkill, editSkill} = this.props;
        return(
            <div>
                <h2>Skills</h2>
                <ul>
                    {skills.map((skill)=><SkillItem key={skill.id} skill={skill}
                    deleteSkill={deleteSkill} editSkill={editSkill}/>)}
                </ul>
                {renderForm?
                <NewSkillForm removeForm={this.closeNewSkillForm} addSkill={this.addSkill}/>:
                <button onClick={this.displayNewSkillForm}>+ Skill</button>}
            </div>
        )
    }
}

export default SkillSection;