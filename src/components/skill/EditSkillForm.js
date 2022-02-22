import React from 'react';
import TextInput from '../inputs/TextInput';

class EditSkillForm extends React.Component{
    constructor(props){
        super(props);
        const {skill} = this.props;
        const {id, skillName} = skill;
        this.state={
            id,
            skillName,
        }
        this.changeSkillName = this.changeSkillName.bind(this);
        this.onSubmitHandle = this.onSubmitHandle.bind(this);
    }
    changeSkillName({target}){
        this.setState({
            skillName: target.value,
        });
    }
    onSubmitHandle(e){
        e.preventDefault();
        const {
            id,
            skillName
        } = this.state;
        const skill = {
            id,
            skillName,
        }
        this.props.editSkill(skill);
        this.props.closeForm();
    }
    render(){
        const {id, skillName} = this.state;
        const {closeForm} = this.props;
        return(
            <form onSubmit={this.onSubmitHandle}>
                <div className='edit-skill-input-container'>
                    <label className='edit-skill-input-label' htmlFor={`edit-${id}-skill`}>Skill</label>
                    <TextInput handleOnChange={this.changeSkillName} value={skillName}
                    placeholder='Skill' className='edit-skill-input' id={`edit-${id}-skill`}/>
                </div>
                <div className='edit-skill-btn-container'>
                    <button className='cancel-edit-skill-btn' onClick={closeForm} type='button'>Cancel</button>
                    <button className='save-edit-skill-btn' type='submit'>Save</button>
                </div>
            </form>
        );
    }
}

export default EditSkillForm;