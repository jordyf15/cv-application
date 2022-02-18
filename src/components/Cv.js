import React from 'react';
import PersonalInformationSection from './PersonalInformationSection';
import WorkExperienceSection from './WorkExperienceSection';

class Cv extends React.Component{
    render(){
        const {changeFirstName, firstName, changeLastName, lastName, changeCurrentPosition, currentPosition,
        changeAddress, address, changePhoneNumber, phoneNumber, changeEmail, email, changeDescription, description} = this.props;
        const {workExperiences, addWork} = this.props;
        return(
            <div>
                <div>
                    <PersonalInformationSection changeFirstName={changeFirstName} firstName={firstName}
                    changeLastName={changeLastName} lastName={lastName}
                    changeCurrentPosition={changeCurrentPosition} currentPosition={currentPosition}
                    changeAddress={changeAddress} address={address} 
                    changePhoneNumber={changePhoneNumber} phoneNumber={phoneNumber}
                    changeEmail={changeEmail} email={email}
                    changeDescription={changeDescription} description={description}/>
                    <WorkExperienceSection workExperiences={workExperiences} addWork={addWork}/>
                </div>
            </div>
        );
    }
}

export default Cv;