import counter from './count.js';

export default function countEnemy(){
	let count = document.getElementById('count-enemy');
	count.innerHTML = counter;
}
