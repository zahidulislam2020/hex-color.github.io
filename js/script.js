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
	let randomValue1 = Math.floor(Math.random() * hexNumAndAlph.length);
	let randomValue2 = Math.floor(Math.random() * hexNumAndAlph.length);
	let randomValue3 = Math.floor(Math.random() * hexNumAndAlph.length);
	let randomValue4 = Math.floor(Math.random() * hexNumAndAlph.length);
	let randomValue5 = Math.floor(Math.random() * hexNumAndAlph.length);
	let randomValue6 = Math.floor(Math.random() * hexNumAndAlph.length);
  
	return [hexNumAndAlph[randomValue1], hexNumAndAlph[randomValue2], hexNumAndAlph[randomValue3], hexNumAndAlph[randomValue4], hexNumAndAlph[randomValue5], hexNumAndAlph[randomValue6]];
}