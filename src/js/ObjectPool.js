import Pill from './Pill.js';
import PillEnemy from './PillEnemy.js';
// create object pool to reduce lag of the game 
export default class ObjectPool{
	constructor(pool,size){
		this.size = 0;
		// let pool = [];
		this.pool = [];
	}
	setSize(size){
		this.size = size;
	}
	// push pills to array pool
	init(object){
		if(object === 'pill'){
			for(let i = 0; i<this.size; i++){
				let pill = new Pill();
				pill.init(0,0,8,12);
				this.pool[i] = pill;
			}
		}
		if(object === 'pillEnemy'){
			for(let i = 0; i<this.size; i++){
				let pill = new PillEnemy();
				pill.init(0,0,8,8);
				this.pool[i] = pill;
			}
		}
	}
	// get pill
	get(x,y,speed){
		if(!this.pool[this.size-1].inUse){
			this.pool[this.size-1].spawn(x,y,speed);
			this.pool.unshift(this.pool.pop());
		}
	}
	create(){
		for(let i = 0; i<this.size; i++){
			if(this.pool[i].inUse){
				if(this.pool[i].draw()){
					this.pool[i].clear();
					this.pool.push((this.pool.splice(i,1))[0]);
				}
			}else break;
		}
	}
}