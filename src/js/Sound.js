
// create constructor to set music
export default class Sound{
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