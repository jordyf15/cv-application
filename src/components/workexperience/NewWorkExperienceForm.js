import React from 'react';
import TextArea from '../inputs/TextArea';
import TextInput from '../inputs/TextInput';
import uniqid from 'uniqid';

class NewWorkExperienceForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id: uniqid(),
            companyName: '',
            city: '',
            from: '',
            to: '',
            position: '',
            description: ''
        };
        this.changeCompanyName = this.changeCompanyName.bind(this);
        this.changeCity = this.changeCity.bind(this);
        this.changeFrom = this.changeFrom.bind(this);
        this.changeTo = this.changeTo.bind(this);
        this.changePosition = this.changePosition.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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


    onSubmit(e){
        const {id, companyName, city, from, to, position, description} = this.state;
        e.preventDefault();
        const work = {
            id,
            companyName,
            city,
            from,
            to,
            position,
            description
        }
        this.props.addWork(work);
    }   

    render(){
        const {companyName, city, from, to, position, description} = this.state;
        const {removeForm} = this.props;
        return(
            <form id='new-work-form' onSubmit={this.onSubmit}>
                <div className='new-work-input-container'>
                    <label htmlFor='new-work-company-name' className='new-work-input-label' id='new-work-company-name-label'>Company Name</label>
                    <TextInput handleOnChange={this.changeCompanyName} className='new-work-input' value={companyName} placeholder='Company Name' id='new-work-company-name'/>
                </div>
                <div className='new-work-input-container'>
                    <label className='new-work-input-label' htmlFor='new-work-city'>City</label>
                    <TextInput handleOnChange={this.changeCity} className='new-work-input' value={city} placeholder="City" id="new-work-city"/>
                </div>
                <div className='new-work-input-container'>
                    <label className='new-work-input-label' htmlFor='new-work-from'>From</label>
                    <TextInput handleOnChange={this.changeFrom} className='new-work-input' value={from} placeholder="YYYY" id='new-work-from'/>
                </div>
                <div className='new-work-input-container'>
                    <label className='new-work-input-label' htmlFor='new-work-to'>To</label>
                    <TextInput handleOnChange={this.changeTo} className='new-work-input' value={to} placeholder="YYYY - Present" id='new-work-to'/>
                </div>
                <div className='new-work-input-container'>
                    <label className='new-work-input-label' htmlFor='new-work-position'>Position</label>
                    <TextInput handleOnChange={this.changePosition} className='new-work-input' value={position} id='new-work-position' placeholder="Position"/>
                </div>
                <div className='new-work-input-container'>
                    <label className='new-work-input-label' htmlFor='new-work-description'>Further Descriptions</label>
                    <TextArea handleOnChange={this.changeDescription} className='new-work-input' value={description} id='new-work-description' placeholder="Describe more about your work there"/>
                </div>
                <div id='new-work-btn-container'>
                    <button id='cancel-new-work-experience-btn' type="button" onClick={removeForm}>Cancel</button>
                    <button id='add-new-work-experience-btn' type="submit">Add Work Experience</button>
                </div>
            </form>
        );
    }

}

export default NewWorkExperienceForm;