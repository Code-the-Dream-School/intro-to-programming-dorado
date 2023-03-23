const today = new Date();
const thisYear = today.getFullYear();
const myName = "Louie";
console.log(thisYear);

//this will select the "footer" in the document
const footer = document.querySelector("footer");

//this will create a new paragraph in the document and store it in variable
const copyright = document.createElement("p");

//Using "DOM Manipulation", append the copyright element to the footer
//document.appendChild(copyright);
copyright.innerHTML = `Louie Mendoza &copy ${thisYear} &#9835`;
footer.appendChild(copyright);

const skills = [
    "Javascript",
    "HTML",
    "Music",
    "Cooking",
];

const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

const messageForm = document.forms.leave_message

messageForm.addEventListener("submit", event => {
    event.preventDefault();
    //The lines below were my lines I did with some help.

    const usersName = event.target.usersName.value
    const usersEmail = event.target.usersEmail.value
    const usersMessage = event.target.usersMessage.value

    messageList = messageSection.querySelector('ul');
    newMessage = [];
    newMessage.innerHTML = `<a href = "mailto:${usersName}>${usersEmail}` ></a > <span>${usersMessage}</span>;
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', event => {
        const entry = event.target.parentNode
        entry.remove()

    })
    reset()

    /*

    const meesageSection = document.getElementById("messages");
    const messageList = messageSelection.querySelector("ul");
    const newMessage = document.createElement("li");

    if (messageSection.childElementCount === 0) {
        messageSection.style.display = "none";
    }
    newMessage.innerHTML = `<a href = "mailto:${usersEmail}` > { $usersName }</a > <span>${usersMessage}</span>;

    const removeButton = document.createElement('button');
    removeButton.innerText = "remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", event => {
        const entry = event.target.parentNode
        entry.remove()
    })

    console.log(usersEmail, usersMessage, usersName);
    messageForm.reset();
})


messageSection.style.display = "block";
newMessage.appendChild(removeButton)
messageList.appendChild(newMessage)

const editButton = document.createElement('button');
editButton.textContent = "edit";
editButton.type = "button";

const editForm = document.createElement('form');
const editInput = document.createElement('input');
editInput.type = "text";
editInput.value = usersMessage;
const saveButton = document.createElement('button');
saveButton.textContent = "Save";
saveButton.type = "submit";
editForm.append(editInput, saveButton);

editButton.addEventListener("click"), () => {
    newMessage.replaceWith(editForm)
});

editForm.addEventListener("submit", (event) => {
    event.preventDefault():
    usersMessage = editInput.value;
    newessage.innerHTML =
    <a ref = "mailto:${usersEmail}">${usersName}</a>
    <span>says: ${usersMessage}</span>
    newMessage.appendChild(removeButton);
    newMessage.appendChild(editButton);
    editForm.remove();
};
newMessage.appendChild(editButton);
messageList.appendChild(newMlessage);
messageForm.reset();
});
//The above lines are the ones from Matt Walters session



/*
const messageForm = document.querySelector("form[name='leave_message']");
messageForm.addEventListener("submit"), (event) => {
    event.preventDefault();
    let name = event.target.name;
    let email = event.target.email;
    let message = event.target.message;
    console.log(event.target.message);
    reset()
*/




    //console.log(`Name: ${name.value}\nEmail: ${email.value}\nMessage: ${message.value}`);
    // let messageSection = document.getElementById("messages");
    //const messageList = messageSection.querySelector("ul");
    //let newMessage = document.createElement("li");
}
