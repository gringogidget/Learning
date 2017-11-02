/* Game Setup:
- Create an empty game with Phaser.Game
- The code of the game goes into a State
- Some of the main methods of State are:
    preload
    create
    update

Load the images in the preload method: this.load.image('myImage','assets/images/file.png')

Create a new Sprite to show the image on the screen: this.background = this.game.add.sprite(0,0, 'myImage')

Coordinates start on the top-left of the screen
*/

// physical pixel size of game && if browser doesn't have WEBGL, it will default to canvas

var game = new Phaser.Game(640, 360, Phaser.AUTO);

// this game is going to be a single state game
// a state is a JS object with a preload method where all assets are loaded
// once the game is loaded, the create method is called
// when create is called, assets can be quickly accessed

var GameState = {
    preload: function(){

/* this: current object we're in // load: loader object // image: duh // a key eg: 'background'
    specify the path after the key, */

    this.load.image('background', 'assets/images/background.png') 
    },
    
    create: function() {
        this.background = this.game.add.sprite(0, 0, 'background') // always gives access to the main game object // add coordinates from top left corner // in this case places the background
    },

    update: function() { // update is used many times per second as long as the game is going, a listener
    }
};

// after creating a state, you have to add it to the game

game.state.add('GameState', GameState);

// launch the game

game.state.start('GameState');

