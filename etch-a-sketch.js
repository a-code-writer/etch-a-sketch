let container = document.getElementById('head_container')


for (let i = 0; i < 64 ; i++) {
    const div = document.createElement('div');
    //div.textContent = 'Hello'
    div.id = `div_${i}`;
    div.className = 'squares';
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = 'black';
    }
    )
    container.appendChild(div);
  }

  let resetBtn = document.getElementById('reset');
  let square = document.getElementsByClassName('squares');
  
resetBtn.addEventListener('click', () => {
  document.square.style.backgroundColor = '#8f8f8f';
})
