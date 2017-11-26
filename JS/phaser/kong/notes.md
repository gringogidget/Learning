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
