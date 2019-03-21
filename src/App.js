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
    selectedIssue: null, 
    selectedIssueSymptoms: []
  }

  filterOutSelectedSymptoms = (symps) => {
    return symps.filter(symp => !this.state.selectedSymptoms.map(selectedSymp => selectedSymp.id).includes(symp.id))
  }

  removeSymptomFromState = (symptom) => {
    let clone = [...this.state.symptoms]
    const filteredList = clone.filter(eachsymptom => eachsymptom.id !== symptom.id)
    this.setState({
        symptoms: filteredList
    })
}

  bodyClick = (e, bodyPart) => {
    e.preventDefault()
    API.getSymptoms(bodyPart)
    .then(symptoms => this.filterOutSelectedSymptoms(symptoms))
    .then(symptoms => this.setState({symptoms}))
  }

  symptomDelete = (symptom) => {
    let clone = [...this.state.selectedSymptoms]
    const filteredList = clone.filter(eachsymptom => eachsymptom.id !== symptom.id)
    this.setState({
        selectedSymptoms: filteredList
    })
  }

  symptomClick = (e, symptom) => {
    e.preventDefault()
    let selectedSymptomClone = this.state.selectedSymptoms
    selectedSymptomClone = [...selectedSymptomClone, symptom]
    this.setState({selectedSymptoms: selectedSymptomClone})
    this.removeSymptomFromState(symptom)
  }

  diagnoseClick = (e) => {
    e.preventDefault()
    let diagnosesIDArray=this.state.selectedSymptoms.map(symp => symp.diagnoses)
    diagnosesIDArray=diagnosesIDArray.flat().map(diag => diag.issue_id)
    return API.getDiagnoses(diagnosesIDArray)
    .then(diagnoses => this.setState({diagnoses: diagnoses, symptoms: []}))
  }

  issueClick = (e, issue) => {
    e.preventDefault()
    return API.getSymptomsOfIssue(issue.id)
    .then((symptoms) => this.setState({selectedIssue: issue, selectedIssueSymptoms: symptoms}))
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
          selectedIssue={this.state.selectedIssue}
          selectedIssueSymptoms={this.state.selectedIssueSymptoms}
        />
        <Main 
          diagnoses={this.state.diagnoses} 
          bodyClick={this.bodyClick}
          currentBodyPart={this.state.currentBodyPart}
          selectedSymptoms={this.state.selectedSymptoms}
          issueClick={this.issueClick}
        />
        
      </div>
    )
  }
}

export default App;

