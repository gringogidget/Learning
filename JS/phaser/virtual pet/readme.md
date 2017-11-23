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