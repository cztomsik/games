/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pong__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pong___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pong__);



/***/ }),
/* 1 */
/***/ (function(module, exports) {

const WIDTH = 800
const HEIGHT = 600

const PADDLE_WIDTH = 10
const PADDLE_HEIGHT = 100

const BALL_SIZE = 10

const canvas = document.createElement('canvas')
canvas.width = WIDTH
canvas.height = HEIGHT
const ctx = canvas.getContext('2d')
document.body.appendChild(canvas)

const keys = {}
window.addEventListener('keydown', e => keys[e.key] = true)
window.addEventListener('keyup', e => keys[e.key] = false)

const player = {}
const opponent = {}
const ball = {}

const newGame = () => {
  player.score = 0
  opponent.score = 0
  ball.speedX = 10
  newSet()
}

const newSet = () => {
  player.y = (HEIGHT - PADDLE_HEIGHT) / 2
  opponent.y = (HEIGHT - PADDLE_HEIGHT) / 2
  ball.x = (WIDTH - BALL_SIZE) / 2
  ball.y = (HEIGHT - BALL_SIZE) / 2
  ball.speedY = 0
}

const loop = () => {
  update()
  render()
  requestAnimationFrame(loop)
}

const update = () => {
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

  if (ball.x > WIDTH) {
    ball.speedX = 10
    opponent.score++
    newSet()
  }

  if ((ball.x < PADDLE_WIDTH) && (ball.y > opponent.y) && (ball.y < (opponent.y + PADDLE_HEIGHT))) {
    ball.speedX *= -1
  }

  if ((ball.x > (WIDTH - PADDLE_WIDTH)) && (ball.y > player.y) && (ball.y < (player.y + PADDLE_HEIGHT))) {
    ball.speedX *= -1

    if (keys.ArrowDown) {
      ball.speedY += 2.5
    }

    if (keys.ArrowUp) {
      ball.speedY -= 2.5
    }
  }

  const diff = Math.max(-10, Math.min(10, ball.y - opponent.y - ((PADDLE_HEIGHT - BALL_SIZE) / 2)))
  opponent.y = Math.max(0, Math.min(HEIGHT - PADDLE_HEIGHT, opponent.y + diff))

  if (keys.ArrowUp) {
    player.y = Math.max(0, player.y - 10)
  }

  if (keys.ArrowDown) {
    player.y = Math.min(HEIGHT - PADDLE_HEIGHT, player.y + 10)
  }

  ball.x += ball.speedX
  ball.y += ball.speedY
}

const render = () => {
  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, WIDTH, HEIGHT)

  ctx.fillStyle = '#fff'

  ctx.fillRect(0, opponent.y, PADDLE_WIDTH, PADDLE_HEIGHT)

  ctx.fillRect(WIDTH - PADDLE_WIDTH, player.y, PADDLE_WIDTH, PADDLE_HEIGHT)

  ctx.fillRect(ball.x, ball.y, BALL_SIZE, BALL_SIZE)

  ctx.font = '24px sans-serif';
  ctx.fillText(opponent.score, 20, 40)

  ctx.font = '24px sans-serif';
  ctx.fillText(player.score, WIDTH - 60, 40)
}

newGame()
loop()


/***/ })
/******/ ]);