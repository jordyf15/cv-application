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
                <div>
                    <label htmlFor={`edit-${id}-skill`}>Skill</label>
                    <TextInput handleOnChange={this.changeSkillName} value={skillName}
                    placeholder='Skill' id={`edit-${id}-skill`}/>
                </div>
                <button onClick={closeForm} type='button'>Cancel</button>
                <button type='submit'>Save</button>
            </form>
        );
    }
}

export default EditSkillForm;