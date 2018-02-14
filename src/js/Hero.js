import Component from './component.js';
import ObjectPool from './ObjectPool.js';
import imagesHolder from './imagesHolder.js';
import {keyPress} from './keypress.js';
import game from './main.js';
// create constructor for hero
export default class Hero extends Component{
	constructor(speed, pillPool, firer, counter){
		super();
		this.speed = 3;
		this.pillPool = new ObjectPool();
		this.pillPool.setSize(30);
		this.pillPool.init('pill');
		this.firer = 15;
		this.counter = 0;
	}
	draw(){
			this.context.drawImage(imagesHolder.hero, this.x, this.y, this.width, this.height);
	}
	remove(){
			this.context.clearRect(this.x, this.y, this.width, this.height);
			this.width = 0;
			this.height = 0;
	}
	fly(){
			this.counter++;
			// if key left or key right was pressed clear hero
			if(keyPress.left || keyPress.right){
				this.context.clearRect(this.x, this.y, this.width, this.height);
				if(keyPress.left){
					// change posittion hero to left
					this.x = this.x - this.speed;
					// if position is left border of canvas - set to 0 x coordinate and no less
					if(this.x <= 0){
						this.x = 0;
					}
				} else 	if(keyPress.right){
									// change posittion hero to right
									this.x = this.x + this.speed;
									// if position is right border of canvas - set x coordinate to canvas.width and no more 
									if(this.x >= this.canvasWidth - this.width){
										this.x = this.canvasWidth - this.width;
									}
				}
			// redraw hero in the new position
			this.draw();	
			}
			if(keyPress.space && this.counter>=this.firer){
					game.heroShoot.play();
					this.fire();
					this.counter = 0;
			}
	}
	fire(){
		this.pillPool.get(this.x+25,this.y, 4);
	}
}