import Enemy from './Enemy.js';
import Game from './Game.js';
import Hero from './Hero.js';
import Background from './Background.js';
import Pill from './Pill.js';
import PillEnemy from './PillEnemy.js';
import ObjectPool from './ObjectPool.js';
import countEnemy from './countEnemy.js';
import counter from './count.js';
import Sound from './Sound.js';
import imagesHolder from './imagesHolder.js';
import animate from './animate.js';
import {keyPress} from './keypress.js';
// create major object of the game to hold all variables and objects
export default class Game {
	constructor(){
	}
	init(){
		this.bgCanvas = document.getElementById('background');
		this.bgContext = this.bgCanvas.getContext('2d');

		this.heroCanvas = document.getElementById('hero');
		this.heroContext = this.heroCanvas.getContext('2d');

		this.enemyCanvas = document.getElementById('enemy');
		this.enemyContext = this.enemyCanvas.getContext('2d');

		this.enemyPillCanvas = document.getElementById('enemypill');
		this.enemyPillContext = this.enemyCanvas.getContext('2d');
	// set to the bg prototype 
		Background.prototype.context = this.bgContext;
		Background.prototype.canvasWidth = this.bgCanvas.width;
		Background.prototype.canvasHeight = this.bgCanvas.height;
		// set to the hero prototype
		Hero.prototype.context = this.heroContext;
		Hero.prototype.canvasWidth = this.heroCanvas.width;
		Hero.prototype.canvasHeight = this.heroCanvas.height;
	// set to the hero prototype
		Enemy.prototype.context = this.enemyContext;
		Enemy.prototype.canvasWidth = this.enemyCanvas.width;
		Enemy.prototype.canvasHeight = this.enemyCanvas.height;
// set to the pill prototype
		Pill.prototype.context = this.enemyPillContext;
		Pill.prototype.canvasWidth = this.enemyPillCanvas.width;
		Pill.prototype.canvasHeight =this.enemyPillCanvas.height;
// set to the pillEnemy prototype
		PillEnemy.prototype.context = this.enemyPillContext;
		PillEnemy.prototype.canvasWidth = this.enemyPillCanvas.width;
		PillEnemy.prototype.canvasHeight = this.enemyPillCanvas.height;
// create bg object
		this.background = new Background();
		this.background.init(0,0);
// create hero object
		this.hero = new Hero();
		let heroposY = this.heroCanvas.height - 60;
		let heroposX = this.heroCanvas.width/2 - 20;
		this.hero.init(heroposX, heroposY, 60, 40);
// create enemy object
		this.enemy = [];
// cover enemy on the field
		this.boxPills = new ObjectPool();
		this.boxPills.setSize(24);
		this.boxPills.init('pillEnemy');
		// counter = 24;
		countEnemy();	
		// set music for game
		this.bgMusic = new Sound();
		this.bgMusic.setSrc('audio/03 - HWV 56 - Why do the nations so furiously rage together.ogg');
		this.heroShoot = new Sound();
		this.heroShoot.setSrc('audio/stomp.wav');
		this.enemyShoot = new Sound();
		this.enemyShoot.setSrc('audio/key.wav');

		this.musicWin = new Sound();
		this.musicWin.setSrc('audio/win music 1.wav');
		this.musicGameover = new Sound();
		this.musicGameover.setSrc('audio/Game Over III.ogg');

		this.heroExplosion = new Sound();
		this.heroExplosion.setSrc('audio/00562.mp3');
		this.enemyExplosion = new Sound();
		this.enemyExplosion.setSrc('audio/00549.mp3');
// this.explosionEnemy = new Explotion(imagesHolder.explotion, [0,1,2,3,4,5,6]);
}
	createEnemy(){
		let width = imagesHolder.enemy.width;
		let height = imagesHolder.enemy.height;
		let x = 250;
		let y = 50;
		let k = height*1.2;
		this.countEnemy = 23;
				for(let i = 0; i <= this.countEnemy; i++){
					let enemy = new Enemy();
					enemy.init(0,0,50,30);
					this.enemy[i] = enemy;
					this.enemy[i].spawn(x,y,5);
					x = x + width;
					let len = this.enemy.length;
					if(len%8 === 0){
						y = y+k;
						x = 250;
					}
				}
	}
	start(){
		this.bgMusic.play();
		this.hero.draw();
		this.createEnemy();
		animate();
	}
	gameover(){
		let gameover = document.getElementById('gameover');
		gameover.classList.toggle('hidden');
		let restart = document.getElementById('restart');
		restart.classList.toggle('hidden');
		let score = document.getElementById('score');
		score.classList.toggle('hidden');
		let enemy = document.getElementById('enemy');
		enemy.classList.toggle('hidden');

		this.bgContext.clearRect(0, 0, this.bgCanvas.width, this.bgCanvas.height);
		this.heroContext.clearRect(0, 0, this.heroCanvas.width, this.heroCanvas.height);
		this.bgContext.clearRect(0, 0, this.bgCanvas.width, this.bgCanvas.width);
	}
	win(){
		let win = document.getElementById('win');
		win.classList.toggle('hidden');
		let restart = document.getElementById('restart');
		restart.classList.toggle('hidden');

		let score = document.getElementById('score');
		score.classList.remove('display');
		score.classList.add('hidden');

		let enemy = document.getElementById('enemy');
		enemy.classList.toggle('hidden');

		this.bgContext.clearRect(0, 0, this.bgCanvas.width, this.bgCanvas.height);
		this.heroContext.clearRect(0, 0, this.heroCanvas.width, this.heroCanvas.height);
		this.bgContext.clearRect(0, 0, this.bgCanvas.width, this.bgCanvas.width);
	}
}