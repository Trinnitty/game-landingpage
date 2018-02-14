import Component from './component.js';
import imagesHolder from './imagesHolder.js';
// create enemy pill
export default class PillEnemy extends Component{
	constructor(inUse){
		super();
		this.inUse = false;
	}
	// create pill inuse
	spawn(x, y, speed){
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.inUse = true;
	}
	draw(){
		this.context.clearRect(this.x, this.y, this.width, this.height);
		this.y = this.y + this.speed;
		this.context.drawImage(imagesHolder.pillEnemy, this.x, this.y, this.width, this.height);
	}
	clear(){
		this.x = 0;
		this.y = 0;
		this.speed = 0;
		this.inUse = false;
	}
	remove(){
		this.context.clearRect(this.x, this.y, this.width, this.height);
		this.clear();
	}
}