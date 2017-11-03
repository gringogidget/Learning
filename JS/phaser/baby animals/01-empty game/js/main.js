//this game will have only 1 state
var GameState = {
  //load the game assets before the game starts
  preload: function() {
    this.game.load.image('background', 'assets/images/background.png');
    this.game.load.image('arrow', 'assets/images/arrow.png');
    this.game.load.image('chicken', 'assets/images/chicken.png');
    this.game.load.image('horse', 'assets/images/horse.png');
    this.game.load.image('alien', 'assets/images/alien.png'); // was pig in tutorial
    this.game.load.image('sheep', 'assets/images/sheep3.png');

  },
  //executed after everything is loaded
  create: function() {

    //scaling options
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    //have the game centered horizontally
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    //create a sprite for the background
    this.background = this.game.add.sprite(0, 0, 'background')

    this.alien = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'alien');
    this.alien.anchor.setTo(0.5);

    //enable user input on sprite
    this.alien.inputEnabled = true;
    this.alien.input.pixelPerfectClick = true;
    this.alien.events.onInputDown.add(this.animateAnimal, this);

    //left arrow
    this.leftArrow = this.game.add.sprite(60, this.game.world.centerY, 'arrow');
    this.leftArrow.anchor.setTo(0.5);
    this.leftArrow.scale.x = -1;
    this.leftArrow.customParams = {direction: -1};

    //left arrow allow user input
    this.leftArrow.inputEnabled = true;
    this.leftArrow.input.pixelPerfectClick = true;
    this.leftArrow.events.onInputDown.add(this.switchAnimal, this);

    //right arrow
    this.rightArrow = this.game.add.sprite(580, this.game.world.centerY, 'arrow');
    this.rightArrow.anchor.setTo(0.5);
    this.rightArrow.customParams = {direction: 1};

    //right arrow user input
    this.rightArrow.inputEnabled = true;
    this.rightArrow.input.pixelPerfectClick = true;
    this.rightArrow.events.onInputDown.add(this.switchAnimal, this);

  },
  //this is executed multiple times per second
  update: function() {
  },
  switchAnimal: function(sprite, event) {
    console.log('move animal');
  },
  animateAnimal: function(sprite, event) {
    console.log('animate animal');
  }


};

//initiate the Phaser framework
var game = new Phaser.Game(640, 360, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');
