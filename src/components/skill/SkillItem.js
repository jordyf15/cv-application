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
        const {skill, deleteSkill, editSkill, editMode} = this.props;
        const {id, skillName} = skill;
        const {editable} = this.state;
        return(
            <li className='skill-list-items'>
                {editMode?<>
                    {editable?
                    <EditSkillForm closeForm={this.closeEditForm} editSkill={editSkill} skill={skill}/>:
                    <div className='skill-list-item-info-container'>
                        <div className='skill-list-item-info-container'>
                            <p className='skill-list-item-skill-name'>{skillName}</p>
                        </div>
                        <div className='skill-list-item-btn-container'>
                            <button className='skill-list-item-btn' onClick={this.displayEditForm}>Edit</button>
                            <button className='skill-list-item-btn' onClick={()=>deleteSkill(id)}>Delete</button>
                        </div>
                   </div>}
                </>
                :<div>
                    <p className='skill-list-item-skill-name'>{skillName}</p>
                </div>
                }
            </li>
        );
    }
}

export default SkillItem;