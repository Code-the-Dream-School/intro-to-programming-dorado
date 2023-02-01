// footer copyright info
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = "© Anna Pestova " + thisYear;
footer.prepend(copyright);
//Filling the Skills section:
//create list of skills
let skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "Computer proficiency",
  "Communication skills",
  "Problem-solving abilities",
  "Organizational know-how",
];
const skillsSection = document.getElementById("skills");
//create "ul" in #skills section
const skillsList = skillsSection.querySelector("ul");
//attach list ol skills to the #skills section
for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill);
}
//filling the messages section
let messageSection = document.getElementById("messages");
//Stretch goal lesson 4.3: Hide the messages section when the list is empty
messageSection.style.display = "none";
//Handle Leave Message form submit
const messageForm = document.querySelector("[name='leave_message']");
messageForm.addEventListener(
  "submit",
  function (event) {
    event.preventDefault();
    let name1 = event.target.elements.name;
    let email1 = event.target.elements.email;
    let message1 = event.target.elements.message;
    console.log(name1.value);
    console.log(email1.value);
    console.log(message1.value);
    // create message section to display submitted message
    let messageSection = document.getElementById("messages");
    let messageList = messageSection.querySelector("ul");
    let newMessage = document.createElement("li");

    newMessage.innerHTML =
      "<a href = 'mailto:" +
      email1.value +
      "'>" +
      name1.value +
      "</a> <span id='canEdit'>" +
      message1.value +
      "</span>";
    // create the remove message  button
    let removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", function () {
      const entry = removeButton.parentNode;
      entry.remove();
    });

    //Stretch goal lesson 4.3: Create an "edit" button for each message entry
    // that allows the user to input a new/modified message
    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.type = "button";
    const saveButton = document.createElement("button");
    saveButton.innerText = "Save";
    saveButton.type = "button";

    saveButton.style.display = "none";
    editButton.addEventListener("click", function () {
      const entry = editButton.parentNode;
      const editMessage = entry.querySelector("span");
      editMessage.contentEditable = "true";
      editMessage.focus();
      editMessage.style.backgroundColor = "rgb(255, 255, 255)";
      saveButton.style.display = "initial";
      editButton.style.display = "none";
    });

    saveButton.addEventListener("click", function () {
      const entry = saveButton.parentNode;
      const editMessage = entry.querySelector("span");
      editMessage.contentEditable = false;
      editMessage.style.backgroundColor = "rgb(233, 232, 234)";
      editButton.style.display = "initial";
      saveButton.style.display = "none";
    });
    newMessage.appendChild(editButton);
    newMessage.appendChild(saveButton);

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageSection.style.display = "block";
    messageForm.reset();
  },
  false
);

// Lesson 6.2: Working with Fetch API
fetch("https://api.github.com/users/AnnaPestova1/repos", {
  method: "GET",
  mode: "cors",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (repositories) {
    var projectSection = document.getElementById("projects");
    var projectList = projectSection.querySelector("ul");
    // for (let l = 0; l < repositories.length; l++)
    for (let l in repositories) {
      var project = document.createElement("li");
      let repository = repositories[l];
      project.innerHTML = `<a href="${repository.html_url}">${
        repository.name
      }</a><span> Updated year: ${new Date(
        repository.updated_at
      ).getFullYear()}</span>`;
      projectList.appendChild(project);
    }
  })
  // Stretch goal: Chain a catch() function to your fetch call to handle errors from the server
  .catch(function (error) {
    console.error("Error:", error);
  });

function toggleMenu() {
  var x = document.getElementById("NavLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  document.querySelectorAll("#NavLinks a").forEach(function (collapseMenu) {
    collapseMenu.addEventListener("click", toggleMenu);
  });
}
function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
