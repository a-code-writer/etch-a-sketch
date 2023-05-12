let div1 = document.createElement("div");
document.body.style.display = 'flex';

let divText = document.createTextNode("Hello"); 

div1.appendChild(divText);  

let container = document.getElementById('head_container')
container.style.display = 'flex'
container.style.flexWrap = 'wrap'
container.style.maxHeight = '400px'
container.style.maxWidth = '400px'

console.log(container)  
container.appendChild(divText);

for (let i = 0; i < 50 ; i++) {
    const div = document.createElement('div');
    div.textContent = 'Hello'
    div.id = `div_${i}`;
    container.appendChild(div);

  }

