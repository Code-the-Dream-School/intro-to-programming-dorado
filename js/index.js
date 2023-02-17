   // Copyright Text in Footer (Javascript & The DOM)
    const renderCopyright = () => {
        const today = new Date()
        const thisYear = today.getFullYear()
    
        // DOM selection
        const copyright = document.querySelector('#copyright')
    
        // DOM manipulation (modify)
        copyright.innerHTML = `&copy; Rachel Westermann ${thisYear}`
      }
  
  
  //Skills List
    const renderSkillsList = () => {
      const skills = [
        'JavaScript',
        'HTML',
        'CSS',
        'Project Management',
        'Scrum',
        'MySQL',
      ]
  
  // DOM selection
     const skillsSection = document.querySelector('#skills')
     const skillsList = skillsSection.querySelector('ul')
  //Skills list
      for (let i = 0; i < skills.length; i++) {
  //DOM manipulation (create)
     const skill = document.createElement('li')
        skill.classList.add('tag')
       skill.innerText = skills[i]
  
  // DOM manipulation (modify)
      skillsList.appendChild(skill)
      }
   }
     
    
  // Lesson 4.2 Create List of Skills (Javascript & The DOM)
    // --------------------------------------------------------------
    //const renderSkillsList = () => {
      //const skills = [
        //'JavaScript',
        //'HTML',
        //'CSS',
        //'Jira',
        //'Figma',
        //'Sketch',
        //'Adobe XD',
        //'MySQL',
      //]
  
  // DOM selection
      //const skillsSection = document.querySelector('#skills')
      //const skillsList = skillsSection.querySelector('ul')
  //Skills list
      //for (let i = 0; i < skills.length; i++) {
        // DOM manipulation (create)
       // const skill = document.createElement('li')
        //skill.classList.add('tag')
        //skill.innerText = skills[i]
  
        // DOM manipulation (modify)
        //skillsList.appendChild(skill)
     // }
    //}


    //AJax 
  
  //const doAjax = async()=>{
    //const response = await fetch('https://api.github.com/users/rachellibrarian/repos'(Method,'GET')= > 
    //console.log("inside async",)= >,
    //console.log(response),
    //repositories = await response.json()
    //const projectSection = document.getElementById('projects');
    //Project Section Here//
    //const projectList = projectSection.querySelector('ul');
    //Add for loop to initiate over repositories//
    //console.log("I am inside of the loop")
    //console.log(repositories[index])
      //for(let index=0; index < repositories.length; index++)
      //const project=document.createElement('li');
      //console.log(project);
      //Set the inner text of the project variable to the array element//
      //project.innertext=repositories[index].name
      //Checnage the project element to the project list element//
    //  projectList.appendChild(project),
  //}
  //doAjax()

  
  
  
  
  const BUTTON = {
    edit: 'edit',
    save: 'save',
    remove: 'remove',
  }

  const renderMessageForm = () => {
    const messageForm = document.querySelector('form[name=leave_message]')

    messageForm.addEventListener('submit', (event) => {
      event.preventDefault()

      // capture current timestamp
      const now = new Date()

      const { name, email, message } = event.target

      // check for missing fields
      if (!name || !email || !message) {
        return
      }

      const messageSection = document.querySelector('#messages')
      const messageList = messageSection.querySelector('ul')

      // if hidden, show the "messages" section
      if (messageSection.style.display === 'none') {
        messageSection.style.display = 'block'
      }

      // create new message
      const newMessage = document.createElement('li')
      newMessage.classList.add('list__item')
      newMessage.innerHTML = `<div>
        <span class="strong">${message.value}</span>
        <p>${now.toLocaleString()} from <a class="link" href="mailto:${
        email.value
      }">${name.value}</a> &nbsp;</p>
      </div>`

      // create edit button
      const editButton = document.createElement('button')
      editButton.innerText = BUTTON.edit
      editButton.type = 'button'
      editButton.classList.add('button', 'button--minimal')

      editButton.addEventListener('click', (event) => {
        const button = event.target
        const entry = button.parentNode

        if (button.innerText === BUTTON.edit) {
          const message = entry.querySelector('span')
          const input = document.createElement('input')
          input.type = 'text'
          input.value = message.innerText
          input.classList.add('field__input')

          message.after(input)
          message.remove()

          button.innerText = BUTTON.save
        } else {
          const input = entry.querySelector('input')
          const message = document.createElement('span')
          message.innerText = input.value
          message.classList.add('strong')

          input.after(message)
          input.remove()

          button.innerText = BUTTON.edit
        }
      })

      newMessage.appendChild(editButton)

      // create remove button
      const removeButton = document.createElement('button')
      removeButton.innerText = BUTTON.remove
      removeButton.type = 'button'
      removeButton.classList.add('button', 'button--danger')

      removeButton.addEventListener('click', (event) => {
        const entry = event.target.parentNode
        const list = entry.parentNode

        // if there are no other messages, hide the section
        if (list.children.length <= 1) {
          messageSection.style.display = 'none'
        }

        // remove entry from the list
        entry.remove()
      })

      newMessage.appendChild(removeButton)

      // add new message to the list
      messageList.prepend(newMessage)

      // reset form
      event.target.reset()
    })
  }

  function renderProjectsWithXHR() {
    const githubRequest = new XMLHttpRequest()

    githubRequest.open('GET', 'https://api.github.com/users/rachellibrarian/repos')

    githubRequest.addEventListener('load', function () {
      const data = JSON.parse(this.response)

      // filter out irrelevant repositories
      const filteredData = data.filter((repo) =>
        repo.name.includes('intro-to-programming')
      )

      const projectSection = document.querySelector('#projects')
      const projectList = projectSection.querySelector('ul')

      for (let repository of filteredData) {
        const project = document.createElement('li')
        project.innerHTML = `<a class="link link--no-decor" href="${repository.html_url}">${repository.name}</a>`
        projectList.appendChild(project)
      }
    })

    githubRequest.send()
  }

  function renderProjectsWithFetch() {
    fetch('https://api.github.com/users/rachellibrarian/repos')
      .then((res) => res.json())
      .then((data) => {
        // filter out irrelevant repositories
        const filteredData = data.filter((repo) =>
          repo.name.includes('intro-to-programming')
        )

        const projectSection = document.querySelector('#projects')
        const projectList = projectSection.querySelector('ul')

        for (let repository of filteredData) {
          const project = document.createElement('li')
          project.innerHTML = `<a class="link link--no-decor" href="${repository.html_url}">${repository.name}</a>`
          projectList.appendChild(project)
        }
      })
  }
  
  
  
  
  
  
      document.addEventListener('DOMContentLoaded', () => {
        renderCopyright()
        renderSkillsList()
        renderMessageForm()
        // renderProjectsWithXHR()
        renderProjectsWithFetch()
      }
      )
      
