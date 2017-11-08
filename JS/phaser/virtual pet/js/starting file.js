//this game will have only 1 state
var GameState = {

  //initiate some game-level settings
  init: function() {

  },
  //load the game assets before the game starts
  preload: function() {
    
  },
  //executed after everything is loaded
  create: function() {      
  
  },

  
};

//initiate the Phaser framework
var game = new Phaser.Game(360, 640, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');