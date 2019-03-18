import React, { Component } from 'react';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Main from './Main'

import './App.css';

class App extends Component {

  state = {
    symptoms: [],
    currentBodyPart: null,
    diagnoses: [],
    diagnosisScreenToggle: false
  }

  bodyClick = (e, bodyPart) => {
    e.preventDefault()
    console.log(bodyPart)
  }


  render() {
    return (
      <div className="App">
        <Navbar 
          symptoms={this.state.symptoms}
          diagnoseClick={this.diagnoseClick}
          symptomDelete={this.symptomDelete}
        />
        <Sidebar 
          symptoms={this.state.symptoms}
          bodyPart={this.state.bodyPart}
          symptomClick={this.symptomClick}
        />
        <Main 
          diagnoses={this.state.diagnoses} 
          bodyClick={this.bodyClick}
          currentBodyPart={this.state.currentBodyPart}
          diagnosisScreenToggle={this.state.diagnosisScreenToggle}
        />
        
      </div>
    )
  }
}

export default App;

