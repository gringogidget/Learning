//this game will have only 1 state // this is a choose your character level to a game
var GameState = {
//load the game assets before the game starts
  preload: function() {
    this.load.image('background', 'assets/images/background.png');
    this.load.image('arrow', 'assets/images/arrow.png');
      
// in the sprite sheet callout, the last three numbers are height, weight, and amount of frames      
    this.load.spritesheet('abduction', 'assets/images/abduction_spritesheet.png', 267, 200, 3);
    this.load.spritesheet('scully', 'assets/images/scully_spritesheet.png', 212, 200, 3);
    this.load.spritesheet('mulder', 'assets/images/mulder_spritesheet.png', 268, 200, 3);  
    this.load.spritesheet('alien', 'assets/images/alien_spritesheet.png', 297, 200, 3);
    this.load.audio('arrowSound', ['assets/audio/arrow.ogg', 'assets/audio/arrow.mp3']);
    this.load.audio('scullySound', ['assets/audio/scully.ogg', 'assets/audio/scully.mp3']);
    this.load.audio('alienSound', ['assets/audio/alien.ogg', 'assets/audio/alien.mp3']);
    this.load.audio('mulderSound', ['assets/audio/mulder.ogg', 'assets/audio/mulder.mp3']);
 
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
    
//group for animals
    var animalData = [
      {key: 'abduction', text: '👽', audio: 'arrowSound'},
      {key: 'scully', text: 'Sculder', audio: 'scullySound'},
      {key: 'alien', text: 'Cousin Harold', audio: 'alienSound'},
      {key: 'mulder', text: 'Muldi', audio: 'mulderSound'}
    
    ];

//create a group to store all animals
    this.animals = this.game.add.group();

    var self = this;    
    var animal;
    animalData.forEach(function(element){
//create each animal and save it's properties / the number 0 represents the tween frame it starts in
      animal = self.animals.create(-1000, self.game.world.centerY, element.key, 0);

//Everything that's not Phaser-related in an object
      animal.customParams = {text: element.text, sound: self.game.add.audio(element.audio)};

//anchor point set to the center of the sprite
      animal.anchor.setTo(0.5);

//create animation iterations. the 3 represents 3 frames per second, false represents that it doesn't loop
      animal.animations.add('animate', [0, 1, 2, 1, 0, 1], 3, false);

//enable input so we can touch it
      animal.inputEnabled = true;
      animal.input.pixelPerfectClick = true;
      animal.events.onInputDown.add(self.animateAnimal, self);
    });

//place first animal in the middle
    this.currentAnimal = this.animals.next();
    this.currentAnimal.position.set(this.game.world.centerX, this.game.world.centerY);

//show animal text
    this.showText(this.currentAnimal);

//left arrow
    this.leftArrow = this.game.add.sprite(60, this.game.world.centerY, 'arrow');
    this.leftArrow.anchor.setTo(0.5);
    this.leftArrow.scale.x = -1;
    this.leftArrow.customParams = {direction: -1};

//left arrow user input
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
    //this.animals.addAll('angle', 2);
  },
//play animal animation and sound
  animateAnimal: function(sprite, event) {
    sprite.play('animate');
    sprite.customParams.sound.play();
  },
//switch animal
  switchAnimal: function(sprite, event) {

//if an animation is taking place don't do anything
    if(this.isMoving) {
      return false;
    }

    this.isMoving = true;

//hide text
    this.animalText.visible = false;

    var newAnimal, endX;
//according to the arrow they pressed, which animal comes in
    if(sprite.customParams.direction > 0) {
      newAnimal = this.animals.next();
      newAnimal.x = -newAnimal.width/2;
      endX = 640 + this.currentAnimal.width/2;
    }
    else {
      newAnimal = this.animals.previous();
      newAnimal.x = 640 + newAnimal.width/2;
      endX = -this.currentAnimal.width/2;
    }

//tween animations, moving on x
    var newAnimalMovement = this.game.add.tween(newAnimal);
    newAnimalMovement.to({ x: this.game.world.centerX }, 1000);
    newAnimalMovement.onComplete.add(function()
      {
        this.isMoving = false;
        this.showText(newAnimal);
      }, this);
    newAnimalMovement.start();

    var currentAnimalMovement = this.game.add.tween(this.currentAnimal);
    currentAnimalMovement.to({ x: endX }, 1000);
    currentAnimalMovement.start();

    this.currentAnimal = newAnimal;
  },
  showText: function(animal) {
    if(!this.animalText) {
      var style = {
        font: '18pt helvetica',
        fill: '#ccccf9',
        align: 'center'
      }
      this.animalText = this.game.add.text(this.game.width/2, this.game.height * 0.85, '', style);
      this.animalText.anchor.setTo(0.5);
    }

    this.animalText.setText(animal.customParams.text);
    this.animalText.visible = true;
  }

};

//initiate the Phaser framework
var game = new Phaser.Game(640, 360, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');