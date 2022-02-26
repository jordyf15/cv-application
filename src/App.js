import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cv from './components/Cv';
import React, { useEffect, useState } from 'react';
import { jsPDF } from "jspdf";
import UtilitySection from './components/UtilitySection';
import './styles/main.css';
import './styles/preview.css';
import html2canvas from 'html2canvas';

const App = () => {
  const [firstName, setFirstName] = useState('First Name');
  const [lastName, setLastName] = useState('Last Name');
  const [currentPosition, setCurrentPosition] = useState('Current Position');
  const [photo, setPhoto] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [workExperiences, setWorkExperiences] = useState([]);
  const [educations, setEducations] = useState([]);
  const [skills, setSkills] = useState([]);
  const [editMode, setEditMode] = useState(true);
  const cvRef = React.createRef();

  const addWork = (work) => {
    setWorkExperiences(workExperiences.concat(work));
  }

  const addEducation = (education) => {
    setEducations(educations.concat(education));
  }

  const addSkill = (skill) => {
    setSkills(skills.concat(skill));
  }

  const editWork = (editedWork) => {
    setWorkExperiences(workExperiences.map((work)=>{
      if(work.id !==editedWork.id){
        return work;
      }else{
        return editedWork;
      }
    }));
  }

  const editSkill = (editedSkill) => {
    setSkills(skills.map((skill)=>{
      if(skill.id!==editedSkill.id){
        return skill;
      }else{
        return editedSkill;
      }
    }));
  }

  const editEducation = (editedEducation) => {
    setEducations(educations.map((education)=>{
      if(education.id !== editedEducation.id){
        return education;
      }else{
        return editedEducation;
      }
    }));
  }

  const deleteWork = (workId) => {
    setWorkExperiences(workExperiences.filter((work)=>work.id!==workId));
  }

  const deleteEducation = (educationId) => {
    setEducations(educations.filter((education)=>education.id!==educationId));
  }

  const deleteSkill = (skillId) => {
    setSkills(skills.filter((skill)=>skill.id!==skillId));
  }

  const changeFirstName = ({target}) => {
    setFirstName(target.value);
  }

  const changeLastName = ({target}) => {
    setLastName(target.value);
  }

  const changeCurrentPosition = ({target}) => {
    setCurrentPosition(target.value);
  }

  const changeAddress = ({target}) => {
    setAddress(target.value);
  }

  const changeEmail = ({target}) => {
    setEmail(target.value);
  }

  const changePhoneNumber = ({target}) => {
    setPhoneNumber(target.value);
  }

  const changeDescription = ({target}) => {
    setDescription(target.value);
  }

  const changePhoto = ({target}) => {
    setPhoto(URL.createObjectURL(target.files[0]));
  }

  const resetCv = () => {
    setFirstName('First Name');
    setLastName('Last Name');
    setCurrentPosition('Current Position');
    setPhoto('');
    setAddress('');
    setPhoneNumber('');
    setEmail('');
    setDescription('');
    setWorkExperiences([]);
    setEducations([]);
    setSkills([]);
  }

  const generatePdf = () => {
    setEditMode(false);
  }

  useEffect(()=>{
    if(editMode===false){
      const cv = cvRef.current;
      html2canvas(cv).then(canvas => {
        var imgData = canvas.toDataURL();
        var imgWidth = 210; 
        var pageHeight = 295;  
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;
        var doc = new jsPDF('p', 'mm');
        var position = 10;

        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position += heightLeft - imgHeight;
          doc.addPage();
          doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }
        doc.save(`${firstName} ${lastName} CV.pdf`);
        setEditMode(true);
      });
    }
  },[editMode]);

  return <div className="App">
    <Header/>
    <Cv changeFirstName={changeFirstName} firstName={firstName}
    changeLastName={changeLastName} lastName={lastName}
    changeCurrentPosition={changeCurrentPosition} currentPosition={currentPosition}
    changeAddress={changeAddress} address={address}
    changePhoneNumber={changePhoneNumber} phoneNumber={phoneNumber}
    changeEmail={changeEmail} email={email}
    changeDescription={changeDescription} description={description}
    changePhoto={changePhoto} photo={photo}
    addWork={addWork} workExperiences={workExperiences} 
    deleteWork={deleteWork} editWork={editWork}
    addEducation={addEducation} educations={educations}
    deleteEducation={deleteEducation} editEducation={editEducation}
    addSkill={addSkill} skills={skills}
    deleteSkill={deleteSkill} editSkill={editSkill}
    cvRef={cvRef} editMode={editMode}/>
    <UtilitySection resetCv={resetCv} generatePdf={generatePdf}/>
    <Footer/>
  </div>
}

export default App;
