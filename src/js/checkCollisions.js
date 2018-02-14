import {collisions, boxCollisions} from './collission.js';
import counter from './count.js';
import countEnemy from './countEnemy.js';
import game from './main.js';
// check collisions enemies and hero's pills
export default function checkCollisions(){
		for(let i = 0; i < game.enemy.length; i++){
					let enemy = game.enemy[i];
					let poze = [];
					let size = [];
					poze.push(enemy.x);
					poze.push(enemy.y);
					size.push(enemy.width);
					size.push(enemy.height);

		for(let j = 0; j < game.hero.pillPool.pool.length; j++){
			let pill = game.hero.pillPool.pool[j];
					if(game.hero.pillPool.pool[j].inUse){
						let poze2 = [];
						let size2 = [];
						poze2.push(pill.x);
						poze2.push(pill.y);
						size2.push(pill.width);
						size2.push(pill.height);
			
					if(boxCollisions(poze, size, poze2, size2)){
						game.enemyExplosion.play();
						game.enemyShoot.play();
						enemy.remove();
						pill.remove();
						game.hero.pillPool.pool.push((game.hero.pillPool.pool.splice(j,1))[0]);
						game.countEnemy--;
						game.enemy.splice(i,1);
						game.boxPills.get(enemy.x, enemy.y, 5);
						counter--;
						countEnemy();
						if(counter === 0){
							game.hero.pillPool.pool.forEach((item)=>{
							if(item.inUse){
								item.remove();
							}
							});	
							game.boxPills.pool.forEach((item)=>{
							if(item.inUse){
								item.remove();
							}
							});
							hero.remove();
							game.win();
							game.bgMusic.stop();
							game.musicWin.play();	
						}
					}	
				}
		}
	}
}