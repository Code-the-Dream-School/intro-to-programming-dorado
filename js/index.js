const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = 'Anna Pestova ' + thisYear;
footer.appendChild(copyright)
let skills = ['Computer proficiency', 'Communication skills', 'Problem-solving abilities', 'Organizational know-how'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill)
}
