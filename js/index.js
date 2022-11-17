const today = new Date();
console.log(today); //Sun Nov 13 2022 07:59:05 GMT-0800 (Pacific Standard Time)
const thisYear = today.getFullYear();
console.log(thisYear); //2022
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
let mName = "Abebe";
copyright.innerHTML = `${mName} ${thisYear}`;
footer.appendChild(copyright);
const skills = ["HTML", "CSS", "JavaScript", "Cooking"];
// console.log(skills);
 const skillSection = document.getElementById("skills"); // Do I need this line?
const skillsList = skillSection.querySelector("ul");
    for(let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
console.log(skillsList);
