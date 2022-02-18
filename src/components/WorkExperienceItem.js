import React from 'react';

class WorkExperienceItem extends React.Component{
    render(){
        const {work, deleteWork} = this.props;
        const {companyName, city, from, to, position, description, id} = work;
        return(
            <div>
                <p>{companyName}, {city}</p>
                <p>{from} - {to}</p>
                <p>{position}</p>
                <p>{description}</p>
                <button>Edit</button>
                <button onClick={()=>deleteWork(id)}>Delete</button>
            </div>
        );
    }
}

export default WorkExperienceItem;