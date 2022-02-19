import React from 'react';
import EducationSection from './education/EducationSection';
import PersonalInformationSection from './PersonalInformationSection';
import WorkExperienceSection from './workexperience/WorkExperienceSection';
import SkillSection from './skill/SkillSection';

class Cv extends React.Component{
    render(){
        const {changeFirstName, firstName, changeLastName, lastName, changeCurrentPosition, currentPosition,
        changeAddress, address, changePhoneNumber, phoneNumber, changeEmail, email, changeDescription, description,
        changePhoto, photo} = this.props;
        const {workExperiences, addWork, deleteWork, editWork} = this.props;
        const {educations, addEducation, deleteEducation, editEducation} = this.props;
        const {skills, addSkill, deleteSkill, editSkill} = this.props;
        return(
            <div>
                <div>
                    <PersonalInformationSection changeFirstName={changeFirstName} firstName={firstName}
                    changeLastName={changeLastName} lastName={lastName}
                    changeCurrentPosition={changeCurrentPosition} currentPosition={currentPosition}
                    changeAddress={changeAddress} address={address} 
                    changePhoneNumber={changePhoneNumber} phoneNumber={phoneNumber}
                    changeEmail={changeEmail} email={email}
                    changeDescription={changeDescription} description={description}
                    changePhoto={changePhoto} photo={photo}/>
                    <WorkExperienceSection workExperiences={workExperiences} addWork={addWork} 
                    editWork={editWork} deleteWork={deleteWork}/>
                    <EducationSection educations={educations} addEducation={addEducation}
                    editEducation={editEducation} deleteEducation={deleteEducation}/>
                    <SkillSection skills={skills} addSkill={addSkill}
                    editSkill={editSkill} deleteSkill={deleteSkill}/>
                </div>
            </div>
        );
    }
}

export default Cv;