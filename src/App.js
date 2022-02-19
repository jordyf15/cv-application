import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cv from './components/Cv';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      firstName: 'First Name',
      lastName: 'Last Name',
      currentPosition: 'Current Position',
      photo: '',
      address: '',
      phoneNumber:'',
      email: '',
      description: '',
      workExperiences:[],
      educations: [],
      skills: [],
    };
    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.changeCurrentPosition = this.changeCurrentPosition.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.changePhoneNumber = this.changePhoneNumber.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.addWork = this.addWork.bind(this);
    this.deleteWork = this.deleteWork.bind(this);
    this.editWork = this.editWork.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.editEducation = this.editEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.editSkill = this.editSkill.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);
    this.changePhoto = this.changePhoto.bind(this);
  }

  addWork(work){
    this.setState({
      workExperiences: this.state.workExperiences.concat(work),
    });
  }

  addEducation(education){
    this.setState({
      educations: this.state.educations.concat(education),
    });
  }

  addSkill(skill){
    this.setState({
      skills: this.state.skills.concat(skill),
    });
  }

  editWork(editedWork){
    this.setState({
      workExperiences: this.state.workExperiences.map((work)=>{
        if(work.id !==editedWork.id){
          return work;
        }else{
          return editedWork;
        }
      }),
    });
  }

  editSkill(editedSkill){
    this.setState({
      skills: this.state.skills.map((skill)=>{
        if(skill.id!==editedSkill.id){
          return skill;
        }else{
          return editedSkill;
        }
      })
    })
  }

  editEducation(editedEducation){
    this.setState({
      educations: this.state.educations.map((education)=>{
        if(education.id !== editedEducation.id){
          return education;
        }else{
          return editedEducation;
        }
      }),
    });
  }

  deleteWork(workId){
    this.setState({
      workExperiences: this.state.workExperiences.filter((work)=>work.id!==workId),
    });
  }

  deleteEducation(educationId){
    this.setState({
      educations: this.state.educations.filter((education)=>education.id!==educationId),
    });
  }

  deleteSkill(skillId){
    this.setState({
      skills: this.state.skills.filter((skill)=>skill.id!==skillId),
    });
  }

  changeFirstName({target}){
    this.setState({
      firstName: target.value
    });
  }

  changeLastName({target}){
    this.setState({
      lastName: target.value
    })
  }

  changeCurrentPosition({target}){
    this.setState({
      currentPosition: target.value
    });
  }

  changeAddress({target}){
    this.setState({
      address: target.value
    });
  }

  changePhoneNumber({target}){
    this.setState({
      phoneNumber: target.value
    });
  }

  changeEmail({target}){
    this.setState({
      email: target.value
    });
  }

  changeDescription({target}){
    this.setState({
      description: target.value
    });
  }

  changePhoto({target}){
    this.setState({
      photo: URL.createObjectURL(target.files[0]),
    });
  }

  render(){
    const {firstName, lastName, currentPosition, address, phoneNumber, email, 
      description, workExperiences, educations, skills, photo} = this.state;
    return (
      <div className="App">
        <Header/>
        <Cv changeFirstName={this.changeFirstName} firstName={firstName}
        changeLastName={this.changeLastName} lastName={lastName}
        changeCurrentPosition={this.changeCurrentPosition} currentPosition={currentPosition}
        changeAddress={this.changeAddress} address={address}
        changePhoneNumber={this.changePhoneNumber} phoneNumber={phoneNumber}
        changeEmail={this.changeEmail} email={email}
        changeDescription={this.changeDescription} description={description}
        changePhoto={this.changePhoto} photo={photo}
        addWork={this.addWork} workExperiences={workExperiences} 
        deleteWork={this.deleteWork} editWork={this.editWork}
        addEducation={this.addEducation} educations={educations}
        deleteEducation={this.deleteEducation} editEducation={this.editEducation}
        addSkill={this.addSkill} skills={skills}
        deleteSkill={this.deleteSkill} editSkill={this.editSkill}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
