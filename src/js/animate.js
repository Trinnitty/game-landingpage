import checkCollisions from './checkCollisions.js';
import checkCollisionsHero from './checkCollisionsHero.js';
import game from './main.js';
// create animation function
export default function animate() {
	window.requestAnimationFrame( animate );
	game.background.draw();
	game.hero.fly();
	game.hero.pillPool.create();
	game.enemy.forEach((item)=>item.draw());	
	game.boxPills.create();
	checkCollisions();
	checkCollisionsHero();	
}