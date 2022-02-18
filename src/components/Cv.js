import React from 'react';
import EducationSection from './education/EducationSection';
import PersonalInformationSection from './PersonalInformationSection';
import WorkExperienceSection from './workexperience/WorkExperienceSection';

class Cv extends React.Component{
    render(){
        const {changeFirstName, firstName, changeLastName, lastName, changeCurrentPosition, currentPosition,
        changeAddress, address, changePhoneNumber, phoneNumber, changeEmail, email, changeDescription, description} = this.props;
        const {workExperiences, addWork, deleteWork, editWork} = this.props;
        const {educations, addEducation, deleteEducation, editEducation} = this.props;
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
                    <WorkExperienceSection workExperiences={workExperiences} addWork={addWork} 
                    editWork={editWork} deleteWork={deleteWork}/>
                    <EducationSection educations={educations} addEducation={addEducation}
                    editEducation={editEducation} deleteEducation={deleteEducation}/>
                </div>
            </div>
        );
    }
}

export default Cv;