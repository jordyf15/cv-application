import React from 'react';
import EmailInput from './inputs/EmailInput';
import FileInput from './inputs/FileInput';
import PhoneInput from './inputs/PhoneInput';
import TextArea from './inputs/TextArea';
import TextInput from './inputs/TextInput';

class PersonalInformationSection extends React.Component{
    render(){
        const {changeFirstName, firstName, changeLastName, lastName, changeCurrentPosition, currentPosition,
        changeAddress, address, changePhoneNumber, phoneNumber, changeEmail, email, changeDescription, description,
        changePhoto, photo
        } = this.props;
        return(
            <div>
                <TextInput handleOnChange={changeFirstName} value={firstName} placeholder='First Name' id='input-firstname'/>
                <TextInput handleOnChange={changeLastName} value={lastName} placeholder='Last Name' id='input-lastname'/>
                <TextInput handleOnChange={changeCurrentPosition} value={currentPosition} placeholder='Current Position' id='input-position'/>
                <TextInput handleOnChange={changeAddress} value={address} placeholder='Address' id='input-address'/>
                <PhoneInput handleOnChange={changePhoneNumber} value={phoneNumber} placeholder="Phone Number" id='input-phone'/>
                <EmailInput handleOnChange={changeEmail} value={email} placeholder="Email Address" id='input-email'/>
                <TextArea handleOnChange={changeDescription} value={description} placeholder="Describe more about yourself" id='input-description'/>
                <FileInput handleOnChange={changePhoto} value={photo} inputId='input-image' alt="Your Photo"/>
            </div>
        );
    }
}

export default PersonalInformationSection;