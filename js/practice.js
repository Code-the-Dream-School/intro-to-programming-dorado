const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const pTag = document.createElement('p');
pTag.style.color = "red";
pTag.textContent = "Hey I'm red!";

container.appendChild(pTag);


const hTag = document.createElement('h3');
hTag.style.color = "blue";
hTag.textContent = "I'm a blue h3";

container.appendChild(hTag);


const myDiv = document.createElement('div');
myDiv.setAttribute('style', 'background: pink;');
// myDiv.style['border'] = black;

const h1Inside = document.createElement('h1');
h1Inside.textContent = "I'm in a div";

const pInside = document.createElement('p');
pInside.textContent = "Me too!";


myDiv.appendChild(h1Inside);

myDiv.appendChild(pInside);

container.appendChild(myDiv);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");


const btn2 = document.querySelector('#btn2');

btn2.addEventListener('click', () => {
  alert("Hello World Too");
});
