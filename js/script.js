let body = document.querySelector('body');
let displayCodeField = document.querySelector('.code-display');
let button = document.querySelector('.button');
let autoBtn = document.querySelector('.manual-auto');
let currentDelayTime = document.querySelector('.current-delay-time');
let timeInput = document.querySelector('.delay-time');

let stopId;
let blinkStop;



let timeSet = () => captureInputValue();

function captureInputValue() {

	let timeValue = Number(timeInput.value);

	if(timeValue > 60) {
		timeInput.value = '60';
		timeValue = 60;
		return timeValue
	}else {
		if(timeValue < 1) {
			timeInput.value = '1';
			timeValue = 1;
			return timeValue;
		}else {
			return timeValue
		}
	}
}


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
  
  return randHexColorCode;
};

autoBtn.addEventListener('click', actionToggle);

let isAuto = false;

function actionToggle() {
	if(!isAuto) {
		autoBtn.innerHTML = 'Set to Manual';
		timeInput.removeAttribute('disabled', '');
		currentDelayTime.removeAttribute('disabled', '');
		button.setAttribute('disabled', '');
		blinkStop = setInterval(blink, 500)
		setTimeout(runAuto =() => {
	
			let randHexColorCode = randomValue();

			body.style.background = `#${randHexColorCode}`;
			displayCodeField.innerHTML = `Hex Color Code: #${randHexColorCode}`;
			
			stopId = setTimeout(runAuto, 1000 * timeSet());
					
			blinking.innerHTML = timeSet();		

}, 1000 * timeSet())
		
		isAuto = true;
	}else {
		autoBtn.innerHTML = 'Set to Auto';
		timeInput.setAttribute('disabled', '');
		currentDelayTime.setAttribute('disabled', '');
		button.removeAttribute('disabled', '');
		clearTimeout(blinkStop);
		clearTimeout(stopId);
		isAuto = false;
	}
}


let blinking = document.querySelector('.a');
	
	function blink() {
		blinking.classList.toggle('blink')
	}
