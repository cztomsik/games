import {Application, Sprite, Text, Graphics} from 'pixi.js'
import {WIDTH, HEIGHT, newGame, update, player, opponent, ball} from './game'

// textures
const g1 = new Graphics()
g1.beginFill(0xFFFFFF)
g1.drawRect(0, 0, 10, 100)
const PADDLE = g1.generateCanvasTexture()

const g2 = new Graphics()
g2.beginFill(0xFFFFFF)
g2.drawRect(0, 0, 10, 10)
const BALL = g2.generateCanvasTexture()

const app = new Application()
const playerScore = new Text('', {fontFamily : 'Arial', fontSize: 24, fill : 0xFFFFFF})
const playerSprite = new Sprite(PADDLE)
const opponentScore = new Text('', {fontFamily : 'Arial', fontSize: 24, fill : 0xFFFFFF})
const opponentSprite = new Sprite(PADDLE)
const ballSprite = new Sprite(BALL)
playerScore.x = WIDTH - 50
playerScore.y = 10
opponentScore.x = 30
opponentScore.y = 10
app.stage.addChild(playerScore)
app.stage.addChild(playerSprite)
app.stage.addChild(opponentScore)
app.stage.addChild(opponentSprite)
app.stage.addChild(ballSprite)
document.body.appendChild(app.view)

const loop = () => {
  update()
  render()
  requestAnimationFrame(loop)
}

const render = () => {
  playerSprite.x = player.x
  playerSprite.y = player.y

  opponentSprite.x = opponent.x
  opponentSprite.y = opponent.y

  ballSprite.x = ball.x
  ballSprite.y = ball.y

  opponentScore.text = opponent.score
  playerScore.text = player.score
}

newGame()
loop()
