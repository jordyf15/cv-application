import React from 'react';
import TextArea from '../inputs/TextArea';
import TextInput from '../inputs/TextInput';

class EditWorkExperienceForm extends React.Component{
    constructor(props){
        super(props);
        const {work} = this.props;
        const {id, companyName, city, from, to, position, description} = work;
        this.state={
            id,
            companyName,
            city,
            from,
            to,
            position,
            description
        }
        this.changeCompanyName = this.changeCompanyName.bind(this);
        this.changeCity = this.changeCity.bind(this);
        this.changeFrom = this.changeFrom.bind(this);
        this.changeTo = this.changeTo.bind(this);
        this.changePosition = this.changePosition.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.onSubmitHandle = this.onSubmitHandle.bind(this);
    }
    changeCompanyName({target}){
        this.setState({
            companyName: target.value,
        });
    }
    changeCity({target}){
        this.setState({
            city: target.value,
        });
    }
    changeFrom({target}){
        this.setState({
            from: target.value,
        });
    }
    changeTo({target}){
        this.setState({
            to: target.value,
        });
    }
    changePosition({target}){
        this.setState({
            position: target.value,
        });
    }
    changeDescription({target}){
        this.setState({
            description: target.value,
        });
    }

    onSubmitHandle(e){
        e.preventDefault();
        const {id,
            companyName,
            city,
            from,
            to,
            position,
            description
        } = this.state;
        const work={
            id,
            companyName,
            city,
            from,
            to,
            position,
            description
        }
        this.props.editWork(work);
        this.props.closeForm();
    }

    render(){
        const {companyName, city, from, to, position, description, id} = this.state;
        const {closeForm} = this.props;
        return(
            <form onSubmit={this.onSubmitHandle}>
                <div>
                    <label htmlFor={`edit-${id}-work-company-name`}>Company Name</label>
                    <TextInput handleOnChange={this.changeCompanyName} value={companyName} 
                    placeholder='Company Name' id={`edit-${id}-work-company-name`}/>
                </div>
                <div>
                    <label htmlFor={`edit-${id}-work-city`}>City</label>
                    <TextInput handleOnChange={this.changeCity} value={city} placeholder="City" id={`edit-${id}-work-city`}/>
                </div>
                <div>
                    <label htmlFor={`edit-${id}-work-from`}>From</label>
                    <TextInput handleOnChange={this.changeFrom} value={from} placeholder="YYYY" id={`edit-${id}-work-from`}/>
                </div>
                <div>
                    <label htmlFor={`edit-${id}-work-to`}>To</label>
                    <TextInput handleOnChange={this.changeTo} value={to} placeholder="YYYY - Present" id={`edit-${id}-work-to`}/>
                </div>
                <div>
                    <label htmlFor={`edit-${id}-work-position`}>Position</label>
                    <TextInput handleOnChange={this.changePosition} value={position} id={`edit-${id}-work-position`}
                    placeholder="Position"/>
                </div>
                <div>
                    <label htmlFor={`edit-${id}-work-description`}>Further Descriptions</label>
                    <TextArea handleOnChange={this.changeDescription} value={description} id={`edit-${id}-work-description`}
                    placeholder="Describe more about your work there"/>
                </div>
                <button onClick={closeForm} type='button'>Cancel</button>
                <button type="submit">Save</button>
            </form>
        );
    }
}

export default EditWorkExperienceForm;