let today = new Date();
console.log(today);
let thisYear = new Date().getFullYear();
console.log(thisYear);

//DOM
const footer = document.querySelector("footer");

let copyRight = document.createElement("p");
copyRight.innerHTML = "Juliette " + thisYear;

footer.appendChild(copyRight);

let skills = ["Creativity", "Adaptation", "Negotiation"];

let skillsSection = document.getElementById("skillsSection");

//skillsSection.style.backgroundColor = "blue";

let skillsList = document.getElementById("skillsList");
console.log(skillsList);

for (i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  console.log(skill.innerText);
  skillsList.appendChild(skill);
}

let messageForm = document.getElementById("message_form");
messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = event.target.name.value;
  let email = event.target.email.value;
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  event.target.reset(); //eliminar lo que tengo dentro de los espacio de email y name
  //console.log(event.target.name.value);
});

let messageSection = document.getElementById("messageSection");
console.log(messageSection);

let messageList = document.getElementById("messageList");
console.log(messageList);

let newMessage = document.createElement("li");
newMessage.innerHTML = //anadir otro elementos que son de html
  "<a href= mailto:juliette2martinezc@gmail.com >Email</a>";
console.log(newMessage);

let removeButton = document.createElement("button");
removeButton.innerText = " remove ";
removeButton.setAttribute("type", " button ");
console.log(removeButton);

removeButton.addEventListener(" click ", (event) => {
  let entry = removeButton.parentNode;
  entry.parentNode.removeChild(entry);
});

newMessage.appendChild(removeButton);
console.log(newMessage);

messageList.appendChild(newMessage);
