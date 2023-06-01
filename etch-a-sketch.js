//establishes container div
let container = document.getElementById('head_container')


//creates the grid, gives each square it's own id
for (let i = 0; i < 64 ; i++) {
    const div = document.createElement('div');
    div.id = `div_${i}`;
    div.className = 'squares';
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = 'black';
    }
    )
    container.appendChild(div);
  }

//establishes reset button
let resetBtn = document.getElementById('reset');

//selects the squares in the grid
let square = document.getElementsByClassName('squares');

//event listener for reset button not working right now.  
resetBtn.addEventListener('mouseover', () => {
  for (const square of document.getElementsByClassName('squares')) {
    square.style.backgroundColor = '#8f8f8f';
  }
});