import Component from './component.js';
import imagesHolder from './imagesHolder.js';
// create constructor for push pills
export default class Pill extends Component{
	// if not in use = false, if in use = true
	constructor(inUse, collision){
		super();
		this.inUse = false;
		this.collision = false;
	}
	// create pill inuse
	spawn(x, y, speed){
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.inUse = true;
	}
	// if pill on the screen - draw, if on the screen off - push to pool object
	draw(){
		this.context.clearRect(this.x, this.y, this.width, this.height);
		this.y = this.y - this.speed;
		if(this.y <= 0 - this.height || this.collision === true){
			return true;
		} else{
				this.context.drawImage(imagesHolder.pill, this.x, this.y, this.width, this.height);
		}
	}
	// reset value
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