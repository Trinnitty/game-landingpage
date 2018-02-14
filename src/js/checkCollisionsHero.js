import {collisions, boxCollisions} from './collission.js';
import game from './main.js';
// check collisions hero and enemy's pills
export default function checkCollisionsHero(){
		for(let j = 0; j < game.boxPills.pool.length; j++){
			let pill = game.boxPills.pool[j];
				if(game.boxPills.pool[j].inUse){
						let poze = [];
						let size = [];
						poze.push(pill.x);
						poze.push(pill.y);
						size.push(pill.width);
						size.push(pill.height);

						let hero = game.hero;
						let poze2 = [];
						let size2 = [];
						poze2.push(hero.x);
						poze2.push(hero.y);
						size2.push(hero.width+1);
						size2.push(hero.height+1);

					if(boxCollisions(poze, size, poze2, size2)){
						game.hero.pillPool.pool.forEach((item)=>{
							if(item.inUse){
								item.remove();
							}
						});	
						hero.remove();
						pill.remove();
						game.gameover();
						game.bgMusic.stop();
						game.heroExplosion.play();
						game.musicGameover.play();
					}	
		}
	}
}
