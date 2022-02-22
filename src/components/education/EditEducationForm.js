import React from 'react';
import TextArea from '../inputs/TextArea';
import TextInput from '../inputs/TextInput';

class EditEducationForm extends React.Component{
    constructor(props){
        super(props);
        const {education} = this.props;
        const {id, institutionName, city, from, to, degree, description} = education;
        this.state={
            id,
            institutionName,
            city,
            from,
            to,
            degree,
            description
        }
        this.changeInstitutionName = this.changeInstitutionName.bind(this);
        this.changeCity = this.changeCity.bind(this);
        this.changeFrom = this.changeFrom.bind(this);
        this.changeTo = this.changeTo.bind(this);
        this.changeDegree = this.changeDegree.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.onSubmitHandle = this.onSubmitHandle.bind(this);
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
    onSubmitHandle(e){
        e.preventDefault();
        const{
            id,
            institutionName,
            city,
            from,
            to,
            degree,
            description
        } = this.state;
        const education = {
            id,
            institutionName,
            city,
            from,
            to,
            degree,
            description
        }
        this.props.editEducation(education);
        this.props.closeForm();
    }

    render(){
        const {institutionName, city, from, to, degree, description, id} = this.state;
        const {closeForm} = this.props;
        return(
            <form onSubmit={this.onSubmitHandle}>
                <div className='edit-education-input-container'>
                    <label className='edit-education-input-label' htmlFor={`edit-${id}-education-institution-name`}>Institution Name</label>
                    <TextInput className='edit-education-input' handleOnChange={this.changeInstitutionName} value={institutionName} placeholder="Institution Name" id={`edit-${id}-education-institution-name`}/>
                </div>
                <div className='edit-education-input-container'>
                    <label className='edit-education-input-label' htmlFor={`edit-${id}-education-city`}>City</label>
                    <TextInput className='edit-education-input' handleOnChange={this.changeCity} value={city} 
                    placeholder="City" id={`edit-${id}-education-city`}/>
                </div>
                <div className='edit-education-input-container'>
                    <label className='edit-education-input-label' htmlFor={`edit-${id}-education-from`}>From</label>
                    <TextInput className='edit-education-input' handleOnChange={this.changeFrom} value={from}
                    id={`edit-${id}-education-from`} placeholder="YYYY"/>
                </div>
                <div className='edit-education-input-container'>
                    <label className='edit-education-input-label' htmlFor={`edit-${id}-education-to`}>To</label>
                    <TextInput className='edit-education-input' handleOnChange={this.changeTo} value={to}
                    id={`edit-${id}-education-to`} placeholder="YYYY or Present"/>
                </div>
                <div className='edit-education-input-container'>
                    <label className='edit-education-input-label' htmlFor={`edit-${id}-education-degree`}>Degree or Course</label>
                    <TextInput className='edit-education-input' handleOnChange={this.changeDegree} value={degree}
                    id={`edit-${id}-education-degree`} placeholder="Degree or Course"/>
                </div>
                <div className='edit-education-input-container'>
                    <label className='edit-education-input-label' htmlFor={`edit-${id}-education-description`}>Further Descriptions</label>
                    <TextArea className='edit-education-input' handleOnChange={this.changeDescription} value={description} id={`edit-${id}-education-description`}
                    placeholder="Describe more about the course or degree"/>
                </div>
                <div className='edit-education-btn-container'>
                    <button className='cancel-edit-education-btn' type="button" onClick={closeForm}>Cancel</button>
                    <button className='save-edit-education-btn' type="submit">Save</button>
                </div>
            </form>
        ) 
    }

}

export default EditEducationForm;