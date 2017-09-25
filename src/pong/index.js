import {WIDTH, HEIGHT, newGame, update, player, opponent, ball} from './game'

const canvas = document.createElement('canvas')
canvas.width = WIDTH
canvas.height = HEIGHT
const ctx = canvas.getContext('2d')
document.body.appendChild(canvas)

const loop = () => {
  update()
  render()
  requestAnimationFrame(loop)
}

const render = () => {
  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, WIDTH, HEIGHT)

  ctx.fillStyle = '#fff'

  ctx.fillRect(0, opponent.y, opponent.width, opponent.height)

  ctx.fillRect(WIDTH - player.width, player.y, player.width, player.height)

  ctx.fillRect(ball.x, ball.y, ball.width, ball.height)

  ctx.font = '24px sans-serif';
  ctx.fillText(opponent.score, 20, 40)

  ctx.font = '24px sans-serif';
  ctx.fillText(player.score, WIDTH - 60, 40)
}

newGame()
loop()
