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
        changeImage, image
        } = this.props;
        return(
            <div>
                <TextInput handleOnChange={changeFirstName} value={firstName}/>
                <TextInput handleOnChange={changeLastName} value={lastName}/>
                <TextInput handleOnChange={changeCurrentPosition} value={currentPosition}/>
                <TextInput handleOnChange={changeAddress} value={address}/>
                <PhoneInput handleOnChange={changePhoneNumber} value={phoneNumber}/>
                <EmailInput handleOnChange={changeEmail} value={email}/>
                <TextArea handleOnChange={changeDescription} value={description}/>
                <FileInput handleOnChange={changeImage} value={image}/>
            </div>
        );
    }
}

export default PersonalInformationSection;