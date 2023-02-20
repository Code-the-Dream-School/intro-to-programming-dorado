let today = new Date();

let thisYear = today.getFullYear();

let footer = document.querySelector("footer");

let copyright = document.createElement("p");

copyright.innerHTML =`Shaun Zulu ${thisYear}`;

footer.appendChild(copyright);

let skills = ["Building Computers", "Diagnosing Computers", "Working on Cars"];

let skillsSection = document.querySelector("#skills");

let skillsList = skillsSection.querySelector("ul");

for (i=0; i < skills.length; i++){
let skill = document.createElement("li");

skill.innerHTML = skills[i];

skillsList.appendChild(skill);
}

let messageForm = document.getElementById("leave_message");


messageForm.addEventListener("submit", (event)=>{
event.preventDefault();
let messageForm = event.target;

let enterName = event.target.name.value;
let enterEmail = event.target.email.value;
let enterMessage = event.target.message.value;

console.log(enterName);
console.log(enterEmail);
console.log(enterMessage);

			//Display Messages in List
let messageSection = document.getElementById("messages");

let messageList = messageSection.querySelector("ul");

let newMessage = document.createElement("li");

newMessage.innerHTML =`<a href= "mailto:${enterEmail}">${enterName}</a>
			<span>${enterMessage}</span>
`;
				//Removing Button
let removeButton = document.createElement("button");

removeButton.type= "button";
removeButton.innerText = "remove";

removeButton.addEventListener("click", (event)=>{

let entry = removeButton.parentNode;
entry.remove();
});

messageList.appendChild(newMessage);
messageList.appendChild(removeButton);


messageForm.reset();

});
			//URL
let gitHubRequest = new XMLHttpRequest();
	gitHubRequest.open("GET", "https://api.github.com/users/Raven1223/repos", true);
		gitHubRequest.send();

			//Handle Response from Server
gitHubRequest.onload = function() {
		let repositories = JSON.parse(this.response);
			console.log(repositories);

			//Display Repositories in List
let projectSection = document.getElementById("projects");
let projectList = projectSection.querySelector("ul");

for(let i=0; i< repositories.length; i++){
	let project = document.createElement("li");

	project.innerHTML = `<a href="https://www.github.com/Raven1223/${repositories[i].name}">`
	+ repositories[i].name + '</a>';

	projectList.appendChild(project);
}

}




