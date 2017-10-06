import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import {Graphics} from 'pixi.js'
import {WIDTH, HEIGHT, newGame, update, player, opponent, ball} from './game'
import {Application, Sprite, Text} from './lib'

// textures
const g1 = new Graphics()
g1.beginFill(0xFFFFFF)
g1.drawRect(0, 0, 10, 100)
const PADDLE = g1.generateCanvasTexture()

const g2 = new Graphics()
g2.beginFill(0xFFFFFF)
g2.drawRect(0, 0, 10, 10)
const BALL = g2.generateCanvasTexture()

const TEXT_STYLE = {fontFamily : 'Arial', fontSize: 24, fill : 0xFFFFFF}

const el = document.createElement('div')
document.body.appendChild(el)

const loop = () => {
  update()
  render()
  requestAnimationFrame(loop)
}

const render = () => {
  ReactDOM.render(<Pong />, el)
}

const Pong = () =>
  <Application width={WIDTH} height={HEIGHT}>
    <Sprite texture={PADDLE} x={opponent.x} y={opponent.y} />
    <Sprite texture={BALL} x={ball.x} y={ball.y} />
    <Sprite texture={PADDLE} x={player.x} y={player.y} />

    <Text style={TEXT_STYLE} text={opponent.score} x={30} y={10} />
    <Text style={TEXT_STYLE} text={player.score} x={WIDTH - 50} y={10} />
  </Application>

newGame()
loop()
