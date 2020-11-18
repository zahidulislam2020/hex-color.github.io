let body = document.querySelector('body');
let displayCodeField = document.querySelector('.code-display');
let button = document.querySelector('.button');

let hexNumAndAlph = [0, 1, 2, 3, 4, 5, 6, 6, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

button.addEventListener('click', () => {
	let randHexColorCode = randomValue();

	body.style.background = `#${randHexColorCode}`;
 	displayCodeField.innerHTML = `Hex Color Code: #${randHexColorCode}`;
  
})

let randomValue = () => {

	let randHexColorCode = '';
	
  for(let i = 1; i <= 6; i++) {
  	var indexOfArray = Math.floor(Math.random() * hexNumAndAlph.length);
    
    randHexColorCode += hexNumAndAlph[indexOfArray];
  }
  
  return randHexColorCode
}
