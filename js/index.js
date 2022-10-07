// Assignment

let today = new Date();

let thisYear = today.getFullYear();

let footer = document.querySelector("footer");

let copyright = document.createElement("p");

document.getElementById('copyright').innerHTML = thisYear, " Scott Feichter";

document.getElementById("copyright").style.color = "white";


footer.appendChild(copyright);

let skills = ["Honest", "Dependable", "Energenic"];

let skillsSection = document.getElementById("skills");

let skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill); 
}
