let today = new Date();
console.log(today);
let thisYear = new Date().getFullYear();
console.log(thisYear);

//DOM
const footer = document.querySelector("footer");
footer.style.backgroundColor = "pink";

let copyRight = document.createElement("p");
copyRight.innerHTML = "Juliette " + thisYear;

footer.appendChild(copyRight);

let skills = ["Creativity", "Adaptation", "Negotiation"];

let skillsSection = document.getElementById("skillsSection");
console.log(skillsSection);
//skillsSection.style.backgroundColor = "blue";

let skillsList = document.getElementById("skillsList");
console.log(skillsList);

for (i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  console.log(skill.innerText);
  skillsList.appendChild(skill);
}
