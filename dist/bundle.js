/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// create object to hold game images
let imagesHolder;
/* harmony default export */ __webpack_exports__["a"] = (imagesHolder = new function(){
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
}());

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Game_js__ = __webpack_require__(8);

let game;
/* harmony default export */ __webpack_exports__["a"] = (game = new __WEBPACK_IMPORTED_MODULE_0__Game_js__["a" /* default */]());


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// create  Component which will be base for other objects in the game 
class Component{
	init(x,y,width,height){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Component;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let counter = 24;
/* harmony default export */ __webpack_exports__["a"] = (counter);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return keyPress; });

// create object to hold all keycodes and set all to false
// use to determine what key was pressed and direction to move hero
let keyPress = {};


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = animate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checkCollisions_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__checkCollisionsHero_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_js__ = __webpack_require__(1);



// create animation function
function animate() {
	window.requestAnimationFrame( animate );
	__WEBPACK_IMPORTED_MODULE_2__main_js__["a" /* default */].background.draw();
	__WEBPACK_IMPORTED_MODULE_2__main_js__["a" /* default */].hero.fly();
	__WEBPACK_IMPORTED_MODULE_2__main_js__["a" /* default */].hero.pillPool.create();
	__WEBPACK_IMPORTED_MODULE_2__main_js__["a" /* default */].enemy.forEach((item)=>item.draw());	
	__WEBPACK_IMPORTED_MODULE_2__main_js__["a" /* default */].boxPills.create();
	Object(__WEBPACK_IMPORTED_MODULE_0__checkCollisions_js__["a" /* default */])();
	Object(__WEBPACK_IMPORTED_MODULE_1__checkCollisionsHero_js__["a" /* default */])();	
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export collisions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return boxCollisions; });

