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
    this.background.inputEnabled = true;
    this.background.events.onInputDown.add(this.placeItem, this);

    this.pet = this.game.add.sprite(100, 400, 'pet');
    this.pet.anchor.setTo(0.5);

    //custom properties
    this.pet.customParams = {health: 100, fun: 100};

    //draggable pet
    this.pet.inputEnabled = true;
    this.pet.input.enableDrag();

    this.apple = this.game.add.sprite(72, 570, 'apple');
    this.apple.anchor.setTo(0.5);
    this.apple.inputEnabled = true;
    this.apple.customParams = {health: 20};
    this.apple.events.onInputDown.add(this.pickItem, this);

    this.candy = this.game.add.sprite(144, 570, 'candy');
    this.candy.anchor.setTo(0.5);
    this.candy.inputEnabled = true;
    this.candy.customParams = {health: -10, fun: 10};
    this.candy.events.onInputDown.add(this.pickItem, this);

    this.toy = this.game.add.sprite(216, 570, 'toy');
    this.toy.anchor.setTo(0.5);
    this.toy.inputEnabled = true;
    this.toy.customParams = {fun: 20};
    this.toy.events.onInputDown.add(this.pickItem, this);

    this.rotate = this.game.add.sprite(288, 570, 'rotate');
    this.rotate.anchor.setTo(0.5);
    this.rotate.inputEnabled = true;
    this.rotate.events.onInputDown.add(this.rotatePet, this);

    this.buttons = [this.apple, this.candy, this.toy, this.rotate];

    //nothing is selected
    this.selectedItem = null;

    //the user interface (UI) is not blocked at the start
    this.uiBlocked = false;

  },
  pickItem: function(sprite, event) {
    
    //if the UI is blocked we can't pick an item
    if(!this.uiBlocked) {
      console.log('pick item');

      this.clearSelection();

      //alpha to indicate selection
      sprite.alpha = 0.4;

      this.selectedItem = sprite;
    }
  },
  rotatePet: function(sprite, event) {

    if(!this.uiBlocked) {     

      //we want the user interface (UI) to be blocked until the rotation ends
      this.uiBlocked = true;

      this.clearSelection();

      //alpha to indicate selection
      sprite.alpha = 0.4;

      var petRotation = this.game.add.tween(this.pet);

      //make the pet do two loops
      petRotation.to({angle: '+720'}, 1000);

      petRotation.onComplete.add(function(){
        //release the UI
        this.uiBlocked = false;

        sprite.alpha = 1;

        //increse the fun of the pet
        this.pet.customParams.fun += 10;
        console.log(this.pet.customParams.fun);
      }, this);

      //start the tween animation
      petRotation.start();
    }

    
  },
  clearSelection: function() {

    //remove transparency from all buttons
    this.buttons.forEach(function(element, index){
      element.alpha = 1;
    });

    //we are not selecting anything now
    this.selectedItem = null;
  },
  placeItem: function(sprite, event) {
      
      if(this.selectedItem && !this.uiBlocked) {    
      var x = event.position.x;
      var y = event.position.y;
      
      var newItem = this.game.add.sprite(x, y, this.selectedItem.key);
      newItem.anchor.setTo(0.5);
      newItem.customParams = this.selectedItem.customParams;     
          
    this.uiBlocked = true;
    var petMovement = this.game.add.tween(this.pet);
    petMovement.to({x: x, y: y}, 700);
    petMovement.onComplete.add(function(){
    
    newItem.destroy();
        
    this.uiBlocked = false;
        
    var stat;
    for(stat in newItem.customParams) {
        if(newItem.customParams.hasOwnProperty(stat)) {
            console.log(stat);
            this.pet.customParams[stat] += newItem.customParams[stat];
        }
    }
        
    }, this);

    petMovement.start();

}
}
};

//initiate the Phaser framework
var game = new Phaser.Game(360, 640, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');



























