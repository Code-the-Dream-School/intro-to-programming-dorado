// console.log("work");

// Getting dates
today = new Date();
thisYear = today.getFullYear();

// DOM
const footer = document.querySelector("footer");

// Create copyright paragraph and add it to footer
const copyright = document.createElement("p");
copyright.innerHTML = `Chaz Beauchamp ${thisYear}`;

footer.appendChild(copyright);

// Create array of skills
const skills = ["HTML", "JavaScript", "CSS"];

const skillsSection = document.querySelector("#skills");

const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill);
}