// create function for 2D detection collisions
function collisions(x,y,r,b,x2,y2,r2,b2){
	return !( r <= x2 || x > r2 || b <= y2 || y > b2 );
}
function boxCollisions(poze, size, poze2, size2){
	return collisions(poze[0], poze[1],
                    poze[0] + size[0], poze[1] + size[1],
                    poze2[0], poze2[1],
                    poze2[0] + size2[0], poze2[1] + size2[1]);
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = countEnemy;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__count_js__ = __webpack_require__(3);


function countEnemy(){
	let count = document.getElementById('count-enemy');
	count.innerHTML = __WEBPACK_IMPORTED_MODULE_0__count_js__["a" /* default */];
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Enemy_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Game_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Hero_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Background_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Pill_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PillEnemy_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ObjectPool_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__countEnemy_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__count_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Sound_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__imagesHolder_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__animate_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__keypress_js__ = __webpack_require__(4);













// create major object of the game to hold all variables and objects
class Game {
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
		__WEBPACK_IMPORTED_MODULE_3__Background_js__["a" /* default */].prototype.context = this.bgContext;
		__WEBPACK_IMPORTED_MODULE_3__Background_js__["a" /* default */].prototype.canvasWidth = this.bgCanvas.width;
		__WEBPACK_IMPORTED_MODULE_3__Background_js__["a" /* default */].prototype.canvasHeight = this.bgCanvas.height;
		// set to the hero prototype
		__WEBPACK_IMPORTED_MODULE_2__Hero_js__["a" /* default */].prototype.context = this.heroContext;
		__WEBPACK_IMPORTED_MODULE_2__Hero_js__["a" /* default */].prototype.canvasWidth = this.heroCanvas.width;
		__WEBPACK_IMPORTED_MODULE_2__Hero_js__["a" /* default */].prototype.canvasHeight = this.heroCanvas.height;
	// set to the hero prototype
		__WEBPACK_IMPORTED_MODULE_0__Enemy_js__["a" /* default */].prototype.context = this.enemyContext;
		__WEBPACK_IMPORTED_MODULE_0__Enemy_js__["a" /* default */].prototype.canvasWidth = this.enemyCanvas.width;
		__WEBPACK_IMPORTED_MODULE_0__Enemy_js__["a" /* default */].prototype.canvasHeight = this.enemyCanvas.height;
// set to the pill prototype
		__WEBPACK_IMPORTED_MODULE_4__Pill_js__["a" /* default */].prototype.context = this.enemyPillContext;
		__WEBPACK_IMPORTED_MODULE_4__Pill_js__["a" /* default */].prototype.canvasWidth = this.enemyPillCanvas.width;
		__WEBPACK_IMPORTED_MODULE_4__Pill_js__["a" /* default */].prototype.canvasHeight =this.enemyPillCanvas.height;
// set to the pillEnemy prototype
		__WEBPACK_IMPORTED_MODULE_5__PillEnemy_js__["a" /* default */].prototype.context = this.enemyPillContext;
		__WEBPACK_IMPORTED_MODULE_5__PillEnemy_js__["a" /* default */].prototype.canvasWidth = this.enemyPillCanvas.width;
		__WEBPACK_IMPORTED_MODULE_5__PillEnemy_js__["a" /* default */].prototype.canvasHeight = this.enemyPillCanvas.height;
// create bg object
		this.background = new __WEBPACK_IMPORTED_MODULE_3__Background_js__["a" /* default */]();
		this.background.init(0,0);
// create hero object
		this.hero = new __WEBPACK_IMPORTED_MODULE_2__Hero_js__["a" /* default */]();
		let heroposY = this.heroCanvas.height - 60;
		let heroposX = this.heroCanvas.width/2 - 20;
		this.hero.init(heroposX, heroposY, 60, 40);
// create enemy object
		this.enemy = [];
// cover enemy on the field
		this.boxPills = new __WEBPACK_IMPORTED_MODULE_6__ObjectPool_js__["a" /* default */]();
		this.boxPills.setSize(24);
		this.boxPills.init('pillEnemy');
		// counter = 24;
		Object(__WEBPACK_IMPORTED_MODULE_7__countEnemy_js__["a" /* default */])();	
		// set music for game
		this.bgMusic = new __WEBPACK_IMPORTED_MODULE_9__Sound_js__["a" /* default */]();
		this.bgMusic.setSrc('audio/03 - HWV 56 - Why do the nations so furiously rage together.ogg');
		this.heroShoot = new __WEBPACK_IMPORTED_MODULE_9__Sound_js__["a" /* default */]();
		this.heroShoot.setSrc('audio/stomp.wav');
		this.enemyShoot = new __WEBPACK_IMPORTED_MODULE_9__Sound_js__["a" /* default */]();
		this.enemyShoot.setSrc('audio/key.wav');

		this.musicWin = new __WEBPACK_IMPORTED_MODULE_9__Sound_js__["a" /* default */]();
		this.musicWin.setSrc('audio/win music 1.wav');
		this.musicGameover = new __WEBPACK_IMPORTED_MODULE_9__Sound_js__["a" /* default */]();
		this.musicGameover.setSrc('audio/Game Over III.ogg');

		this.heroExplosion = new __WEBPACK_IMPORTED_MODULE_9__Sound_js__["a" /* default */]();
		this.heroExplosion.setSrc('audio/00562.mp3');
		this.enemyExplosion = new __WEBPACK_IMPORTED_MODULE_9__Sound_js__["a" /* default */]();
		this.enemyExplosion.setSrc('audio/00549.mp3');
// this.explosionEnemy = new Explotion(imagesHolder.explotion, [0,1,2,3,4,5,6]);
}
	createEnemy(){
		let width = __WEBPACK_IMPORTED_MODULE_10__imagesHolder_js__["a" /* default */].enemy.width;
		let height = __WEBPACK_IMPORTED_MODULE_10__imagesHolder_js__["a" /* default */].enemy.height;
		let x = 250;
		let y = 50;
		let k = height*1.2;
		this.countEnemy = 23;
				for(let i = 0; i <= this.countEnemy; i++){
					let enemy = new __WEBPACK_IMPORTED_MODULE_0__Enemy_js__["a" /* default */]();
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
		Object(__WEBPACK_IMPORTED_MODULE_11__animate_js__["a" /* default */])();
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Game;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Pill_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PillEnemy_js__ = __webpack_require__(11);


// create object pool to reduce lag of the game 
class ObjectPool{
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
				let pill = new __WEBPACK_IMPORTED_MODULE_0__Pill_js__["a" /* default */]();
				pill.init(0,0,8,12);
				this.pool[i] = pill;
			}
		}
		if(object === 'pillEnemy'){
			for(let i = 0; i<this.size; i++){
				let pill = new __WEBPACK_IMPORTED_MODULE_1__PillEnemy_js__["a" /* default */]();
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
/* harmony export (immutable) */ __webpack_exports__["a"] = ObjectPool;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imagesHolder_js__ = __webpack_require__(0);


// create constructor for push pills
class Pill extends __WEBPACK_IMPORTED_MODULE_0__component_js__["a" /* default */]{
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
				this.context.drawImage(__WEBPACK_IMPORTED_MODULE_1__imagesHolder_js__["a" /* default */].pill, this.x, this.y, this.width, this.height);
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Pill;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imagesHolder_js__ = __webpack_require__(0);


// create enemy pill
class PillEnemy extends __WEBPACK_IMPORTED_MODULE_0__component_js__["a" /* default */]{
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
		this.context.drawImage(__WEBPACK_IMPORTED_MODULE_1__imagesHolder_js__["a" /* default */].pillEnemy, this.x, this.y, this.width, this.height);
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
/* harmony export (immutable) */ __webpack_exports__["a"] = PillEnemy;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imagesHolder_js__ = __webpack_require__(0);


// create constructor for background
class Background extends __WEBPACK_IMPORTED_MODULE_0__component_js__["a" /* default */] {
	constructor(){
		super();
		this.speed = 3;
	}
	draw(){
		this.y += this.speed;
		this.context.drawImage(__WEBPACK_IMPORTED_MODULE_1__imagesHolder_js__["a" /* default */].background, this.x, this.y);
		// repaint image on the previous img
		this.context.drawImage(__WEBPACK_IMPORTED_MODULE_1__imagesHolder_js__["a" /* default */].background, this.x, this.y - this.canvasHeight);
		// reset y coordinate if > canvasHeight 
		if(this.y >= this.canvasHeight){
			this.y = 0;
		}
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Background;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animate_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Background_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__keypress_js__ = __webpack_require__(4);




// function start game when all data loaded
function init(){
		__WEBPACK_IMPORTED_MODULE_2__main_js__["a" /* default */].init();
		__WEBPACK_IMPORTED_MODULE_2__main_js__["a" /* default */].start();
}
window.onload = function() {
    init();
  };
// create object with keycode to indicate press the button
let keyCodes = {
	32 : 'space',
	37 : 'left',
	39 : 'right',
};
// create object to hold all keycodes and set all to false
// use to determine what key was pressed and direction to move hero
for(let key in keyCodes){
	let code = keyCodes[key];
	__WEBPACK_IMPORTED_MODULE_3__keypress_js__["a" /* keyPress */][code] = false;
}
document.onkeydown = function(e){
	let keyCode = e.keyCode;
	if(keyCodes[keyCode]){
		__WEBPACK_IMPORTED_MODULE_3__keypress_js__["a" /* keyPress */][keyCodes[keyCode]] = true;
	}
};
document.onkeyup = function(e){
	let keyCode = e.keyCode;
	if(keyCodes[keyCode]){
		// e.preventDefault();
		__WEBPACK_IMPORTED_MODULE_3__keypress_js__["a" /* keyPress */][keyCodes[keyCode]] = false;
	}
};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = checkCollisions;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collission_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__count_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__countEnemy_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_js__ = __webpack_require__(1);




// check collisions enemies and hero's pills
function checkCollisions(){
		for(let i = 0; i < __WEBPACK_IMPORTED_MODULE_3__main_js__["a" /* default */].enemy.length; i++){
					let enemy = __WEBPACK_IMPORTED_MODULE_3__main_js__["a" /* default */].enemy[i];
					let poze = [];
					let size = [];
					poze.push(enemy.x);
					poze.push(enemy.y);
					size.push(enemy.width);
					size.push(enemy.height);

		for(let j = 0; j < __WEBPACK_IMPORTED_MODULE_3__main_js__["a" /* default */].hero.pillPool.pool.length; j++){
			let pill = __WEBPACK_IMPORTED_MODULE_3__main_js__["a" /* default */].hero.pillPool.pool[j];
					if(__WEBPACK_IMPORTED_MODULE_3__main_js__["a" /* default */].hero.pillPool.pool[j].inUse){
						let poze2 = [];
						let size2 = [];
						poze2.push(pill.x);
						poze2.push(pill.y);
						size2.push(pill.width);
						size2.push(pill.height);
			
					if(Object(__WEBPACK_IMPORTED_MODULE_0__collission_js__["a" /* boxCollisions */])(poze, size, poze2, size2)){
						__WEBPACK_IMPORTED_MODULE_3__main_js__["a" /* default */].enemyExplosion.play();
						__WEBPACK_IMPORTED_MODULE_3__main_js__["a" /* default */].enemyShoot.play();
						enemy.remove();
						pill.remove();
						__WEBPACK_IMPORTED_MODULE_3__main_js__["a" /* default */].hero.pillPool.pool.push((__WEBPACK_IMPORTED_MODULE_3__main_js__["a" /* default */].hero.pillPool.pool.splice(j,1))[0]);
						__WEBPACK_IMPORTED_MODULE_3__main_js__["a" /* default */].countEnemy--;
						__WEBPACK_IMPORTED_MODULE_3__main_js__["a" /* default */].enemy.splice(i,1);
						__WEBPACK_IMPORTED_MODULE_3__main_js__["a" /* default */].boxPills.get(enemy.x, enemy.y, 5);
						__WEBPACK_IMPORTED_MODULE_1__count_js__["a" /* default */]--;
						Object(__WEBPACK_IMPORTED_MODULE_2__countEnemy_js__["a" /* default */])();
						if(__WEBPACK_IMPORTED_MODULE_1__count_js__["a" /* default */] === 0){
							__WEBPACK_IMPORTED_MODULE_3__main_js__["a" /* default */].hero.pillPool.pool.forEach((item)=>{
							if(item.inUse){
								item.remove();
							}
							});	
							__WEBPACK_IMPORTED_MODULE_3__main_js__["a" /* default */].boxPills.pool.forEach((item)=>{
							if(item.inUse){
								item.remove();
							}
							});
							hero.remove();
							__WEBPACK_IMPORTED_MODULE_3__main_js__["a" /* default */].win();
							__WEBPACK_IMPORTED_MODULE_3__main_js__["a" /* default */].bgMusic.stop();
							__WEBPACK_IMPORTED_MODULE_3__main_js__["a" /* default */].musicWin.play();	
						}
					}	
				}
		}
	}
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imagesHolder_js__ = __webpack_require__(0);


// create enemy constructor
class Enemy extends __WEBPACK_IMPORTED_MODULE_0__component_js__["a" /* default */]{
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
		this.context.drawImage(__WEBPACK_IMPORTED_MODULE_1__imagesHolder_js__["a" /* default */].enemy, this.x, this.y, this.width, this.height);
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Enemy;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ObjectPool_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imagesHolder_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__keypress_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_js__ = __webpack_require__(1);





// create constructor for hero
class Hero extends __WEBPACK_IMPORTED_MODULE_0__component_js__["a" /* default */]{
	constructor(speed, pillPool, firer, counter){
		super();
		this.speed = 3;
		this.pillPool = new __WEBPACK_IMPORTED_MODULE_1__ObjectPool_js__["a" /* default */]();
		this.pillPool.setSize(30);
		this.pillPool.init('pill');
		this.firer = 15;
		this.counter = 0;
	}
	draw(){
			this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imagesHolder_js__["a" /* default */].hero, this.x, this.y, this.width, this.height);
	}
	remove(){
			this.context.clearRect(this.x, this.y, this.width, this.height);
			this.width = 0;
			this.height = 0;
	}
	fly(){
			this.counter++;
			// if key left or key right was pressed clear hero
			if(__WEBPACK_IMPORTED_MODULE_3__keypress_js__["a" /* keyPress */].left || __WEBPACK_IMPORTED_MODULE_3__keypress_js__["a" /* keyPress */].right){
				this.context.clearRect(this.x, this.y, this.width, this.height);
				if(__WEBPACK_IMPORTED_MODULE_3__keypress_js__["a" /* keyPress */].left){
					// change posittion hero to left
					this.x = this.x - this.speed;
					// if position is left border of canvas - set to 0 x coordinate and no less
					if(this.x <= 0){
						this.x = 0;
					}
				} else 	if(__WEBPACK_IMPORTED_MODULE_3__keypress_js__["a" /* keyPress */].right){
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
			if(__WEBPACK_IMPORTED_MODULE_3__keypress_js__["a" /* keyPress */].space && this.counter>=this.firer){
					__WEBPACK_IMPORTED_MODULE_4__main_js__["a" /* default */].heroShoot.play();
					this.fire();
					this.counter = 0;
			}
	}
	fire(){
		this.pillPool.get(this.x+25,this.y, 4);
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Hero;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// create constructor to set music
class Sound{
	constructor(sound){
		this.sound = document.createElement("audio");
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
	}
	setSrc(src){
		this.sound.src = src;
	}
  play(){
    this.sound.play();
  }
  stop(){
    this.sound.pause();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Sound;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = checkCollisionsHero;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collission_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_js__ = __webpack_require__(1);


// check collisions hero and enemy's pills
function checkCollisionsHero(){
		for(let j = 0; j < __WEBPACK_IMPORTED_MODULE_1__main_js__["a" /* default */].boxPills.pool.length; j++){
			let pill = __WEBPACK_IMPORTED_MODULE_1__main_js__["a" /* default */].boxPills.pool[j];
				if(__WEBPACK_IMPORTED_MODULE_1__main_js__["a" /* default */].boxPills.pool[j].inUse){
						let poze = [];
						let size = [];
						poze.push(pill.x);
						poze.push(pill.y);
						size.push(pill.width);
						size.push(pill.height);

						let hero = __WEBPACK_IMPORTED_MODULE_1__main_js__["a" /* default */].hero;
						let poze2 = [];
						let size2 = [];
						poze2.push(hero.x);
						poze2.push(hero.y);
						size2.push(hero.width+1);
						size2.push(hero.height+1);

					if(Object(__WEBPACK_IMPORTED_MODULE_0__collission_js__["a" /* boxCollisions */])(poze, size, poze2, size2)){
						__WEBPACK_IMPORTED_MODULE_1__main_js__["a" /* default */].hero.pillPool.pool.forEach((item)=>{
							if(item.inUse){
								item.remove();
							}
						});	
						hero.remove();
						pill.remove();
						__WEBPACK_IMPORTED_MODULE_1__main_js__["a" /* default */].gameover();
						__WEBPACK_IMPORTED_MODULE_1__main_js__["a" /* default */].bgMusic.stop();
						__WEBPACK_IMPORTED_MODULE_1__main_js__["a" /* default */].heroExplosion.play();
						__WEBPACK_IMPORTED_MODULE_1__main_js__["a" /* default */].musicGameover.play();
					}	
		}
	}
}


/***/ })
/******/ ]);