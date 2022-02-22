import React from 'react';
import uniqid from 'uniqid';
import TextInput from '../inputs/TextInput';

class NewSkillForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id: uniqid(),
            skillName: '',
        };
        this.changeSkill = this.changeSkill.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    changeSkill({target}){
        this.setState({
            skillName: target.value,
        });
    }
    onSubmit(e){
        e.preventDefault();
        const {id, skillName} = this.state;
        const skill = {
            id,
            skillName,
        }
        this.props.addSkill(skill);
    }
    render(){
        const { skillName } = this.state;
        const {removeForm} = this.props;
        return(
            <form id='new-skill-form' onSubmit={this.onSubmit}>
                <div className='new-skill-input-container'>
                    <label className='new-skill-input-label' htmlFor='new-skill-name'>Skill</label>
                    <TextInput handleOnChange={this.changeSkill} className='new-skill-input' value={skillName} 
                    placeholder='Skill' id='new-skill-name'/>
                </div>
                <div id='new-skill-btn-container'>
                    <button id='cancel-new-skill-btn' type='button' onClick={removeForm}>Cancel</button>
                    <button id='add-new-skill-btn' type='submit'>Add Skill</button>
                </div>
            </form>
        );
    }
}

export default NewSkillForm;