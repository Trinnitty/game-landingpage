import animate from './animate.js';
import Background from './Background.js';
import game from './main.js';
import {keyPress} from './keypress.js';
// function start game when all data loaded
function init(){
		game.init();
		game.start();
}
window.onload = function() {
    init();
  };
// create object with keycode to indicate press the button
let keyCodes = {
	32 : 'space',
	37 : 'left',
	39 : 'right',
};
// create object to hold all keycodes and set all to false
// use to determine what key was pressed and direction to move hero
for(let key in keyCodes){
	let code = keyCodes[key];
	keyPress[code] = false;
}
document.onkeydown = function(e){
	let keyCode = e.keyCode;
	if(keyCodes[keyCode]){
		keyPress[keyCodes[keyCode]] = true;
	}
};
document.onkeyup = function(e){
	let keyCode = e.keyCode;
	if(keyCodes[keyCode]){
		// e.preventDefault();
		keyPress[keyCodes[keyCode]] = false;
	}
};