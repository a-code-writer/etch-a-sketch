let div1 = document.createElement("div");
document.body.style.display = 'flex';

let divText = document.createTextNode("Hello");
div1.style.maxWidth = '136px'
div1.style.alignSelf = 'center'

div1.appendChild(divText);  

let container = document.getElementById('head_container')

console.log(container)  
container.appendChild(divText);


