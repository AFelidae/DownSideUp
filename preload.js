
const blockType = { //Enum for block types
  normal:1, //Blue
  bounce:2, //Green
  falling:3, //Red
  danger : 4, //Yellow
  text: 5 //Not even a block lmao, just tutorial text
}

//Simple tracker to figure out which keys are pressed
var keysDown = {}
addEventListener("keydown", function (e) {
  keysDown[e.keyCode] = true;
},false);
addEventListener("keyup", function (e) {
  delete keysDown[e.keyCode];
},false);

var gamePlayingRn = false
var currentLevel
var swingLine

//Initiate pixijs and textures
const app = new PIXI.Application({
    width: 800, height: 600, backgroundColor: 0x111111, resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(app.view);

const gameTextures = {
  player : PIXI.Texture.from('assets/player.png'),
  blueBlockSelect : PIXI.Texture.from('assets/blueblockselected.png'),
  blueBlock : PIXI.Texture.from('assets/blueblock.png'),
  redBlockSelect : PIXI.Texture.from('assets/redblockselected.png'),
  redBlock : PIXI.Texture.from('assets/redblock.png'),
  greenBlock : PIXI.Texture.from('assets/greenblock.png'),
  yellowBlock : PIXI.Texture.from('assets/yellowblock.png'),
  flag : PIXI.Texture.from('assets/flag.png'),
  arrow: PIXI.Texture.from('assets/arrow.png')
}

const playerSprite = new PIXI.Sprite(gameTextures.player);
playerSprite.anchor.set(0.5);
playerSprite.scale.set(0.25)

var playerLevel = 0

function getDistance(x1,y1,x2,y2){
  return Math.sqrt(((x1-x2)*(x1-x2))+((y1-y2)*(y1-y2)))
}

//Used when player clicks item on menu screen
function startLevel(levelNum){
  gamePlayingRn = true
  for(let i =0;i<menus.length;i++){
    app.stage.removeChild(menus[i].menu)
  }
  currentLevel = new World(levelData[levelNum].inverse,levelData[levelNum].blocks)
  app.stage.addChild(currentLevel)
  playerSprite.noGravity = true
}

//Used to display levels on menu screen
function addLevelText(level){
  const lockedStyle =  new PIXI.TextStyle({
    fontFamily: 'Century Gothic',
    fontSize: 36,
    fill: ['#aaaaaa'], // gradient
  });

  const unlockedStyle =  new PIXI.TextStyle({
    fontFamily: 'Century Gothic',
    fontSize: 36,
    fill: ['#ffffff'], // gradient
  });

  const levelText = new PIXI.Text('Level ' + level, level <= playerLevel ? unlockedStyle : lockedStyle);
  levelText.x = 200
  levelText.y = 450 - 40 * level
  if(levelText.y > app.height){
    levelText.x = 500
  }
  return levelText
}

class Menu{
  constructor(){
  this.menu = new PIXI.Container()
  this.options = []

  playerSprite.x = 400 //Camera follows player :3
  playerSprite.y = 300

  const titleStyle = new PIXI.TextStyle({
    fontFamily: 'Century Gothic',
    fontSize: 48,
    fill: ['#ffffff', '#aaaaaa'], // gradient
    wordWrap: true,
  });

  const subTitleStyle = new PIXI.TextStyle({
    fontFamily: 'Century Gothic',
    fontSize: 48,
    fill: ['#ffffff', '#aaaaaa'], // gradient
    wordWrap: true,
  });

  const title = new PIXI.Text('Down Side Up', titleStyle);
  title.x = 20
  title.y = 20

  this.menu.addChild(title)

  for(let x=0; x<=11; x++){
    let lt = addLevelText(x)
    this.menu.addChild(lt)
    this.options.push(lt)
    lt.interactive = true
    lt.on('pointerdown', function(){
      if(x <= playerLevel) startLevel(x)
    })
  }
    app.stage.addChild(this.menu)
  }
}

var menus = [new Menu()]

//Block class used in world class
class Block{
  constructor(x,y,type,extraInfo){
    this.type = type
    switch(type){
      case blockType.normal:
        this.sprite = new PIXI.Sprite(gameTextures.blueBlock)
        this.sprite.interactive = true

        //Click to swing code
        this.sprite.on('pointerdown', function(){ //Context of this changes
          this.texture = gameTextures.blueBlockSelect
          playerSprite.isSwing = true //If its swinging
          playerSprite.attatchedTo = this
          playerSprite.noGravity = false
          let distance = getDistance(playerSprite.x, playerSprite.y, this.x, this.y)
          playerSprite.velRot = 0
          playerSprite.velX = 0
          playerSprite.velY = 0
          if(playerSprite.x > this.x) playerSprite.swingRot = Math.atan(-(playerSprite.y-this.y)/(playerSprite.x-this.x))
          else playerSprite.swingRot = Math.atan(-(playerSprite.y-this.y)/(playerSprite.x-this.x))-Math.PI
        })
        //Release from swing
        this.sprite.on('pointerup', function(){
          this.texture = gameTextures.blueBlock
          playerSprite.isSwing = false
          let distance = getDistance(playerSprite.x, playerSprite.y, this.x, this.y)
          if(playerSprite.velRot>0){
            playerSprite.velX = -Math.sin(playerSprite.swingRot)*distance*25
            playerSprite.velY = -Math.cos(playerSprite.swingRot)*distance*25
          }else{
            playerSprite.velX = Math.sin(playerSprite.swingRot)*distance*25
            playerSprite.velY = Math.cos(playerSprite.swingRot)*distance*25
          }
        })
        //Release from swing
        this.sprite.on('pointerupoutside', function(){
          this.texture = gameTextures.blueBlock
          playerSprite.isSwing = false
          let distance = getDistance(playerSprite.x, playerSprite.y, this.x, this.y)
          if(playerSprite.velRot>0){
            playerSprite.velX = -Math.sin(playerSprite.swingRot)*distance*25
            playerSprite.velY = -Math.cos(playerSprite.swingRot)*distance*25
          }else{
            playerSprite.velX = Math.sin(playerSprite.swingRot)*distance*25
            playerSprite.velY = Math.cos(playerSprite.swingRot)*distance*25
          }
        })
        break
      case blockType.bounce:
        this.sprite = new PIXI.Sprite(gameTextures.greenBlock)
        break
      case blockType.falling:
        this.sprite = new PIXI.Sprite(gameTextures.redBlock)
        this.sprite.interactive = true

        //Same as code for normal blocktype but now block dissapears afterward
        this.sprite.on('pointerdown', function(){ //Context of this changes
          this.texture = gameTextures.redBlockSelect
          playerSprite.isSwing = true //If its swinging
          playerSprite.attatchedTo = this
          playerSprite.noGravity = false
          let distance = getDistance(playerSprite.x, playerSprite.y, this.x, this.y)
          playerSprite.velRot = 0
          playerSprite.velX = 0
          playerSprite.velY = 0
          if(playerSprite.x > this.x) playerSprite.swingRot = Math.atan(-(playerSprite.y-this.y)/(playerSprite.x-this.x))
          else playerSprite.swingRot = Math.atan(-(playerSprite.y-this.y)/(playerSprite.x-this.x))-Math.PI
        })
        this.sprite.on('pointerup', function(){
          this.texture = gameTextures.redBlock
          playerSprite.isSwing = false
          let distance = getDistance(playerSprite.x, playerSprite.y, this.x, this.y)
          if(playerSprite.velRot>0){
            playerSprite.velX = -Math.sin(playerSprite.swingRot)*distance*25
            playerSprite.velY = -Math.cos(playerSprite.swingRot)*distance*25
          }else{
            playerSprite.velX = Math.sin(playerSprite.swingRot)*distance*25
            playerSprite.velY = Math.cos(playerSprite.swingRot)*distance*25
          }
          if(playerSprite.attatchedTo == this)
            currentLevel.level.removeChild(this)
        })
        this.sprite.on('pointerupoutside', function(){
          this.texture = gameTextures.redBlock
          playerSprite.isSwing = false
          let distance = getDistance(playerSprite.x, playerSprite.y, this.x, this.y)
          if(playerSprite.velRot>0){
            playerSprite.velX = -Math.sin(playerSprite.swingRot)*distance*25
            playerSprite.velY = -Math.cos(playerSprite.swingRot)*distance*25
          }else{
            playerSprite.velX = Math.sin(playerSprite.swingRot)*distance*25
            playerSprite.velY = Math.cos(playerSprite.swingRot)*distance*25
          }
          if(playerSprite.attatchedTo == this)
            currentLevel.level.removeChild(this)
        })
        break
      case blockType.danger:
        this.sprite = new PIXI.Sprite(gameTextures.yellowBlock)
        break
      case blockType.text:
      //Text for tutorial info / bad jokes
        const tutorialTextStyle =  new PIXI.TextStyle({
          fontFamily: 'Century Gothic',
          fontSize: 20,
          fill: ['#aaaaaa'], // gradient
        });
        this.sprite = new PIXI.Text(extraInfo.text,tutorialTextStyle)
        break
    }
    if(type != blockType.text) this.sprite.scale.set(0.5)
    this.sprite.x = x
    this.sprite.y = y
    this.sprite.anchor.set(0.5)
  }

  touching(x,y){ //Collision code used in main game loop
    if(this.sprite.x - 32 < x && x < this.sprite.x + 32)
      if(this.sprite.y - 32 < y && y < this.sprite.y + 32) return true
    return false
  }
  //Add some methods for the common tests
}
