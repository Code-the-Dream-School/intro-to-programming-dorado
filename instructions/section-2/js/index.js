//Creates an object that stores the different date methods
var theDate = new Date(),
    thisYear = theDate.getFullYear(),
    thisMonth = theDate.getMonth(),
    date = theDate.getDate(),
    thisDay = theDate.getDate();

//Selects the footer element 
const footer = document.querySelector("footer");

//creates a new paragraph element and stores it in the variable 
const copyright = document.createElement("p");

//sets the innner HTML to the copyright element previously created to display my name and year
document.querySelector("footer").innerHTML = "© " + thisYear + " David Jaimes";

//will append the copyright element to the footer to display it "will overright the text in HTML file"
footer.appendChild(copyright);

//Creating List of Skills part
//creating an array of technical skills
var skills = ["problem-solving", "Leadership", "Web Development", "Integrated development environments (IDEs)"];

//Using DOM Selection to get id and assign it to a variable 
const skillsSection = document.getElementById("skills");

//Will get the element ul and store it in the variable
const skillsList = skillsSection.querySelector("ul");

//will get the array length
var arraylength = skills.length;

for ( var i = 0; i < arraylength; i++) {
    //will create the element "li"
    const skill = document.createElement("li");

    //will assign values from array to "li"
    skill.innerText = skills[i];

    //will append "li" to skillsList
    skillsList.appendChild(skill);
}