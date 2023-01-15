{
    // Lesson 4.2 Copyright Text in Footer (Javascript & The DOM)
    // --------------------------------------------------------------
    const renderCopyright = () => {
      const today = new Date()
      const thisYear = today.getFullYear()
  
      // DOM selection
      const copyright = document.querySelector('#copyright')
  
      // DOM manipulation (modify)
      copyright.innerHTML = `&copy; Rachel Westermann ${thisYear}`
    }
}

   // Lesson 4.2 Create List of Skills (Javascript & The DOM)
  // --------------------------------------------------------------
  const renderSkillsList = () => {
    const skills = [
      'JavaScript',
      'HTML',
      'CSS',
      'Jira',
      'Figma',
      'Sketch',
      'Adobe XD',
      'MySQL',
      'etc.',
    ]

    // DOM selection
    const skillsSection = document.querySelector('#skills')
    const skillsList = skillsSection.querySelector('ul')

    for (let i = 0; i < skills.length; i++) {
      // DOM manipulation (create)
      const skill = document.createElement('li')
      skill.classList.add('tag')
      skill.innerText = skills[i]

      // DOM manipulation (modify)
      skillsList.appendChild(skill)
    }
  }