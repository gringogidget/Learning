/* Game Setup:
- Create an empty game with Phaser.Game
- The code of the game goes into a State
- Some of the main methods of State are:
    preload
    create
    update
*/

// physical pixel size of game && if browser doesn't have WEBGL, it will default to canvas

var game = new Phaser.Game(640, 360, Phaser.AUTO);

// this game is going to be a single state game
// a state is a JS object with a preload method where all assets are loaded
// once the game is loaded, the create method is called
// when create is called, assets can be quickly accessed

var GameState = {
    preload: function(){

    },
    
    create: function() {
        
    },
    // update is used many times per second as long as the game is going, a listener
    update: function() { 
    }
};

// after creating a state, you have to add it to the game

game.state.add('GameState', GameState);

// launch the game

game.state.start('GameState');

