import { assessmentData } from '../data/assessmentData.js'
import { EmailService } from '../services/EmailService.js'

export class AngerAssessment {
  constructor(container) {
    this.container = container
    this.currentSection = 0
    this.responses = {}
    this.emailService = new EmailService()
  }

  render() {
    const section = assessmentData.sections[this.currentSection]
    const progress = ((this.currentSection + 1) / assessmentData.sections.length) * 100

    this.container.innerHTML = `
      <div class="assessment-card">
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${progress}%"></div>
        </div>
        
        <div class="assessment-content">
          <div class="section-header">
            <h2 class="section-title">${section.title}</h2>
            <p class="section-description">${section.description}</p>
          </div>
          
          <div class="question-group">
            ${this.renderQuestions(section.questions)}
          </div>
        </div>
        
        <div class="navigation">
          <button 
            class="btn btn-secondary" 
            onclick="assessment.previousSection()"
            ${this.currentSection === 0 ? 'style="visibility: hidden;"' : ''}
          >
            ← Previous
          </button>
          
          <span class="section-indicator">
            Section ${this.currentSection + 1} of ${assessmentData.sections.length}
          </span>
          
          <button 
            class="btn btn-primary" 
            onclick="assessment.nextSection()"
            id="next-btn"
          >
            ${this.currentSection === assessmentData.sections.length - 1 ? 'Complete Assessment' : 'Next →'}
          </button>
        </div>
      </div>
    `

    // Make assessment available globally for button clicks
    window.assessment = this
    this.updateNextButton()
  }

  renderQuestions(questions) {
    return questions.map((question, index) => {
      const questionId = `s${this.currentSection}_q${index}`
      
      if (question.type === 'radio') {
        return `
          <div class="question">
            <div class="question-text">${question.text}</div>
            <div class="radio-group">
              ${question.options.map((option, optionIndex) => `
                <div class="radio-option">
                  <input 
                    type="radio" 
                    id="${questionId}_${optionIndex}" 
                    name="${questionId}" 
                    value="${option.value}"
                    onchange="assessment.handleResponse('${questionId}', ${option.value})"
                    ${this.responses[questionId] === option.value ? 'checked' : ''}
                  >
                  <label for="${questionId}_${optionIndex}">${option.label}</label>
                </div>
              `).join('')}
            </div>
          </div>
        `
      } else if (question.type === 'text') {
        return `
          <div class="question">
            <div class="question-text">${question.text}</div>
            <textarea 
              class="text-input textarea" 
              placeholder="${question.placeholder || 'Enter your response...'}"
              onchange="assessment.handleResponse('${questionId}', this.value)"
            >${this.responses[questionId] || ''}</textarea>
          </div>
        `
      }
    }).join('')
  }

  handleResponse(questionId, value) {
    this.responses[questionId] = value
    this.updateNextButton()
  }

  updateNextButton() {
    const nextBtn = document.getElementById('next-btn')
    const section = assessmentData.sections[this.currentSection]
    const requiredQuestions = section.questions.length
    const answeredQuestions = section.questions.filter((_, index) => {
      const questionId = `s${this.currentSection}_q${index}`
      return this.responses[questionId] !== undefined && this.responses[questionId] !== ''
    }).length

    nextBtn.disabled = answeredQuestions < requiredQuestions
  }

  nextSection() {
    if (this.currentSection < assessmentData.sections.length - 1) {
      this.currentSection++
      this.render()
    } else {
      this.showResults()
    }
  }

  previousSection() {
    if (this.currentSection > 0) {
      this.currentSection--
      this.render()
    }
  }

  calculateScore() {
    let totalScore = 0
    let maxScore = 0

    assessmentData.sections.forEach((section, sectionIndex) => {
      section.questions.forEach((question, questionIndex) => {
        if (question.type === 'radio') {
          const questionId = `s${sectionIndex}_q${questionIndex}`
          const response = this.responses[questionId]
          if (response !== undefined) {
            totalScore += response
            maxScore += Math.max(...question.options.map(opt => opt.value))
          }
        }
      })
    })

    return {
      score: totalScore,
      maxScore: maxScore,
      percentage: Math.round((totalScore / maxScore) * 100)
    }
  }

