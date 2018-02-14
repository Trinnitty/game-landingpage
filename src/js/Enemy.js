import Component from './component.js';
import imagesHolder from './imagesHolder.js';
// create enemy constructor
export default class Enemy extends Component{
	constructor(inUse, collision){
		super();
		this.inUse = false;
		this.collision = false;
	}
	// if not in use = false, if in use = true
	// create enemy inuse
	spawn(x, y, speed){
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.speedX = this.speed;
		this.leftCoordinate = this.x - 220;
		this.rightCoordinate = this.x + 220;
		this.inUse = true;
	}
	draw(){
		this.context.clearRect(this.x, this.y, this.width, this.height);
		this.x = this.x + this.speedX;
		if(this.collision){
			return;
		}else if(this.x <= this.leftCoordinate){
			this.speedX = this.speed;
		} else	if(this.x >= this.rightCoordinate + 2*this.width){
			this.speedX = -this.speed;
		}
		this.context.drawImage(imagesHolder.enemy, this.x, this.y, this.width, this.height);
	}
	// reset value
	clear(){
		this.x = 0;
		this.y = 0;
		this.speed = 0;
		this.speedX = 0;
		this.leftCoordinate = 0;
		this.rightCoordinate = 0;
		this.inUse = false;
	}
	// create method to remove demage enemy
	remove(){
		this.context.clearRect(this.x, this.y, this.width, this.height);
	}
}