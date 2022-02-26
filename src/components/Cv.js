import React from 'react';
import EducationSection from './education/EducationSection';
import PersonalInformationSection from './PersonalInformationSection';
import WorkExperienceSection from './workexperience/WorkExperienceSection';
import SkillSection from './skill/SkillSection';
import '../styles/cv.css';

const Cv = (props) => {
    const {changeFirstName, firstName, changeLastName, lastName, changeCurrentPosition, currentPosition,
    changeAddress, address, changePhoneNumber, phoneNumber, changeEmail, email, changeDescription, description,
    changePhoto, photo} = props;
    const {workExperiences, addWork, deleteWork, editWork} = props;
    const {educations, addEducation, deleteEducation, editEducation} = props;
    const {skills, addSkill, deleteSkill, editSkill} = props;
    const {cvRef, editMode} = props;
    const cvId = editMode?'cv-container':'preview-cv-container';

    return <div ref={cvRef} id={cvId}>
        <PersonalInformationSection changeFirstName={changeFirstName} firstName={firstName}
        changeLastName={changeLastName} lastName={lastName}
        changeCurrentPosition={changeCurrentPosition} currentPosition={currentPosition}
        changeAddress={changeAddress} address={address} 
        changePhoneNumber={changePhoneNumber} phoneNumber={phoneNumber}
        changeEmail={changeEmail} email={email}
        changeDescription={changeDescription} description={description}
        changePhoto={changePhoto} photo={photo} editMode={editMode}/>
        <WorkExperienceSection workExperiences={workExperiences} addWork={addWork} 
        editWork={editWork} deleteWork={deleteWork} editMode={editMode}/>
        <EducationSection educations={educations} addEducation={addEducation}
        editEducation={editEducation} deleteEducation={deleteEducation} editMode={editMode}/>
        <SkillSection skills={skills} addSkill={addSkill}
        editSkill={editSkill} deleteSkill={deleteSkill} editMode={editMode}/>
    </div>
}

export default Cv;