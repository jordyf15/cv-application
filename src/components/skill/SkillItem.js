import React from 'react';
import EditSkillForm from './EditSkillForm';

class SkillItem extends React.Component{
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
        const {skill, deleteSkill, editSkill} = this.props;
        const {id, skillName} = skill;
        const {editable} = this.state;
        return(
            <li>
                {editable?
                <EditSkillForm closeForm={this.closeEditForm} editSkill={editSkill} skill={skill}/>:
                <div>
                    <p>{skillName}</p>
                    <button onClick={this.displayEditForm}>Edit</button>
                    <button onClick={()=>deleteSkill(id)}>Delete</button>
                </div>}
            </li>
        );
    }
}

export default SkillItem;