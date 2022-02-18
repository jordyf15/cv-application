import React from 'react';
import uniqid from 'uniqid';
import DateInput from '../inputs/DateInput';
import TextArea from '../inputs/TextArea';
import TextInput from '../inputs/TextInput';

class NewEducationForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id: uniqid(),
            institutionName: '',
            city: '',
            from: '',
            to: '',
            degree: '',
            description: '',
        };
        this.changeInstitutionName = this.changeInstitutionName.bind(this);
        this.changeCity = this.changeCity.bind(this);
        this.changeFrom = this.changeFrom.bind(this);
        this.changeTo = this.changeTo.bind(this);
        this.changeDegree = this.changeDegree.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    changeInstitutionName({target}){
        this.setState({
            institutionName: target.value,
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
    changeDegree({target}){
        this.setState({
            degree: target.value,
        });
    }
    changeDescription({target}){
        this.setState({
            description: target.value,
        });
    }
    onSubmit(e){
        e.preventDefault();
        const {id, institutionName, city, from, to, degree, description} = this.state;
        const education = {
            id,
            institutionName,
            city,
            from,
            to,
            degree,
            description
        }
        this.props.addEducation(education);
    }

    render(){
        const {institutionName, city, from, to, degree, description} = this.state;
        const {removeForm} = this.props;
        return(
            <form onSubmit={this.onSubmit}>
                <div>
                    <label htmlFor='new-education-institution-name'>Institution Name</label>
                    <TextInput handleOnChange={this.changeInstitutionName} value={institutionName}
                    placeholder='Institution Name' id='new-education-institution-name'/>
                </div>
                <div>
                    <label htmlFor='new-education-city'>City</label>
                    <TextInput handleOnChange={this.changeCity} value={city} placeholder="City" id='new-education-city'/>
                </div>
                <div>
                    <label htmlFor='new-education-form'>From</label>
                    <DateInput handleOnChange={this.changeFrom} value={from} id='new-education-form'/>
                </div>
                <div>
                    <label htmlFor='new-education-to'>To</label>
                    <DateInput handleOnChange={this.changeTo} value={to} id='new-education-to'/>
                </div>
                <div>
                    <label htmlFor='new-education-degree'>Degree or Course</label>
                    <TextInput handleOnChange={this.changeDegree} value={degree} id='new-education-degree' placeholder="Degree or Course"/>
                </div>
                <div>
                    <label htmlFor='new-education-description'>Further Description</label>
                    <TextArea handleOnChange={this.changeDescription} value={description} id='new-education-description' placeholder="Describe more about the course or degree"/>
                </div>
                <button type="button" onClick={removeForm}>Cancel</button>
                <button type="submit">Add Education</button>
            </form>
        )
    }
}

export default NewEducationForm;