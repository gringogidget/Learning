- Add the bottom (dirt and rocks)
```
this.ground = this.add.sprite(0, 500, 'ground');
```
- Add a platform
```
var platform = this.add.sprite(0, 300, 'platform');
```
- Create player
```
this.player = this.add.sprite(100, 200, 'player', 3); // 3 is the default sprite that shows 
this.player.anchor.setTo(0.5);
this.player.animations.add('walking', [0, 1, 2, 1], 6, true); // 6 is the animation frame rate, true infinite animation
this.player.play('walking');
```
- You can use a physics engine to allow you to implement 2D mechanics such as gravity and collision detection
Enable physics on a global level (ref: https://phaser.io/examples/v2/category/arcade-physics)
```
this.game.physics.startSystem(Phaser.Physics.ARCADE);
```
- Define gravity. The lower the number, the slower the gravity
```
this.game.physics.arcade.gravivty.y = 1000;
```
- Enable physics for a sprite
```
this.game.physics.arcade.enable(mySprite)
```
- Enable gravity on the ground
```
this.game.physics.arcade.enable(this.ground);
```
- Disable gravity on the ground, since the gravity is global
```
this.ground.body.allowGravity = false;
```
- Make it so the ground and bottom can't collide into anything, and nothing can collide into it
```
this.ground.body.immovable = true;
platform.body.immovable = true;
```
- The `update: function()` is checked multiple times per second. To change how two propeties interact with each other, use the collide function. In this case, `this.player` will now collide with `this.ground`, making the player stop on the ground.
```
this.game.physics.arcade.collide(this.player, this.ground);
```
- To make sure these physics are continually being checked add
```
landed: function(player, ground)
```
- Enable cursor keys via `init`:
```
this.cursors = this.game.input.keyboard.createCursorKeys(); // keyboard input
this.RUNNING_SPEED = 180;
this.JUMPING_SPEED = 550;
```
- For speed of player, gravity of jump, left key, right key, add:
```
this.player.body.velocity.x = 0;
if(this.cursors.left.isDown) {
this.player.body.velocity.x = -this.RUNNING_SPEED;
}
else if(this.cursors.right.isDown) {
this.player.body.velocity.x = this.RUNNING_SPEED;
}

if(this.cursors.up.isDown && this.player.body.touching.down) { // check player is touching ground before jump
this.player.body.velocity.y = -this.JUMPING_SPEED;
}
```
- Custom paramaters for the player
```
this.player.customParams = {};
```
- Check that the player is touching the ground 
```
if((this.cursors.up.isDown || this.player.customParams.mustJump) && this.player.body.touching.down) {
this.player.body.velocity.y = -this.JUMPING_SPEED;
this.player.customParams.mustJump = false;
```
- Create a group for the platforms in an array, so you don't have to make an argument for each platform
```
var platformData = [
{"x": 0, "y": 430},
{"x": 45, "y": 560},
{"x": 90, "y": 290},
{"x": 0, "y": 140}
];
```
- Enable physics for an entire group:
`myGroup.enableBody = true;`

- Set properties for this group with
`setAll()`

- Access the world object and tell it where to start
`this.game.world.setBounds(0,0,360,700);`

- Tell the camera to follow the player
`this.game.camera.follow(this.player);`

- Load the .json file
`this.load.text('level', 'assets/data/level.json')`

- Get content with `this.game.cache.getText() `

- Parse data with `JSON.parse(textContent)`