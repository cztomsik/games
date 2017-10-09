// gomoku by bylo o dost slozitejsi (hraje se to asi na nekonecne gride a je to vzdycky na 5 vyhernich

import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'

const game = {
  xNext: true,
  arr: _.chunk(_.fill(new Array(3 * 3), null), 3)
}

const place = (x, y, v) =>
  game.arr[x][y] = (game.xNext = ! game.xNext) ?'O' :'X'

const App = () =>
  <div>
    {game.arr.map((r, x) =>
      <div>
        {r.map((c, y) =>
          <button style={{
            padding: '10px 14px',
            whiteSpace: 'pre',
            fontFamily: 'monospace',
            fontSize: 24
          }} onClick={() => place(x, y, 'X')} disabled={game.arr[x][y]}>{game.arr[x][y] || ' '}</button>
        )}
      </div>
    )}
  </div>

const el = document.createElement('div')
document.body.appendChild(el)

const render = () =>
  ReactDOM.render(<App />, el)

setInterval(render, 200)
