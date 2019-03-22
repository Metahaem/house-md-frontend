import React, { Component } from 'react';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Main from './Main'
import 'semantic-ui-css/semantic.min.css'
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
  
  // When clicking on a bodypart, do not show symptoms already selected

  filterOutSelectedSymptoms = (symps) => {
    return symps.filter(symp => !this.state.selectedSymptoms.map(selectedSymp => selectedSymp.id).includes(symp.id))
  }
  
  
  // Remove symptoms from sidebar when selected

  removeSymptomFromState = (symptom) => {
    let clone = [...this.state.symptoms]
    const filteredList = clone.filter(eachsymptom => eachsymptom.id !== symptom.id)
    this.setState({
        symptoms: filteredList
    })
}

// Handle clicking on specific body target

  bodyClick = (e, bodyPart) => {
    e.preventDefault()
    API.getSymptoms(bodyPart)
    .then(symptoms => this.filterOutSelectedSymptoms(symptoms))
    .then(symptoms => this.setState({symptoms}))
  }

  // Handle delete symptom click in navbar

  symptomDelete = (e, symptomID) => {
    e.preventDefault()
    let clone = [...this.state.selectedSymptoms]
    const filteredList = clone.filter(eachsymptom => eachsymptom.id !== symptomID)
    if (this.state.diagnoses.length===0) {
      this.setState({
        selectedSymptoms: filteredList
      })
    }
  }

  // Handle selecting symptom from left sidebar

  symptomClick = (e, symptom) => {
    e.preventDefault()
    let selectedSymptomClone = this.state.selectedSymptoms
    selectedSymptomClone = [...selectedSymptomClone, symptom]
    this.setState({selectedSymptoms: selectedSymptomClone})
    this.removeSymptomFromState(symptom)
  }

  // Handle clicking diagnose button

  diagnoseClick = (e) => {
    e.preventDefault()
    let diagnosesIDArray=this.state.selectedSymptoms.map(symp => symp.diagnoses)
    diagnosesIDArray=diagnosesIDArray.flat().map(diag => diag.issue_id)
    return API.getDiagnoses(diagnosesIDArray)
    .then(diagnoses => this.setState({diagnoses: diagnoses, symptoms: []}))
  }

  // Handle clicking on specific issue on page

  issueClick = (e, issue) => {
    e.preventDefault()
    return API.getSymptomsOfIssue(issue.id)
    .then((symptoms) => this.setState({selectedIssue: issue, selectedIssueSymptoms: symptoms}))
  }

  backToSymptomSelect = (e) => {
    e.preventDefault()
    this.setState({diagnoses: []})
  }

  render() {
    return (
      <div className="App">
        <Navbar 
          selectedSymptoms={this.state.selectedSymptoms}
          diagnoseClick={this.diagnoseClick}
          symptomDelete={this.symptomDelete}
          backToSymptomSelect={this.backToSymptomSelect}
          showingDiagnoses={this.state.diagnoses.length ? true : false}
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

