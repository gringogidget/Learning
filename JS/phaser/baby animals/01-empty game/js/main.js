// Load the images in the preload method: this.load.image('myImage','assets/images/file.png')
// Create a new Sprite to show the image on the screen: this.background = this.game.add.sprite(0,0, 'myImage')
// Coordinates start on the top-left of the screen
// Physical pixel size of game && if browser doesn't have WEBGL, it will default to canvas
// This game is going to be a single state game a state is a JS object with a preload method where all assets are loaded once the game is loaded, the create method is called when create is called, assets can be quickly accessed

var game = new Phaser.Game(640, 360, Phaser.AUTO);
var GameState = {
    preload: function(){

// this, well it loads the images:
    this.load.image('background', 'assets/images/background.png') 
    this.load.image('alien', 'assets/images/alien.png')
    this.load.image('mulder', 'assets/images/mulder.png') 
    this.load.image('scully', 'assets/images/scully.png') 
    this.load.image('skinner', 'assets/images/skinner.png') 
    },
  
// to center an image, anchor it with a 0.5 y and x axis 0.5, 0.5 or just 0.5 alone
// to specify scale, use scale.setTo() < put number inside
// you can scale an image on X and Y by specifying two numbers 
// to flip, you can set a negative number in scale and it will flip on X or Y
// to rotate, use .angle, 0 is default eg, -45;
    create: function() {
        this.background = this.game.add.sprite(0, 0, 'background') 
        this.alien = this.game.add.sprite (this.game.world.centerX, this.game.world.centerY, 'alien');
        this.alien.anchor.setTo(0.5);
//        this.alien.scale.setTo(0.5); 
//        this.alien.angle = -45;

        
// Always gives access to the main game object // add coordinates from top left corner // in this case places the background for you
    },

// Update is used many times per second as long as the game is going, a listener
    update: function() { 
//        this.alien.angle += 0.5; to rotate slowly
    }
};

// After creating a state, you have to add it to the game
game.state.add('GameState', GameState);

// Launch the game
game.state.start('GameState');