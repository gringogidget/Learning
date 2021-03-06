- Use the `init` method to define game settings
- Spritesheets have a `margin` around them, and a `spacing` between frames
- Keep variables in the `this` context to access them from different methods
<br><br>
- To enable input on a sprite set `inputEnabled` to `true`
- to enable dragging first enable input, then call `enableDrag()`
<br><br>
- Modify the transparency of a sprite with the `alpha` property
- When the user clicks on an item, we keep the selected item in a variable
- Block the UI to make it work in the way you want
<br><br>
- Make the pet turn around once by adding 360 degrees
- Add an event listener for when the animation completes
- Block the UI to block other actions
<br><br>
- To block ui in a function, use `this.uiBlocked = true;`
- To tween the sprite to the clicked item: `var petMovement = this.game.add.tween(this.pet);`
- Pet moves to the item at a specific speed, it gets the location of the user click by using the second callback paramater and creates a new item at that location `petMovement.to({x: x, y: y}, 700);`
- To unblock the ui on completion: `this.uiBlocked = false;`
- To "destroy" the item after the sprite gets to it (eating the item), Phaser uses `newItem.destroy();`
<br><br>
- Take `this.pet = this.game.add.sprite(100, 400, 'pet');`. Add the number of the image in the sequence of the spritesheet to display that particular image: `this.pet = this.game.add.sprite(100, 400, 'pet', 3);`
- To add animation, add: `this.pet.animations.add('funnyfaces', [1, 2, 3, 2, 1], 7, false)`. The numbers signify which order for the sprite to animate in, this `7` represents speed. The higher the number, the faster the tween. False signifies that the animation plays once. True would make the animation infinite.
- Play animation when sprite gets to item and consumes/destroys it: `this.pet.animations.play('funnyfaces');`. Using the key funnyfaces
<br><br>
- To add text: `this.game.add.text(10, 20, 'Health:', style);`
- To style text: `var style = {font: '20px Arial', fill: '#fff'};` (style is called at the end)
- Refresh stats at specific times using `this.refreshStats();`
<br><br>
- Implement a timer loop by decreasing the health every 5 seconds `this.statsDecreaser = this.game.time.events.loop(Phaser.Timer.SECOND * 5, this.reduceProperties, this);`
- Implement a timed action `    
update: function() {
if(this.pet.customParams.health <= 0 || this.pet.customParams.fun <= 0) {
this.pet.frame = 4;
this.uiBlocked = true;
}`
- Restart the game `gameOver: function() {this.game.state.restart();}`
<br><br>
- Implement multiple states in different files // states represent main phases of your game
- Create one file per state
- Don't forget to include them in `index.html`
- Add them to your Phaser game
<br><br>
- The `bootState` is used to prepare the `preLoadState`
- Game-level settings are initiated in the `bootState`
<br><br>
- You can create as many states as you want
- Pass values when launching a state
- Read the passed values in the `init` method