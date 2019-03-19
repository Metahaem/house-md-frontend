import React, { Component } from 'react';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Main from './Main'

import './App.css';
import API from './API';

class App extends Component {

  state = {
    symptoms: [],
    selectedSymptoms: [],
    currentBodyPart: null,
    diagnoses: [],
    diagnosisScreenToggle: false
  }

  filterOutSelectedSymptoms = (symps) => {
    return symps.filter(symp => !this.state.selectedSymptoms.includes(symp))
  }

  bodyClick = (e, bodyPart) => {
    e.preventDefault()
    API.getSymptoms(bodyPart)
    .then(symptoms => this.filterOutSelectedSymptoms(symptoms))
    .then(symptoms => this.setState({symptoms}))
  }

  symptomClick = (e, symptom) => {
    e.preventDefault()
    let selectedSymptomClone = this.state.selectedSymptoms
    selectedSymptomClone = [...selectedSymptomClone, symptom]
    // debugger
    this.setState({selectedSymptoms: selectedSymptomClone})
  }

  render() {
    return (
      <div className="App">
        <Navbar 
          selectedSymptoms={this.state.selectedSymptoms}
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

