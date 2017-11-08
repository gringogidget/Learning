//this game will have only 1 state
var GameState = {

  //initiate some game-level settings
  init: function() {
  	//scaling options
  	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  	this.scale.pageAlignHorizontally = true;
  	this.scale.pageAlignVertically = true;
  },
  //load the game assets before the game starts
  preload: function() {
    this.load.image('backyard', 'assets/images/backyard.png');    
    this.load.image('apple', 'assets/images/apple.png');    
    this.load.image('candy', 'assets/images/candy.png');    
    this.load.image('rotate', 'assets/images/rotate.png');    
    this.load.image('toy', 'assets/images/rubber_duck.png');    
    this.load.image('arrow', 'assets/images/arrow.png');   
    this.load.spritesheet('pet', 'assets/images/pet.png', 97, 83, 5, 1, 1); 
  },
  //executed after everything is loaded
  create: function() {      
  	this.background = this.game.add.sprite(0, 0, 'backyard');

  	this.pet = this.game.add.sprite(100, 400, 'pet');
  	this.pet.anchor.setTo(0.5);

  	//custom properties
  	this.pet.customParams = {health: 100, fun: 100};

  	this.apple = this.game.add.sprite(72, 570, 'apple');
  	this.candy = this.game.add.sprite(144, 570, 'candy');
  	this.toy = this.game.add.sprite(216, 570, 'toy');
  	this.rotate = this.game.add.sprite(288, 570, 'rotate');

  },

  
};

//initiate the Phaser framework
var game = new Phaser.Game(360, 640, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');