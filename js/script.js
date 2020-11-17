let body = document.querySelector('body');
let displayCodeField = document.querySelector('.code-display');
let button = document.querySelector('.button');

let hexNumAndAlph = [0, 1, 2, 3, 4, 5, 6, 6, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

button.addEventListener('click', () => {
	let randValueOfArray = randomValue();
	let randHexColorCode = '';
	
	randValueOfArray.map((value) => {
  	randHexColorCode += value;
 })

	body.style.background = `#${randHexColorCode}`;
 	displayCodeField.innerHTML = `Hex Color Code: #${randHexColorCode}`;

})

let randomValue = () => {
	
let newArray = []
	
  for(let i = 1; i <= 6; i++) {
  	var indexOfArray = Math.floor(Math.random() * hexNumAndAlph.length);
    newArray.push(hexNumAndAlph[indexOfArray])
  }
  return newArray;
}
