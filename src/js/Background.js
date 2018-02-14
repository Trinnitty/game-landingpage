import Component from './component.js';
import imagesHolder from './imagesHolder.js';
// create constructor for background
export default class Background extends Component {
	constructor(){
		super();
		this.speed = 3;
	}
	draw(){
		this.y += this.speed;
		this.context.drawImage(imagesHolder.background, this.x, this.y);
		// repaint image on the previous img
		this.context.drawImage(imagesHolder.background, this.x, this.y - this.canvasHeight);
		// reset y coordinate if > canvasHeight 
		if(this.y >= this.canvasHeight){
			this.y = 0;
		}
	}
}