const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
let mName = "Abebe";
copyright.innerHTML = `&#169; ${mName} ${thisYear}`;
footer.appendChild(copyright);
const skills = ["HTML", "CSS", "JavaScript", "Cooking"];
const skillSection = document.getElementById("skills");
const skillsList = skillSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
///exercise 4.3
const messageForm = document.getElementsByName("leave_message")[0];
messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const message = e.target.message.value;
  e.target.reset();
  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href="mailto:abetesso@gmial.com">
      ${name}</a> <span>Wrote: ${message}</span>`;
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";
  removeButton.addEventListener("click", () => {
    const entry = removeButton.parentNode;
    entry.remove();
  });
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
});
