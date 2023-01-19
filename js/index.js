// footer info
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = '© Anna Pestova ' + thisYear;
footer.appendChild(copyright)
//create list of skills 
let skills = ['Computer proficiency', 'Communication skills', 'Problem-solving abilities', 'Organizational know-how'];
const skillsSection = document.getElementById('skills');
//create "ul" in #skills section
const skillsList = skillsSection.querySelector('ul');
//attach list ol skills to the #skills section
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill)
}
//fill the #messages section
let messageSection = document.getElementById('messages');
//Hide the #messages section when the list is empty
messageSection.style.display = 'none';
//Handle message form submit
const messageForm = document.querySelector("[name='leave_message']")
messageForm.addEventListener('submit', function(event){
event.preventDefault();
let name1 = event.target.elements.name;
let email1 = event.target.elements.email;
let message1 = event.target.elements.message; 
console.log(name1.value);
console.log(email1.value);
console.log(message1.value);
// create message section to display submitted message
let messageSection = document.getElementById('messages');
let messageList = messageSection.querySelector('ul');
let newMessage = document.createElement('li');

newMessage.innerHTML = "<a href = 'mailto:"  +  email1.value + "'>" + name1.value + "</a> <span>" + message1.value + "</span>";
// create the remove message  button
let removeButton = document.createElement('button');
removeButton.innerHTML = 'Remove';
removeButton.type = 'button';

removeButton.addEventListener('click', function(handles){
var entry = removeButton.parentNode;
entry.remove();
});
newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);
messageSection.style.display = 'block';
messageForm.reset();
}, 
false)

var githubRequest = new XMLHttpRequest();
var repositories=[];

githubRequest.open('GET', 'https://api.github.com/users/AnnaPestova1/repos');
githubRequest.send();
githubRequest.addEventListener('load', function(){
   repositories = JSON.parse(this.response); 
    console.log(repositories)
   
let projectSection = document.getElementById('projects');

let projectList = projectSection.querySelector('ul');

for (let l=0; l<repositories.length; l++) {
    var project = document.createElement('li');
    project.innerHTML = `<a href="${repositories[l].html_url}">${repositories[l].name}</a><span> Updated year: ${new Date(repositories[l].updated_at).getFullYear()}</span>`;
    projectList.appendChild(project);
}
}
)

