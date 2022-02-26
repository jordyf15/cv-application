import React from 'react';
import EmailInput from './inputs/EmailInput';
import FileInput from './inputs/FileInput';
import PhoneInput from './inputs/PhoneInput';
import TextArea from './inputs/TextArea';
import TextInput from './inputs/TextInput';
import '../styles/personalInformationSection.css';

const PersonalInformationSection = ({changeFirstName, firstName, changeLastName, lastName, changeCurrentPosition, currentPosition,
    changeAddress, address, changePhoneNumber, phoneNumber, changeEmail, email, changeDescription, description,
    changePhoto, photo, editMode}) => {
    const sectionId = editMode?'personal-information-section':'preview-personal-information-section';
    const imageContainerId = editMode?'image-container':'preview-image-container';
    const inputPositionId = editMode?'input-position':'preview-input-position';
    const inputAddressId = editMode?'input-address':'preview-input-address';
    const inputEmailId = editMode?'input-email':'preview-input-email';
    const inputPhoneId = editMode?'input-phone':'preview-input-phone';
    const basicRightContainerId = editMode?'basic-info-right-container':'preview-basic-info-right-container';

    return <div id={sectionId}>
        <div id={imageContainerId}>
            <FileInput handleOnChange={changePhoto} value={photo} inputId='input-image' imageId='photo' alt="Your Photo"/>
        </div>
        <div id='personal-info-container'>
            <div id='basic-info-container'>
                <div id='basic-info-left-container'>
                    <TextInput handleOnChange={changeFirstName} value={firstName} placeholder='First Name' id='input-firstname'/>
                    <TextInput handleOnChange={changeLastName} value={lastName} placeholder='Last Name' id='input-lastname'/>
                    <TextInput handleOnChange={changeCurrentPosition} value={currentPosition} placeholder='Current Position' id={inputPositionId}/>
                </div>
                <div id={basicRightContainerId}>
                    <TextInput handleOnChange={changeAddress} value={address} placeholder='Address' id={inputAddressId}/>
                    <PhoneInput handleOnChange={changePhoneNumber} value={phoneNumber} placeholder="Phone Number" id={inputPhoneId}/>
                    <EmailInput handleOnChange={changeEmail} value={email} placeholder="Email Address" id={inputEmailId}/>
                </div>
            </div>
            <div id='extra-info-container'>
                <TextArea handleOnChange={changeDescription} value={description} placeholder="Describe more about yourself" id='input-description'/>
            </div>
        </div>
    </div>
}

export default PersonalInformationSection;