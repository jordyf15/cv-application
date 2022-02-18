import React from 'react';
import EditWorkExperienceForm from './EditWorkExperienceForm';

class WorkExperienceItem extends React.Component{
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
        const {work, deleteWork, editWork} = this.props;
        const {companyName, city, from, to, position, description, id} = work;
        const {editable} = this.state;
        return(
            <li>
                {editable?
                <EditWorkExperienceForm closeForm={this.closeEditForm} editWork={editWork} work={work}/>
                    :<div>
                    <p>{companyName}, {city}</p>
                    <p>{from} - {to}</p>
                    <p>{position}</p>
                    <p>{description}</p>
                    <button onClick={this.displayEditForm}>Edit</button>
                    <button onClick={()=>deleteWork(id)}>Delete</button>
                </div>}
              
            </li>
        );
    }
}

export default WorkExperienceItem;