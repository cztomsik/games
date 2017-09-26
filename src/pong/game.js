import keys from '../keys'

export const WIDTH = 800
export const HEIGHT = 600

const PADDLE_WIDTH = 10
const PADDLE_HEIGHT = 100

const BALL_SIZE = 10

export const player = {x: WIDTH - PADDLE_WIDTH, y: null, width: PADDLE_WIDTH, height: PADDLE_HEIGHT, score: null}
export const opponent = {x: 0, y: null, width: PADDLE_WIDTH, height: PADDLE_HEIGHT, score: null}
export const ball = {x: null, y: null, width: BALL_SIZE, height: BALL_SIZE}

export const newGame = () => {
  player.score = 0
  opponent.score = 0
  ball.speedX = 10
  newSet()
}

const newSet = () => {
  player.y = (HEIGHT - player.height) / 2
  opponent.y = (HEIGHT - opponent.height) / 2
  ball.x = (WIDTH - ball.width) / 2
  ball.y = (HEIGHT - ball.height) / 2
  ball.speedY = 0
}

export const update = () => {
  if (player.score > 9) {
    alert('You win')
    return newGame()
  }

  if (opponent.score > 9) {
    alert('You loose')
    return newGame()
  }

  if ((ball.y < 0) || (ball.y > HEIGHT)) {
    ball.speedY *= -1
  }

  if (ball.x < 0) {
    ball.speedX = -10
    player.score++
    newSet()
  }

  if (ball.x > (player.x + player.width)) {
    ball.speedX = 10
    opponent.score++
    newSet()
  }

  if ((ball.x < (opponent.x + opponent.width)) && (ball.y > opponent.y) && (ball.y < (opponent.y + opponent.height))) {
    ball.speedX *= -1
  }

  if ((ball.x > player.x) && (ball.y > player.y) && (ball.y < (player.y + player.height))) {
    ball.speedX *= -1

    if (keys.ArrowDown) {
      ball.speedY += 2.5
    }

    if (keys.ArrowUp) {
      ball.speedY -= 2.5
    }
  }

  const diff = Math.max(-10, Math.min(10, ball.y - opponent.y - ((opponent.height - ball.height) / 2)))
  opponent.y = Math.max(0, Math.min(HEIGHT - opponent.height, opponent.y + diff))

  if (keys.ArrowUp) {
    player.y = Math.max(0, player.y - 10)
  }

  if (keys.ArrowDown) {
    player.y = Math.min(HEIGHT - player.height, player.y + 10)
  }

  ball.x += ball.speedX
  ball.y += ball.speedY
}
