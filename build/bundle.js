webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = _;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = PIXI;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pong__ = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pixi_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pixi_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pixi_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib__ = __webpack_require__(8);







// textures
const g1 = new __WEBPACK_IMPORTED_MODULE_3_pixi_js__["Graphics"]();
g1.beginFill(0xFFFFFF);
g1.drawRect(0, 0, 10, 100);
const PADDLE = g1.generateCanvasTexture();

const g2 = new __WEBPACK_IMPORTED_MODULE_3_pixi_js__["Graphics"]();
g2.beginFill(0xFFFFFF);
g2.drawRect(0, 0, 10, 10);
const BALL = g2.generateCanvasTexture();

const TEXT_STYLE = { fontFamily: 'Arial', fontSize: 24, fill: 0xFFFFFF };

const el = document.createElement('div');
document.body.appendChild(el);

const loop = () => {
  Object(__WEBPACK_IMPORTED_MODULE_4__game__["g" /* update */])();
  render();
  requestAnimationFrame(loop);
};

const render = () => {
  __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Pong, null), el);
};

const Pong = () => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  __WEBPACK_IMPORTED_MODULE_5__lib__["a" /* Application */],
  { width: __WEBPACK_IMPORTED_MODULE_4__game__["b" /* WIDTH */], height: __WEBPACK_IMPORTED_MODULE_4__game__["a" /* HEIGHT */] },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* Sprite */], { texture: PADDLE, x: __WEBPACK_IMPORTED_MODULE_4__game__["e" /* opponent */].x, y: __WEBPACK_IMPORTED_MODULE_4__game__["e" /* opponent */].y }),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* Sprite */], { texture: BALL, x: __WEBPACK_IMPORTED_MODULE_4__game__["c" /* ball */].x, y: __WEBPACK_IMPORTED_MODULE_4__game__["c" /* ball */].y }),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* Sprite */], { texture: PADDLE, x: __WEBPACK_IMPORTED_MODULE_4__game__["f" /* player */].x, y: __WEBPACK_IMPORTED_MODULE_4__game__["f" /* player */].y }),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__lib__["c" /* Text */], { style: TEXT_STYLE, text: __WEBPACK_IMPORTED_MODULE_4__game__["e" /* opponent */].score, x: 30, y: 10 }),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__lib__["c" /* Text */], { style: TEXT_STYLE, text: __WEBPACK_IMPORTED_MODULE_4__game__["f" /* player */].score, x: __WEBPACK_IMPORTED_MODULE_4__game__["b" /* WIDTH */] - 50, y: 10 })
);

Object(__WEBPACK_IMPORTED_MODULE_4__game__["d" /* newGame */])();
loop();

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__keys__ = __webpack_require__(7);


const WIDTH = 800;
/* harmony export (immutable) */ __webpack_exports__["b"] = WIDTH;

const HEIGHT = 600;
/* harmony export (immutable) */ __webpack_exports__["a"] = HEIGHT;


const PADDLE_WIDTH = 10;
const PADDLE_HEIGHT = 100;

const BALL_SIZE = 10;

const player = { x: WIDTH - PADDLE_WIDTH, y: null, width: PADDLE_WIDTH, height: PADDLE_HEIGHT, score: null };
/* harmony export (immutable) */ __webpack_exports__["f"] = player;

const opponent = { x: 0, y: null, width: PADDLE_WIDTH, height: PADDLE_HEIGHT, score: null };
/* harmony export (immutable) */ __webpack_exports__["e"] = opponent;

const ball = { x: null, y: null, width: BALL_SIZE, height: BALL_SIZE };
/* harmony export (immutable) */ __webpack_exports__["c"] = ball;


const newGame = () => {
  player.score = 0;
  opponent.score = 0;
  ball.speedX = 10;
  newSet();
};
/* harmony export (immutable) */ __webpack_exports__["d"] = newGame;


