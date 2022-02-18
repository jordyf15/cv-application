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
      education: [],
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
  }

  addWork(work){
    this.setState({
      workExperiences: this.state.workExperiences.concat(work),
    });
  }

  deleteWork(workId){
    this.setState({
      workExperiences: this.state.workExperiences.filter((work)=>work.id!==workId),
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

  render(){
    const {firstName, lastName, currentPosition, address, phoneNumber, email, description,workExperiences} = this.state;
    return (
      <div className="App">
        <p>{firstName} {lastName}</p>

        <Header/>
        <Cv changeFirstName={this.changeFirstName} firstName={firstName}
        changeLastName={this.changeLastName} lastName={lastName}
        changeCurrentPosition={this.changeCurrentPosition} currentPosition={currentPosition}
        changeAddress={this.changeAddress} address={address}
        changePhoneNumber={this.changePhoneNumber} phoneNumber={phoneNumber}
        changeEmail={this.changeEmail} email={email}
        changeDescription={this.changeDescription} description={description}
        addWork={this.addWork} workExperiences={workExperiences} deleteWork={this.deleteWork}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
