let container = document.getElementById('head_container')


for (let i = 0; i < 64 ; i++) {
    const div = document.createElement('div');
    div.textContent = 'Hello'
    div.id = `div_${i}`;
    div.className = 'squares';
    div.addEventListener('hover', () => {
      div.style.backgroundColor
    }
    )
    container.appendChild(div);
    
  }

