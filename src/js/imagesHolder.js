// create object to hold game images
let imagesHolder;
export default imagesHolder = new function(){
	this.background = new Image();
	this.enemy = new Image();
	this.hero = new Image();
	this.pill = new Image();
	this.pillEnemy = new Image();
	this.explotion = new Image();

	this.background.src = 'images/backgrounds/back.png';
	this.enemy.src = 'images/enemyShip.png';
	this.hero.src = 'images/player.png';
	this.pill.src = 'images/spaceimg/laserGreen.png';
	this.pillEnemy.src = 'images/spaceimg/laserRed.png';
	this.explotion.src = 'images/sprites/explosionFull.png';
}();