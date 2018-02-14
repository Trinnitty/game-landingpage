// create  Component which will be base for other objects in the game 
export default class Component{
	init(x,y,width,height){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
}