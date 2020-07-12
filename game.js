class World{ //Makes the level displayed on screen
  constructor(inverse,blocks){
    this.level = new PIXI.Container()
    this.inverse = inverse
    this.blocks = blocks
    this.arrows = []

    let b
    for(b of this.blocks){ //Renders blocks
      this.level.addChild(b.sprite)
    }

    this.goalPoint = this.inverse[this.inverse.length -1]
    for(let i=0;i<10;i++){ //Creates end of level flag
      let newFlag = new PIXI.Sprite(gameTextures.flag)
      newFlag.anchor.set(0.5)
      newFlag.x = this.goalPoint
      newFlag.y = i * 64
      this.level.addChild(newFlag)
    }

    let i
    let down = false
    for(i of this.inverse){
      if(i != this.goalPoint)
      for(let j=0;j<10;j++){ //Creates arrows indicating gravity changes
        let newArrow = new PIXI.Sprite(gameTextures.arrow)
        newArrow.anchor.set(0.5)
        newArrow.x = i
        newArrow.y = j * 64
        newArrow.scale.set(0.5)
        if(down) newArrow.rotation = Math.PI
        this.level.addChild(newArrow)
      }
      down = !down
    }

    //Reset player before level starts
    playerSprite.y = app.screen.height/2
    playerSprite.x = app.screen.width/2
    playerSprite.noGravity = true //If gravity is being applied
    playerSprite.velX = 0 //Velocity of sprite on x axis
    playerSprite.velY = 0 //Velocity of sprite on y axis
    playerSprite.velRot = 0
    playerSprite.swingRot = 0
    playerSprite.isSwing = false //If its swinging
    playerSprite.attatchedTo = undefined //Block that its swinging from
    app.stage.addChild(playerSprite)

    currentLevel = this.level
    app.stage.addChild(this.level)
  }

  gravityDown(posX){ //Simple method for direction of gravity
    let up = true
    let pos
    for(pos of this.inverse){
      if(pos<posX) up = !up
    }
    return up
  }
}

function death(){ //Triggered when player goes to title screen
  gamePlayingRn = false
  playerSprite.x = 400
  playerSprite.y = 300
  app.stage.removeChild(currentLevel.level)
  app.stage.removeChild(swingLine)
  app.stage.removeChild(playerSprite)
  menus.push(new Menu())
}

function levelUp(){ //Triggered when player completes a level
  playerLevel += 1
  death()
}

//Main game loop
app.ticker.add((delta) => {
  app.stage.removeChild(swingLine)
  app.stage.x = -playerSprite.x + app.screen.width/2

  if(currentLevel != null && gamePlayingRn){ //Only runs movement logic if game is running
    let block
    for(block of currentLevel.blocks){ //Block collision logic
      if(block.type == blockType.danger){
        if(block.touching(playerSprite.x, playerSprite.y - 32)){ //top side
          death()
        }
        if(block.touching(playerSprite.x, playerSprite.y + 32)){ //bottom side
          death()
        }
        if(block.touching(playerSprite.x - 32, playerSprite.y)){ //left side
          death()
        }
        if(block.touching(playerSprite.x + 32, playerSprite.y)){ //right side
          death()
        }
      }
      else if(block.type == blockType.bounce){
        if(block.touching(playerSprite.x, playerSprite.y - 32)){ //top side
          playerSprite.velY = -playerSprite.velY
          playerSprite.y += 4
        }
        if(block.touching(playerSprite.x, playerSprite.y + 32)){ //bottom side
          playerSprite.velY = -playerSprite.velY
          playerSprite.y -= 4
        }
        if(block.touching(playerSprite.x - 32, playerSprite.y)){ //left side
          playerSprite.velX = -playerSprite.velX
          playerSprite.x += 4
        }
        if(block.touching(playerSprite.x + 32, playerSprite.y)){ //right side
          playerSprite.velX = -playerSprite.velX
          playerSprite.x -= 4
        }
      }
    }
    if(playerSprite.isSwing){ //Player swing animation and physics
      //Draw the line
      //try{ //Should never be called without attatchedTo being defined but just incase
        swingLine = new PIXI.Graphics();
        swingLine.lineStyle(2, 0xFFFFFF, 1);
        swingLine.moveTo(playerSprite.x, playerSprite.y);
        swingLine.lineTo(playerSprite.attatchedTo.x, playerSprite.attatchedTo.y);
        app.stage.addChild(swingLine)

        //Swing physics
        let distance = getDistance(playerSprite.x, playerSprite.y, playerSprite.attatchedTo.x, playerSprite.attatchedTo.y)
        playerSprite.x = playerSprite.attatchedTo.x + (Math.cos(playerSprite.swingRot)*distance)
        playerSprite.y = playerSprite.attatchedTo.y - (Math.sin(playerSprite.swingRot)*distance)

        playerSprite.velRot *= 0.999
        if(currentLevel.gravityDown(playerSprite.x)){
          playerSprite.velRot -= ( playerSprite.x - playerSprite.attatchedTo.x ) / 1000000
        }else{
          playerSprite.velRot += ( playerSprite.x - playerSprite.attatchedTo.x ) / 1000000
        }
        if(65 in keysDown) playerSprite.velRot -= delta / 20000
        if(68 in keysDown) playerSprite.velRot += delta / 20000

        playerSprite.swingRot += playerSprite.velRot

      //}catch(err){}
    }else{ //Physics for normal movement
      if(!playerSprite.noGravity){
        if(currentLevel.gravityDown(playerSprite.x)) playerSprite.velY += 30
        else playerSprite.velY -= 30
        if(65 in keysDown) playerSprite.velX -=5 //A
        if(68 in keysDown) playerSprite.velX +=5 //D
        playerSprite.x += playerSprite.velX * delta / 1000
        playerSprite.y += playerSprite.velY * delta / 1000
      }
    }
    if(playerSprite.x > currentLevel.goalPoint){ //Checks for out of bounds death and level completion
      levelUp()
    }else if(playerSprite.y > 650){
      death()
    }else if(playerSprite.y < -50){
      death()
    }
  }
});
