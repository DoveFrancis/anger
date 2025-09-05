import './style.css'
import { AngerAssessment } from './components/AngerAssessment.js'

document.querySelector('#app').innerHTML = `
  <div class="app-container">
    <header class="app-header">
      <div class="logo-container">
        <img src="/REUEL CONSULTING LOGO.png" alt="Reuel Consulting" class="company-logo">
      </div>
      <h1>Anger Management Assessment Tool</h1>
      <p class="subtitle">A comprehensive evaluation to help understand your anger patterns and triggers</p>
    </header>
    <main id="main-content">
      <div id="assessment-container"></div>
    </main>
  </div>
`

// Initialize the assessment
const assessmentContainer = document.getElementById('assessment-container')
const assessment = new AngerAssessment(assessmentContainer)
assessment.render()