  getRiskLevel(percentage) {
    if (percentage <= 30) {
      return {
        level: 'Low Risk',
        class: 'risk-low',
        description: 'Your anger levels appear to be within a healthy range. You demonstrate good emotional regulation skills.',
        recommendations: [
          'Continue practicing healthy stress management techniques',
          'Maintain regular exercise and healthy lifestyle habits',
          'Keep using effective communication strategies',
          'Consider mindfulness or meditation practices for continued growth'
        ]
      }
    } else if (percentage <= 60) {
      return {
        level: 'Moderate Risk',
        class: 'risk-moderate',
        description: 'You may experience anger more frequently or intensely than ideal. There are opportunities for improvement.',
        recommendations: [
          'Practice deep breathing and relaxation techniques',
          'Identify and avoid known anger triggers when possible',
          'Develop better communication and conflict resolution skills',
          'Consider anger management workshops or counseling',
          'Establish regular exercise routine to manage stress',
          'Practice mindfulness and emotional awareness techniques'
        ]
      }
    } else {
      return {
        level: 'High Risk',
        class: 'risk-high',
        description: 'Your responses suggest significant challenges with anger management that may be impacting your relationships and well-being.',
        recommendations: [
          'Seek professional help from a counselor or therapist',
          'Consider anger management classes or support groups',
          'Learn and practice immediate anger de-escalation techniques',
          'Develop a safety plan for managing intense anger episodes',
          'Address underlying stress, anxiety, or depression',
          'Consider medication evaluation if recommended by a healthcare provider',
          'Build a strong support network of family and friends'
        ]
      }
    }
  }

  showResults() {
    const scoreData = this.calculateScore()
    const riskData = this.getRiskLevel(scoreData.percentage)

    this.container.innerHTML = `
      <div class="assessment-card">
        <div class="results-container">
          <div class="results-header">
            <h2 class="results-title">Assessment Results</h2>
            <div class="score-display">
              📊 Score: ${scoreData.score}/${scoreData.maxScore} (${scoreData.percentage}%)
            </div>
          </div>

          <div class="risk-level ${riskData.class}">
            <h3>Risk Level: ${riskData.level}</h3>
            <p>${riskData.description}</p>
          </div>

          <div class="recommendations">
            <h3>Recommendations</h3>
            <ul>
              ${riskData.recommendations.map(rec => `<li>${rec}</li>`).join('')}
            </ul>
          </div>

          <div class="email-section">
            <h3>📧 Submit Assessment Results</h3>
            <p>Please provide your information below to submit your assessment results for review.</p>
            
            <div class="form-group">
              <label for="name">Full Name:</label>
              <input 
                type="text" 
                id="name" 
                class="text-input" 
                placeholder="Enter your full name"
                required
              >
            </div>
            
            <div class="form-group">
              <label for="age">Age:</label>
              <input 
                type="number" 
                id="age" 
                class="text-input" 
                placeholder="Enter your age"
                min="18"
                max="100"
                required
              >
            </div>
            
            <div class="form-group">
              <label for="marital-status">Marital Status:</label>
              <select id="marital-status" class="text-input" required>
                <option value="">Select your marital status</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
                <option value="Separated">Separated</option>
                <option value="In a relationship">In a relationship</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="email">Email Address:</label>
              <input 
                type="email" 
                id="email" 
                class="text-input" 
                placeholder="Enter your email address"
                required
              >
            </div>
            
            <button class="btn btn-primary" onclick="assessment.submitResults()" id="submit-btn">
              📧 Submit Assessment
            </button>
            
            <div id="submit-status"></div>
          </div>

          <div class="navigation">
            <button class="btn btn-secondary" onclick="assessment.restart()">
              🔄 Take Assessment Again
            </button>
            <button class="btn btn-primary" onclick="window.print()">
              🖨️ Print Results
            </button>
          </div>
        </div>
      </div>
    `

    window.assessment = this
  }

  async submitResults() {
    const nameInput = document.getElementById('name')
    const ageInput = document.getElementById('age')
    const maritalStatusInput = document.getElementById('marital-status')
    const emailInput = document.getElementById('email')
    const submitBtn = document.getElementById('submit-btn')
    const statusDiv = document.getElementById('submit-status')

    const name = nameInput.value.trim()
    const age = ageInput.value.trim()
    const maritalStatus = maritalStatusInput.value
    const email = emailInput.value.trim()

    if (!name || !age || !maritalStatus || !email) {
      statusDiv.innerHTML = '<div class="error-message">Please fill in all required fields.</div>'
      return
    }

    if (!this.isValidEmail(email)) {
      statusDiv.innerHTML = '<div class="error-message">Please enter a valid email address.</div>'
      return
    }

    submitBtn.disabled = true
    submitBtn.innerHTML = '<span class="loading"><span class="spinner"></span> Submitting...</span>'
    try {
      const scoreData = this.calculateScore()
      const riskData = this.getRiskLevel(scoreData.percentage)
      
      await this.emailService.submitAssessment({
        name,
        age: parseInt(age),
        maritalStatus,
        email,
        score: scoreData,
        risk: riskData,
        responses: this.responses
      })

      statusDiv.innerHTML = '<div class="success-message">✅ Assessment submitted successfully! Your results have been sent for review.</div>'
    } catch (error) {
      console.error('Assessment submission failed:', error)
      statusDiv.innerHTML = '<div class="error-message">❌ Failed to submit assessment. Please try again or contact support.</div>'
    } finally {
      submitBtn.disabled = false
      submitBtn.innerHTML = '📧 Submit Assessment'
    }
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  restart() {
    this.currentSection = 0
    this.responses = {}
    this.render()
  }
}