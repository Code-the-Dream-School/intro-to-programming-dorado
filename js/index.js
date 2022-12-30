let today = new Date();

let thisYear = today.getFullYear();

let footer = document.querySelector("footer");

let copyright = document.createElement("p");

copyright.innerHTML =`Shaun Zulu ${thisYear}`

footer.appendChild(copyright);

let skills = ["Typing", "Diagnosing", "Fixing"];

let skillsSection = document.querySelector("#skills");

let skillsList = skillSection.querySelector("ul");

for (i=0; i < skills.length; i++){
let skill = document.createElement("li");

skill.innerHTML = [i];

skillsList.appendChild(skill);
}