const newSet = () => {
  player.y = (HEIGHT - player.height) / 2;
  opponent.y = (HEIGHT - opponent.height) / 2;
  ball.x = (WIDTH - ball.width) / 2;
  ball.y = (HEIGHT - ball.height) / 2;
  ball.speedY = 0;
};

const update = () => {
  if (player.score > 9) {
    alert('You win');
    return newGame();
  }

  if (opponent.score > 9) {
    alert('You loose');
    return newGame();
  }

  if (ball.y < 0 || ball.y > HEIGHT) {
    ball.speedY *= -1;
  }

  if (ball.x < 0) {
    ball.speedX = -10;
    player.score++;
    newSet();
  }

  if (ball.x > player.x + player.width) {
    ball.speedX = 10;
    opponent.score++;
    newSet();
  }

  if (ball.x < opponent.x + opponent.width && ball.y > opponent.y && ball.y < opponent.y + opponent.height) {
    ball.speedX *= -1;
  }

  if (ball.x > player.x && ball.y > player.y && ball.y < player.y + player.height) {
    ball.speedX *= -1;

    if (__WEBPACK_IMPORTED_MODULE_0__keys__["a" /* default */].ArrowDown) {
      ball.speedY += 2.5;
    }

    if (__WEBPACK_IMPORTED_MODULE_0__keys__["a" /* default */].ArrowUp) {
      ball.speedY -= 2.5;
    }
  }

  const diff = Math.max(-10, Math.min(10, ball.y - opponent.y - (opponent.height - ball.height) / 2));
  opponent.y = Math.max(0, Math.min(HEIGHT - opponent.height, opponent.y + diff));

  if (__WEBPACK_IMPORTED_MODULE_0__keys__["a" /* default */].ArrowUp) {
    player.y = Math.max(0, player.y - 10);
  }

  if (__WEBPACK_IMPORTED_MODULE_0__keys__["a" /* default */].ArrowDown) {
    player.y = Math.min(HEIGHT - player.height, player.y + 10);
  }

  ball.x += ball.speedX;
  ball.y += ball.speedY;
};
/* harmony export (immutable) */ __webpack_exports__["g"] = update;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const keys = {};

window.addEventListener('keydown', e => keys[e.key] = true);
window.addEventListener('keyup', e => keys[e.key] = false);

/* harmony default export */ __webpack_exports__["a"] = (keys);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Application; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pixi_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pixi_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pixi_js__);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }





const Application = (_ref) => {
  let { children = [] } = _ref,
      props = _objectWithoutProperties(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Wrapper, {
    create: () => {
      const app = new __WEBPACK_IMPORTED_MODULE_2_pixi_js__["Application"]();
      // TODO
      document.body.appendChild(app.view);
      return app;
    },
    update: o => __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.assign(o, props),
    appendChild: (app, c) => app.stage.addChild(c),
    children: children
  });
};


const Sprite = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Wrapper, {
  create: () => new __WEBPACK_IMPORTED_MODULE_2_pixi_js__["Sprite"](),
  update: o => __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.assign(o, props)
});
/* harmony export (immutable) */ __webpack_exports__["b"] = Sprite;


const Text = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Wrapper, {
  create: () => new __WEBPACK_IMPORTED_MODULE_2_pixi_js__["Text"](),
  update: o => __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.assign(o, props)
});
/* harmony export (immutable) */ __webpack_exports__["c"] = Text;


class Wrapper extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.inst = props.create();
  }

  render() {
    this.props.update(this.inst);
    return this.props.children;
  }

  componentDidMount() {
    let fiber = this._reactInternalFiber;

    // owning doesn't matter at this point so it's just like DOM
    while (fiber = fiber.return) {
      const comp = fiber.stateNode;

      if (comp instanceof Wrapper) {
        comp.appendChild(this.inst);
        break;
      }
    }
  }

  appendChild(c) {
    this.props.appendChild(this.inst, c);
  }
}

Wrapper.defaultProps = {
  children: []
};

/***/ })
],[3]);