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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/Game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/Bonus.js":
/*!****************************!*\
  !*** ./public/js/Bonus.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bonus; });
/* harmony import */ var _sprites_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprites.js */ "./public/js/sprites.js");
/* harmony import */ var _layers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layers.js */ "./public/js/layers.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var bonusSprites;
Object(_sprites_js__WEBPACK_IMPORTED_MODULE_0__["loadBonusSprite"])().then(function (sprites) {
  bonusSprites = sprites;
  console.log(bonusSprites);
});

var Bonus =
/*#__PURE__*/
function () {
  function Bonus(pos, type, game) {
    _classCallCheck(this, Bonus);

    this.type = type;
    this.pos = pos;
    this.game = game;
  }

  _createClass(Bonus, [{
    key: "draw",
    value: function draw(context) {
      bonusSprites.draw(this.type, context, this.pos.x, this.pos.y);
    }
  }, {
    key: "remove",
    value: function remove() {
      // console.log(this.game.bonuses.length)
      for (var i = 0; i < this.game.bonuses.length; i++) {
        var bonus = this.game.bonuses[i];

        if (this == bonus) {
          // console.log(this.game.bonuses.length)
          this.game.bonuses.splice(i, 1); // console.log(this.game.bonuses.length)

          this.game.updateBackground = true;
        }
      }
    }
  }]);

  return Bonus;
}();



/***/ }),

/***/ "./public/js/Compositor.js":
/*!*********************************!*\
  !*** ./public/js/Compositor.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Compositor; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Compositor =
/*#__PURE__*/
function () {
  function Compositor() {
    _classCallCheck(this, Compositor);

    this.layers = [];
  }

  _createClass(Compositor, [{
    key: "draw",
    value: function draw(context) {
      this.layers.forEach(function (layer) {
        layer(context);
      });
    }
  }]);

  return Compositor;
}();



/***/ }),

/***/ "./public/js/Controller.js":
/*!*********************************!*\
  !*** ./public/js/Controller.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Controller; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PRESSED = 1;
var RELEASED = 0;

var Controller =
/*#__PURE__*/
function () {
  function Controller() {
    _classCallCheck(this, Controller);

    // Holds the current state of a given key
    this.keyStates = new Map(); // Holds the callback functions for a key code

    this.keyMap = new Map();
  }

  _createClass(Controller, [{
    key: "addMapping",
    value: function addMapping(keyCode, callback) {
      this.keyMap.set(keyCode, callback);
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      var keyCode = event.keyCode;

      if (!this.keyMap.has(keyCode)) {
        // Did not have key mapped.
        return;
      }

      event.preventDefault();
      var keyState = event.type === 'keydown' ? PRESSED : RELEASED;
      this.keyStates.set(keyCode, keyState);
      this.keyMap.get(keyCode)(keyState);
    }
  }, {
    key: "listenTo",
    value: function listenTo(window) {
      var _this = this;

      ['keydown', 'keyup'].forEach(function (eventName) {
        window.addEventListener(eventName, function (event) {
          _this.handleEvent(event);
        });
      });
    }
  }]);

  return Controller;
}();



/***/ }),

/***/ "./public/js/Enemy.js":
/*!****************************!*\
  !*** ./public/js/Enemy.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Enemy; });
/* harmony import */ var _layers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layers.js */ "./public/js/layers.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Enemy =
/*#__PURE__*/
function () {
  function Enemy(pos, type, ghostSprite, game, vel) {
    _classCallCheck(this, Enemy);

    // debugger
    this.pos = pos;
    this.direction = {
      x: 1,
      y: 0
    };
    this.lastDirection = {
      x: -1,
      y: 0
    };
    this.type = type;
    this.excludeDirections = [];
    this.sprite = ghostSprite;
    this.game = game;
    this.dirX = 0;
    this.dirY = -1;
    this.previousPosition = {};
    this.targetPosition = {};

    if (type == 'ghost') {
      // debugger
      this.vel = .5 * vel;
    } else {
      this.vel = .8 * vel;
    } // this.spriteLayer = spriteLayer


    this.size = {
      w: 32,
      h: 32
    };
    this.spriteLayer = Object(_layers_js__WEBPACK_IMPORTED_MODULE_0__["createSpriteLayer"])(this);
    this.game.layers.push(this.spriteLayer);
    this.frameIndex = 1;
    this.currentFrameCount = 0;
    this.changeRoute = false;
    this.currentAxisCount = 0;
    this.currentFrameIndex = 1;
    this.animationStartPosition = _objectSpread({}, this.pos);
    this.changeAxis = false;
    this.playerDirection = {};
  }

  _createClass(Enemy, [{
    key: "draw",
    value: function draw(context) {
      var frameName = this.type == 'ghost' ? this.getBallonFrameName() : this.getDeadFrameName();
      this.sprite.draw(frameName, this.game.context, this.pos.x, this.pos.y);
    }
  }, {
    key: "getBallonFrameName",
    value: function getBallonFrameName() {
      if (this.currentFrameCount < 75) {
        this.currentFrameCount++;
        return "ballon-".concat(this.frameIndex);
      } else {
        this.currentFrameCount = 0;

        if (this.frameIndex == 6) {
          this.frameIndex = 1;
          return "ballon-".concat(this.frameIndex);
        } else {
          this.frameIndex += 1;
          return "ballon-".concat(this.frameIndex - 1);
        }
      }
    }
  }, {
    key: "getDeadFrameName",
    value: function getDeadFrameName() {
      if (this.direction.x == 1 && this.direction.y == 0) {
        this.calculateNextFrame();
        return "dead-right-".concat(Math.ceil(this.currentFrameIndex));
      } else if (this.direction.x == -1 && this.direction.y == 0) {
        this.calculateNextFrame();
        return "dead-left-".concat(Math.ceil(this.currentFrameIndex));
      } else if (this.direction.x == 0 && this.direction.y == 1) {
        this.calculateNextFrame();
        return "dead-down-".concat(Math.ceil(this.currentFrameIndex));
      } else if (this.direction.x == 0 && this.direction.y == -1) {
        this.calculateNextFrame();
        return "dead-top-".concat(Math.ceil(this.currentFrameIndex));
      }
    }
  }, {
    key: "calculateNextFrame",
    value: function calculateNextFrame() {
      if (this.direction.x) {
        var index = Math.round(Math.random() * 3); // Math.abs(this.pos.x - this.animationStartPosition.x ) % 4

        this.currentFrameIndex = index < 1 ? 1 : index;
      } else {
        var _index = Math.round(Math.random() * 3); // Math.abs(this.pos.y - this.animationStartPosition.y ) % 3


        this.currentFrameIndex = _index < 1 ? 1 : _index;
      }
    }
  }, {
    key: "setPlayerDirection",
    value: function setPlayerDirection() {
      var distance = {
        x: this.pos.x - this.game.player.pos.x,
        y: this.pos.y - this.game.player.pos.y
      };
      this.playerDirection.x = distance.x < 1 ? 1 : -1;
      this.playerDirection.y = distance.y < 1 ? 1 : -1;
    }
  }, {
    key: "getToPlayer",
    value: function getToPlayer() {
      var availableDirections = this.availableDirections();

      if (this.direction.x != 0) {
        // change to Y
        for (var i = 0; i < availableDirections.length; i++) {
          if (availableDirections[i].y === this.playerDirection.y) {
            // debugger
            this.lastDirection = _objectSpread({}, this.direction);
            this.direction = _objectSpread({}, availableDirections[i]);
            this.changeAxis = false;
          }
        }
      } else {
        // Change to X
        for (var _i = 0; _i < availableDirections.length; _i++) {
          if (availableDirections[_i].x === this.playerDirection.x) {
            // debugger
            this.lastDirection = _objectSpread({}, this.direction);
            this.direction = _objectSpread({}, availableDirections[_i]);
            this.changeAxis = false;
          }
        }
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.setPlayerDirection();
      this.detectPlayerCollision();

      if (this.detectWallCollision(this.direction)) {
        this.lastDirection = {
          x: this.direction.x * -1,
          y: this.direction.y * -1
        };
        var nextDIrection = this.findNextDirection();
        this.direction = nextDIrection;

        if (!(this.direction.x == this.playerDirection.x || this.direction.y == this.playerDirection.y)) {
          // debugger
          this.changeAxis = true;
        }

        this.animationStartPosition = _objectSpread({}, this.pos);
        this.pos.x = this.myTileCorner().x;
        this.pos.y = this.myTileCorner().y;
      } else if (this.detectBombCollision()) {
        // debugger
        // debugger
        this.lastDirection = _objectSpread({}, this.direction);
        this.direction = {
          x: this.direction.x * -1,
          y: this.direction.y * -1
        };
        this.animationStartPosition = _objectSpread({}, this.pos);
      } else if (this.changeAxis && this.type == 'dead') {
        this.getToPlayer();
      }

      this.pos.x = this.pos.x + this.direction.x * this.vel;
      this.pos.y = this.pos.y + this.direction.y * this.vel;
    }
  }, {
    key: "myTileCorner",
    value: function myTileCorner() {
      return {
        x: Math.round(this.pos.x / 32) * 32,
        y: Math.round(this.pos.y / 32) * 32
      };
    }
  }, {
    key: "availableDirections",
    value: function availableDirections() {
      var tilesDirections = [[1, 0], // right
      [-1, 0], // left
      [0, -1], // up
      [0, 1] // down
      ];
      var currentTile = this.myTileCorner();
      var availableDirections = [];

      for (var i = 0; i < tilesDirections.length; i++) {
        // const element = array[i];
        // debugger
        this.game.getTileMaterial({
          x: currentTile.x + tilesDirections[i][0] * 32,
          y: currentTile.y + tilesDirections[i][1] * 32
        }) === 'grass' ? availableDirections.push({
          x: tilesDirections[i][0],
          y: tilesDirections[i][1]
        }) : null;
      } // console.log(availableSpaces)


      return availableDirections;
    }
  }, {
    key: "findNextDirection",
    value: function findNextDirection() {
      var _this = this;

      var availableDirs = this.availableDirections(); // console.log(availableDirs)

      if (availableDirs.length === 1) {
        return availableDirs[0];
      } else {
        availableDirs = availableDirs.filter(function (dir) {
          return !(dir.x == _this.lastDirection.x && dir.y == _this.lastDirection.y);
        });
        return availableDirs[Math.floor(Math.random() * availableDirs.length)];
      }
    }
  }, {
    key: "intersectRect",
    value: function intersectRect(a, b) {
      if (a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y) {
        // collision detected!
        return true;
      }

      return false;
    }
  }, {
    key: "detectBombCollision",
    value: function detectBombCollision() {
      var bombBox = {};

      for (var i = 0; i < this.game.player.bombs.length; i++) {
        // debugger
        bombBox = _objectSpread({}, this.game.player.bombs[i].pos);
        bombBox.height = this.game.player.bombs[i].size.h;
        bombBox.width = this.game.player.bombs[i].size.w;
      }

      var ballonBox = _objectSpread({}, this.pos);

      ballonBox.width = this.size.w;
      ballonBox.height = this.size.h;

      if (this.intersectRect(ballonBox, bombBox)) {
        return true;
      }

      return false;
    }
  }, {
    key: "detectPlayerCollision",
    value: function detectPlayerCollision() {
      var ballonBox = _objectSpread({}, this.pos);

      var playerBox = _objectSpread({}, this.game.player.pos);

      ballonBox.width = this.size.w;
      ballonBox.height = this.size.h;
      playerBox.width = this.game.player.size.w;
      playerBox.height = this.game.player.size.h;

      if (this.intersectRect(ballonBox, playerBox)) {
        this.game.player.kill();
      }
    }
  }, {
    key: "detectWallCollision",
    value: function detectWallCollision(direction) {
      var nextPosition = {};
      nextPosition.x = this.pos.x + direction.x * 2;
      nextPosition.y = this.pos.y + direction.y * 2;
      nextPosition.width = 32;
      nextPosition.height = 32;
      var tiles = this.game.tiles;

      for (var i = 0; i < tiles.length; i++) {
        if (tiles[i].material == 'grass') {
          continue;
        }

        var tilePosition = tiles[i].pos;
        var tileBox = {};
        tileBox.x = tilePosition.x;
        tileBox.y = tilePosition.y;
        tileBox.width = 32;
        tileBox.height = 32;

        if (this.intersectRect(nextPosition, tileBox, direction)) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "remove",
    value: function remove() {
      for (var i = 0; i < this.game.layers.length; i++) {
        var layer = this.game.layers[i];

        if (this.spriteLayer == layer) {
          // debugger
          this.game.layers.splice(i, 1);
        }
      }

      for (var i = 0; i < this.game.enemies.length; i++) {
        var enemy = this.game.enemies[i];

        if (this == enemy) {
          // debugger
          this.game.enemies.splice(i, 1);
        }
      }
    }
  }]);

  return Enemy;
}();



/***/ }),

/***/ "./public/js/Game.js":
/*!***************************!*\
  !*** ./public/js/Game.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Compositor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Compositor.js */ "./public/js/Compositor.js");
/* harmony import */ var _sprites_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sprites.js */ "./public/js/sprites.js");
/* harmony import */ var _layers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layers.js */ "./public/js/layers.js");
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Player.js */ "./public/js/Player.js");
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Player_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Enemy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Enemy.js */ "./public/js/Enemy.js");
/* harmony import */ var _Controller_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Controller.js */ "./public/js/Controller.js");
/* harmony import */ var _Levels_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Levels.js */ "./public/js/Levels.js");
/* harmony import */ var _loaders_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loaders.js */ "./public/js/loaders.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }











var Game =
/*#__PURE__*/
function () {
  function Game() {
    _classCallCheck(this, Game);

    this.canvas = document.getElementById('screen');
    this.context = this.canvas.getContext('2d');
    this.tiles = [];
    this.layers = null;
    this.bombs = [];
    this.bonuses = [];
    this.enemies = [];
    this.bonusesPercent = 75;
    this.player = null;
    this.updateBackground = false;
    this.loadGame();
    this.update = this.update.bind(this);
    this.isPlaying = false;
    this.gameStarted = true;
    this.level = 1;
    this.gameOver = false;
    this.alreadyLoaded = false;
  }

  _createClass(Game, [{
    key: "createEnimies",
    value: function createEnimies() {
      var _this = this;

      _Levels_js__WEBPACK_IMPORTED_MODULE_6__["default"][this.level].enemies.forEach(function (enemy) {
        if (enemy.type == 'ghost') {
          _this.enemies.push(new _Enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"](_objectSpread({}, enemy.pos), enemy.type, _this.ghostSprite, _this, _Levels_js__WEBPACK_IMPORTED_MODULE_6__["default"][_this.level].enemiesSpeed));
        } else if (enemy.type == 'dead') {
          _this.enemies.push(new _Enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"](_objectSpread({}, enemy.pos), enemy.type, _this.deadSprite, _this, _Levels_js__WEBPACK_IMPORTED_MODULE_6__["default"][_this.level].enemiesSpeed));
        }
      });
    }
  }, {
    key: "getApproximateTile",
    value: function getApproximateTile(position) {
      for (var i = 0; i < this.tiles.length; i++) {
        var tile = this.tiles[i];

        if (tile.pos.x > Math.floor(position.x / 32) && tile.pos.y > Math.floor(position.y / 32)) {
          return tile;
        }
      }

      return {
        material: 'grass'
      };
    }
  }, {
    key: "getTileMaterial",
    value: function getTileMaterial(position) {
      var tile = this.getTile(position);
      return tile ? tile.material : 'grass';
    }
  }, {
    key: "getTile",
    value: function getTile(position) {
      for (var i = 0; i < this.tiles.length; i++) {
        var tile = this.tiles[i];

        if (tile.pos.x == position.x && tile.pos.y == position.y) {
          return tile;
        }
      }
    }
  }, {
    key: "setupKeys",
    value: function setupKeys() {
      var _this2 = this;

      var SPACE = 32;
      var UP = 38;
      var DOWN = 40;
      var RIGHT = 39;
      var LEFT = 37;
      var ESC = 27;
      var keyboardMap = {
        up: false,
        down: false,
        left: false,
        right: false,
        space: false
      };
      window.addEventListener('keydown', function (e) {
        if (_this2.isPlaying) {
          e.preventDefault();

          if (e.keyCode === UP) {
            _this2.player.moving = true;
            _this2.player.direction = {
              x: 0,
              y: -1
            };
          } else if (e.keyCode === DOWN) {
            _this2.player.moving = true;
            _this2.player.direction = {
              x: 0,
              y: 1
            };
          } else if (e.keyCode === RIGHT) {
            _this2.player.moving = true;
            _this2.player.direction = {
              x: 1,
              y: 0
            };
          } else if (e.keyCode === LEFT) {
            _this2.player.moving = true;
            _this2.player.direction = {
              x: -1,
              y: 0
            };
          } else if (e.keyCode === SPACE) {
            _this2.player.setBombsListener();

            _this2.player.update();
          }
        }
      });
      window.addEventListener('keyup', function (e) {
        if (_this2.isPlaying) {
          if (e.keyCode === UP) {
            keyboardMap.up = false;

            _this2.player.stop();
          } else if (e.keyCode === DOWN) {
            keyboardMap.down = false;

            _this2.player.stop();
          } else if (e.keyCode === RIGHT) {
            keyboardMap.right = false;

            _this2.player.stop();
          } else if (e.keyCode === LEFT) {
            keyboardMap.left = false;

            _this2.player.stop();
          }
        }

        if (e.keyCode === ESC) {
          if (_this2.gameOver) {
            // debugger
            _this2.level = 1; // this.loadGame()

            _this2.setUpLevel();
          } else {
            _this2.toggleMenu();
          }
        }
      });
    }
  }, {
    key: "emptyScreen",
    value: function emptyScreen() {
      this.layers = [];
    }
  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      if (this.isPlaying) {
        this.isPlaying = false;
      } else {
        this.isPlaying = true;
      }
    }
  }, {
    key: "drawMenu",
    value: function drawMenu() {
      this.context.drawImage(this.pauseImg, 240, 170);
      this.context.font = "bold 30px Georgia";
      this.context.fillStyle = 'black';
      this.context.fillText("Hit 'ESC' to continue", 130, 200 + 60);
    }
  }, {
    key: "drawGameOver",
    value: function drawGameOver() {
      this.context.drawImage(this.gameOverImg, 200, 150);
      this.context.font = "bold 30px Georgia";
      this.context.fillStyle = 'black';
      this.context.fillText("Hit 'ESC' to try again!", 130, 200 + 95);
    }
  }, {
    key: "handleLevelChange",
    value: function handleLevelChange() {
      this.level += 1;
      this.setUpLevel();
    }
  }, {
    key: "drawGameInfo",
    value: function drawGameInfo() {
      // this.context.fillStyle = "#E5AA2B"
      this.context.font = "bold 20px Georgia";
      this.context.fillStyle = '#CAC7C2';
      this.context.fillText("Level: ".concat(this.level, "  Hearts: ").concat(this.player.lives), 200, 20);
    }
  }, {
    key: "update",
    value: function update() {
      if (this.isPlaying) {
        if (!this.player.lives <= 0 && !this.gameOver) {
          if (this.enemies.length == 0 && !this.gameOver) {
            this.handleLevelChange();
          } // debugger
          // console.log('innnnnnnnnnnnnnnn')
          // debugger


          this.bombs.forEach(function (bomb) {
            return bomb.update();
          });
          this.enemies.forEach(function (enemy) {
            return enemy.update();
          });
          this.player.update();
          this.comp.draw(this.context);
          this.drawGameInfo();
        } else {
          this.comp.draw(this.context);
          this.drawGameOver();
        }
      } else if (!this.isPlaying && !this.gameOver) {
        this.comp.draw(this.context);
        this.drawMenu();
      } else if (this.gameOver && !this.isPlaying) {
        this.drawGameOver();
      }

      requestAnimationFrame(this.update);
    }
  }, {
    key: "showMenu",
    value: function showMenu() {}
  }, {
    key: "setUpLevel",
    value: function setUpLevel() {
      this.player.pos = {
        x: 32,
        y: 32
      };
      this.player.bombsMax = 1;
      this.player.bombStrength = 1;
      this.player.velocity = 1;
      this.bonuses = [];
      this.bombs = [];
      this.tiles = [];
      this.enemies = [];
      this.level > 1 && this.layers.shift(); // debugger

      if (this.gameOver) {
        this.comp.layers = [];
        this.layers = this.comp.layers;
        this.layers.push(this.playerSpriteLayer);
        this.gameOver = false;
        this.isPlaying = true;
        this.player.lives = 3;
      }

      this.layers.unshift(Object(_layers_js__WEBPACK_IMPORTED_MODULE_2__["createBackgroundLayer"])(this.backgroundSprites, this.tiles, this)); // debugger

      this.createEnimies();

      if (!this.gameOver && !this.alreadyLoaded) {
        this.update();
        this.alreadyLoaded = true;
        this.isPlaying = false;
      }
    }
  }, {
    key: "loadGame",
    value: function loadGame() {
      var _this3 = this;

      Promise.all([_Player_js__WEBPACK_IMPORTED_MODULE_3___default()(this), Object(_sprites_js__WEBPACK_IMPORTED_MODULE_1__["loadBackgroundSprites"])(), Object(_sprites_js__WEBPACK_IMPORTED_MODULE_1__["loadGhostSprite"])(), Object(_sprites_js__WEBPACK_IMPORTED_MODULE_1__["loadDeadSprite"])(), Object(_loaders_js__WEBPACK_IMPORTED_MODULE_7__["loadImage"])('/img/pause.png'), Object(_loaders_js__WEBPACK_IMPORTED_MODULE_7__["loadImage"])('/img/game-over.png')]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 6),
            player = _ref2[0],
            backgroundSprites = _ref2[1],
            ghostSprite = _ref2[2],
            deadSprite = _ref2[3],
            pauseImg = _ref2[4],
            gameOverImg = _ref2[5];

        // debugger
        _this3.pauseImg = pauseImg;
        _this3.ghostSprite = ghostSprite;
        _this3.deadSprite = deadSprite;
        _this3.gameOverImg = gameOverImg;
        _this3.enemies = [];
        _this3.bombs = [];
        _this3.gameOver = false;
        _this3.isPlaying = true;
        !_this3.alreadyLoaded && _this3.setupKeys();
        _this3.comp = new _Compositor_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
        _this3.layers = _this3.comp.layers;
        _this3.playerSpriteLayer = Object(_layers_js__WEBPACK_IMPORTED_MODULE_2__["createSpriteLayer"])(player);

        _this3.layers.push(_this3.playerSpriteLayer);

        _this3.player = player;
        _this3.backgroundSprites = backgroundSprites;

        _this3.setUpLevel();
      });
    }
  }]);

  return Game;
}();

new Game();

/***/ }),

/***/ "./public/js/Levels.js":
/*!*****************************!*\
  !*** ./public/js/Levels.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Levels = {
  1: {
    bonusesPercent: 75,
    enemies: [{
      pos: {
        x: 32 * 15,
        y: 32
      },
      type: 'ghost'
    }, {
      pos: {
        x: 32,
        y: 32 * 11
      },
      type: 'ghost'
    }, {
      pos: {
        x: 32 * 15,
        y: 32 * 11
      },
      type: 'ghost'
    }],
    enemiesSpeed: 1
  },
  2: {
    bonusesPercent: 65,
    enemies: [{
      pos: {
        x: 32 * 15,
        y: 32
      },
      type: 'ghost'
    }, {
      pos: {
        x: 32,
        y: 32 * 11
      },
      type: 'ghost'
    }, {
      pos: {
        x: 32 * 15,
        y: 32 * 11
      },
      type: 'ghost'
    }, {
      pos: {
        x: 32 * 11,
        y: 32 * 3
      },
      type: 'dead'
    }, {
      pos: {
        x: 32 * 11,
        y: 32 * 9
      },
      type: 'dead'
    }],
    enemiesSpeed: 1
  },
  3: {
    bonusesPercent: 65,
    enemies: [{
      pos: {
        x: 32 * 15,
        y: 32
      },
      type: 'ghost'
    }, {
      pos: {
        x: 32,
        y: 32 * 11
      },
      type: 'ghost'
    }, {
      pos: {
        x: 32 * 15,
        y: 32 * 11
      },
      type: 'ghost'
    }, {
      pos: {
        x: 32 * 11,
        y: 32 * 3
      },
      type: 'dead'
    }, {
      pos: {
        x: 32 * 11,
        y: 32 * 9
      },
      type: 'dead'
    }, {
      pos: {
        x: 32 * 13,
        y: 32 * 3
      },
      type: 'dead'
    }, {
      pos: {
        x: 32 * 11,
        y: 32 * 3
      },
      type: 'dead'
    }],
    enemiesSpeed: 2
  },
  4: {
    bonusesPercent: 65,
    enemies: [{
      pos: {
        x: 32 * 15,
        y: 32
      },
      type: 'ghost'
    }, {
      pos: {
        x: 32,
        y: 32 * 11
      },
      type: 'ghost'
    }, {
      pos: {
        x: 32 * 15,
        y: 32 * 11
      },
      type: 'ghost'
    }, {
      pos: {
        x: 32 * 11,
        y: 32 * 3
      },
      type: 'dead'
    }, {
      pos: {
        x: 32 * 11,
        y: 32 * 9
      },
      type: 'dead'
    }, {
      pos: {
        x: 32 * 13,
        y: 32 * 3
      },
      type: 'dead'
    }, {
      pos: {
        x: 32 * 11,
        y: 32 * 3
      },
      type: 'dead'
    }],
    enemiesSpeed: 3
  },
  5: {
    bonusesPercent: 65,
    enemies: [{
      pos: {
        x: 32 * 15,
        y: 32
      },
      type: 'ghost'
    }, {
      pos: {
        x: 32,
        y: 32 * 11
      },
      type: 'ghost'
    }, {
      pos: {
        x: 32 * 15,
        y: 32 * 11
      },
      type: 'ghost'
    }, {
      pos: {
        x: 32 * 11,
        y: 32 * 3
      },
      type: 'dead'
    }, {
      pos: {
        x: 32 * 11,
        y: 32 * 9
      },
      type: 'dead'
    }, {
      pos: {
        x: 32 * 13,
        y: 32 * 3
      },
      type: 'dead'
    }, {
      pos: {
        x: 32 * 11,
        y: 32 * 3
      },
      type: 'dead'
    }],
    enemiesSpeed: 3
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Levels);

/***/ }),

/***/ "./public/js/Player.js":
/*!*****************************!*\
  !*** ./public/js/Player.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/ninja/BomberMan/public/js/Player.js: Support for the experimental syntax 'classProperties' isn't currently enabled (138:15):\n\n\u001b[0m \u001b[90m 136 | \u001b[39m       }\u001b[0m\n\u001b[0m \u001b[90m 137 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 138 | \u001b[39m       moveUp \u001b[33m=\u001b[39m \u001b[36mfunction\u001b[39m(){\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m              \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 139 | \u001b[39m        \u001b[36mif\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdetectWallCollision({x\u001b[33m:\u001b[39m \u001b[35m0\u001b[39m\u001b[33m,\u001b[39m y\u001b[33m:\u001b[39m \u001b[33m-\u001b[39m\u001b[35m1\u001b[39m})) {\u001b[0m\n\u001b[0m \u001b[90m 140 | \u001b[39m            \u001b[36mreturn\u001b[39m} \u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 141 | \u001b[39m        \u001b[36mif\u001b[39m(\u001b[33m!\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39manimationStartPosition){\u001b[0m\n\nAdd @babel/plugin-proposal-class-properties (https://git.io/vb4SL) to the 'plugins' section of your Babel config to enable transformation.\n    at Object.raise (/home/ninja/BomberMan/node_modules/@babel/parser/lib/index.js:6420:17)\n    at Object.expectPlugin (/home/ninja/BomberMan/node_modules/@babel/parser/lib/index.js:7778:18)\n    at Object.parseClassProperty (/home/ninja/BomberMan/node_modules/@babel/parser/lib/index.js:11013:12)\n    at Object.pushClassProperty (/home/ninja/BomberMan/node_modules/@babel/parser/lib/index.js:10978:30)\n    at Object.parseClassMemberWithIsStatic (/home/ninja/BomberMan/node_modules/@babel/parser/lib/index.js:10917:14)\n    at Object.parseClassMember (/home/ninja/BomberMan/node_modules/@babel/parser/lib/index.js:10851:10)\n    at withTopicForbiddingContext (/home/ninja/BomberMan/node_modules/@babel/parser/lib/index.js:10806:14)\n    at Object.withTopicForbiddingContext (/home/ninja/BomberMan/node_modules/@babel/parser/lib/index.js:9884:14)\n    at Object.parseClassBody (/home/ninja/BomberMan/node_modules/@babel/parser/lib/index.js:10783:10)\n    at Object.parseClass (/home/ninja/BomberMan/node_modules/@babel/parser/lib/index.js:10757:22)\n    at Object.parseStatementContent (/home/ninja/BomberMan/node_modules/@babel/parser/lib/index.js:10051:21)\n    at Object.parseStatement (/home/ninja/BomberMan/node_modules/@babel/parser/lib/index.js:10009:17)\n    at Object.parseBlockOrModuleBlockBody (/home/ninja/BomberMan/node_modules/@babel/parser/lib/index.js:10585:25)\n    at Object.parseBlockBody (/home/ninja/BomberMan/node_modules/@babel/parser/lib/index.js:10572:10)\n    at Object.parseTopLevel (/home/ninja/BomberMan/node_modules/@babel/parser/lib/index.js:9940:10)\n    at Object.parse (/home/ninja/BomberMan/node_modules/@babel/parser/lib/index.js:11447:17)\n    at parse (/home/ninja/BomberMan/node_modules/@babel/parser/lib/index.js:11483:38)\n    at parser (/home/ninja/BomberMan/node_modules/@babel/core/lib/transformation/normalize-file.js:168:34)\n    at normalizeFile (/home/ninja/BomberMan/node_modules/@babel/core/lib/transformation/normalize-file.js:102:11)\n    at runSync (/home/ninja/BomberMan/node_modules/@babel/core/lib/transformation/index.js:44:43)\n    at runAsync (/home/ninja/BomberMan/node_modules/@babel/core/lib/transformation/index.js:35:14)\n    at process.nextTick (/home/ninja/BomberMan/node_modules/@babel/core/lib/transform.js:34:34)\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ }),

/***/ "./public/js/SpriteSheet.js":
/*!**********************************!*\
  !*** ./public/js/SpriteSheet.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SpriteSheet; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SpriteSheet =
/*#__PURE__*/
function () {
  function SpriteSheet(image, width, height) {
    _classCallCheck(this, SpriteSheet);

    this.image = image;
    this.width = width;
    this.height = height;
    this.tiles = new Map();
  }

  _createClass(SpriteSheet, [{
    key: "define",
    value: function define(name, x, y, width, height) {
      var buffer = document.createElement('canvas');
      buffer.width = width;
      buffer.height = height;
      buffer.getContext('2d').drawImage(this.image, x, y, width, height, 0, 0, width, height);
      this.tiles.set(name, buffer);
    }
  }, {
    key: "defineTile",
    value: function defineTile(name, x, y) {
      this.define(name, x * this.width, y * this.height, this.width, this.height);
    }
  }, {
    key: "draw",
    value: function draw(name, context, x, y) {
      var buffer = this.tiles.get(name); // debugger

      context.drawImage(buffer, x, y);
    }
  }, {
    key: "drawTile",
    value: function drawTile(name, context, x, y) {
      this.draw(name, context, x * this.width, y * this.height);
    }
  }]);

  return SpriteSheet;
}();



/***/ }),

/***/ "./public/js/Tile.js":
/*!***************************!*\
  !*** ./public/js/Tile.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tile; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tile =
/*#__PURE__*/
function () {
  function Tile(pos, material, game) {
    _classCallCheck(this, Tile);

    this.pos = pos;
    this.material = material;
    this.game = game;
  }

  _createClass(Tile, [{
    key: "remove",
    value: function remove() {
      for (var i = 0; i < this.game.tiles.length; i++) {
        var tile = this.game.tiles[i];

        if (this == tile) {
          this.game.tiles.splice(i, 1);
        }
      }

      this.game.updateBackground = true;
    }
  }]);

  return Tile;
}();



/***/ }),

/***/ "./public/js/layers.js":
/*!*****************************!*\
  !*** ./public/js/layers.js ***!
  \*****************************/
/*! exports provided: createBackgroundLayer, createSpriteLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBackgroundLayer", function() { return createBackgroundLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSpriteLayer", function() { return createSpriteLayer; });
/* harmony import */ var _Tile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tile.js */ "./public/js/Tile.js");
/* harmony import */ var _Bonus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bonus.js */ "./public/js/Bonus.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }




function drawBonuses(context, sprites, woodsArray, game) {
  var woods = _toConsumableArray(woodsArray);

  woods.sort(function () {
    return 0.5 - Math.random();
  });
  var bonusesPercent = game.bonusesPercent;
  var bonusTypes = ['speed', 'bomb', 'fire'];

  for (var j = 0; j < 4; j++) {
    var bonusesCount = Math.round(woods.length * bonusesPercent * 0.01 / 4);
    var placedCount = 0;

    for (var i = 0; i < woods.length; i++) {
      if (placedCount > bonusesCount) {
        break;
      }

      var tile = woods[i];

      if (j == 0 && tile.pos.x < 32 / 2 && tile.pos.y < 32 / 2 || j == 1 && tile.pos.x < 32 / 2 && tile.pos.y > 32 / 2 || j == 2 && tile.pos.x > 32 / 2 && tile.pos.y < 32 / 2 || j == 3 && tile.pos.x > 32 / 2 && tile.pos.y > 32 / 2) {
        var typePosition = bonusTypes[placedCount % 3];
        var bonus = new _Bonus_js__WEBPACK_IMPORTED_MODULE_1__["default"](_objectSpread({}, tile.pos), typePosition, game);
        game.bonuses.push(bonus);
        sprites.woodSprite.draw('wood', context, tile.pos.x, tile.pos.y);
        placedCount++;
      }
    }
  }
}

function drawBackground(context, sprites, tiles, game) {
  var bonusTypes = ['speed', 'bomb', 'fire'];
  var woodArray = [];

  for (var y = 0; y < 13; y++) {
    for (var x = 0; x < 17; x++) {
      if (y == 0 || x == 0 || y == 13 - 1 || x == 17 - 1 || x % 2 == 0 && y % 2 == 0) {
        sprites.wallSprite.draw('wall', context, x * 32, y * 32);
        tiles.push(new _Tile_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
          x: x * 32,
          y: y * 32
        }, 'wall', game));
      } else {
        sprites.grassSprite.draw('grass', context, x * 32, y * 32);

        if (x > 3 && x < 13 && (y == 1 || y == 11)) {
          sprites.woodSprite.draw('wood', context, x * 32, y * 32);
          var woodTile = new _Tile_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
            x: x * 32,
            y: y * 32
          }, 'wood', game);
          tiles.push(woodTile);
          woodArray.push(woodTile);
        }

        if ((y == 7 || y == 5) && !(x == 3 || x == 13)) {
          sprites.woodSprite.draw('wood', context, x * 32, y * 32);

          var _woodTile = new _Tile_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
            x: x * 32,
            y: y * 32
          }, 'wood', game);

          tiles.push(_woodTile);
          woodArray.push(_woodTile);
        }

        if (x == 3 || x == 13) {
          sprites.woodSprite.draw('wood', context, x * 32, y * 32);

          var _woodTile2 = new _Tile_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
            x: x * 32,
            y: y * 32
          }, 'wood', game);

          tiles.push(_woodTile2);
          woodArray.push(_woodTile2);
        }
      }
    }
  }

  drawBonuses(context, sprites, woodArray, game);
}

function updateBackground(context, tiles, sprites, bonuses) {
  bonuses.forEach(function (bonus) {
    // bonus
    bonus.draw(context);
  });
  tiles.forEach(function (tile) {
    // debugger
    if (tile.material == 'wood') {
      sprites.woodSprite.draw('wood', context, tile.pos.x, tile.pos.y);
    } else if (tile.material == 'wall') {
      // debugger
      sprites.wallSprite.draw('wall', context, tile.pos.x, tile.pos.y);
    }
  });
}

function drawGrassTiles(sprite, context) {
  for (var x = 0; x < 17; x++) {
    for (var y = 0; y < 13; y++) {
      sprite.draw('grass', context, x * 32, y * 32);
    }
  }
}

function createBackgroundLayer(backgroundSprites, tiles, game) {
  var buffer = document.createElement('canvas');
  buffer.width = 816;
  buffer.height = 624;
  var GrassBuffer = document.createElement('canvas');
  GrassBuffer.width = 816;
  GrassBuffer.height = 624;
  drawGrassTiles(backgroundSprites.grassSprite, GrassBuffer.getContext('2d'));
  drawBackground(buffer.getContext('2d'), backgroundSprites, tiles, game);
  return function drawBackgroundLayer(context) {
    if (game.updateBackground) {
      // console.log(game.bombs.length)
      buffer.getContext('2d').drawImage(GrassBuffer, 0, 0);
      updateBackground(buffer.getContext('2d'), tiles, backgroundSprites, game.bonuses);
      game.updateBackground = false;
    }

    context.drawImage(buffer, 0, 0);
  };
}
function createSpriteLayer(entity) {
  return function drawSpriteLayer(context) {
    entity.draw(context);
  };
}

/***/ }),

/***/ "./public/js/loaders.js":
/*!******************************!*\
  !*** ./public/js/loaders.js ***!
  \******************************/
/*! exports provided: loadImage, loadLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImage", function() { return loadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLevel", function() { return loadLevel; });
function loadImage(url) {
  return new Promise(function (resolve) {
    var image = new Image();
    image.addEventListener('load', function () {
      resolve(image);
    });
    image.src = url;
  });
}
function loadLevel(name) {
  return fetch("/levels/".concat(name, ".json")).then(function (r) {
    return r.json();
  });
}

/***/ }),

/***/ "./public/js/sprites.js":
/*!******************************!*\
  !*** ./public/js/sprites.js ***!
  \******************************/
/*! exports provided: loadPlayerSprite, loadBombSprite, loadBonusSprite, loadGhostSprite, loadDeadSprite, loadFireSprite, loadBackgroundSprites */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPlayerSprite", function() { return loadPlayerSprite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadBombSprite", function() { return loadBombSprite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadBonusSprite", function() { return loadBonusSprite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadGhostSprite", function() { return loadGhostSprite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDeadSprite", function() { return loadDeadSprite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFireSprite", function() { return loadFireSprite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadBackgroundSprites", function() { return loadBackgroundSprites; });
/* harmony import */ var _SpriteSheet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpriteSheet.js */ "./public/js/SpriteSheet.js");
/* harmony import */ var _loaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loaders.js */ "./public/js/loaders.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function loadPlayerSprite() {
  return Object(_loaders_js__WEBPACK_IMPORTED_MODULE_1__["loadImage"])('/img/player.png').then(function (image) {
    var player = new _SpriteSheet_js__WEBPACK_IMPORTED_MODULE_0__["default"](image, 24, 24);
    player.define('idle', 0, 0, 24, 24);
    player.define('left-0', 0, 24, 24, 24);
    player.define('left-1', 24, 24, 24, 24);
    player.define('left-2', 48, 24, 24, 24);
    player.define('right-0', 0, 48, 24, 24);
    player.define('right-1', 24, 48, 24, 24);
    player.define('right-2', 48, 48, 24, 24);
    player.define('down-0', 0, 0, 24, 24);
    player.define('down-1', 24, 0, 24, 24);
    player.define('down-2', 48, 0, 24, 24);
    player.define('top-0', 0, 72, 24, 24);
    player.define('top-1', 24, 72, 24, 24);
    player.define('top-2', 48, 72, 24, 24);
    return player;
  });
}
function loadBombSprite() {
  return Object(_loaders_js__WEBPACK_IMPORTED_MODULE_1__["loadImage"])('/img/bomb.png').then(function (image) {
    var bomb = new _SpriteSheet_js__WEBPACK_IMPORTED_MODULE_0__["default"](image, 28, 28);
    bomb.define('bomb', 0, 0, 28, 28);
    return bomb;
  });
}
function loadBonusSprite() {
  return Object(_loaders_js__WEBPACK_IMPORTED_MODULE_1__["loadImage"])('/img/bonuses.png').then(function (image) {
    var bonuses = new _SpriteSheet_js__WEBPACK_IMPORTED_MODULE_0__["default"](image, 32, 32);
    bonuses.define('speed', 0, 0, 32, 32);
    bonuses.define('bomb', 32, 0, 32, 32);
    bonuses.define('fire', 64, 0, 32, 32);
    return bonuses;
  });
}
function loadGhostSprite() {
  return Object(_loaders_js__WEBPACK_IMPORTED_MODULE_1__["loadImage"])('/img/enemy.png').then(function (image) {
    var ghost = new _SpriteSheet_js__WEBPACK_IMPORTED_MODULE_0__["default"](image, 24, 24);
    ghost.define('ballon-1', 0, 24, 24, 24);
    ghost.define('ballon-2', 24, 24, 24, 24);
    ghost.define('ballon-3', 48, 24, 24, 24);
    ghost.define('ballon-4', 0, 48, 24, 24);
    ghost.define('ballon-5', 24, 48, 24, 24);
    ghost.define('ballon-6', 48, 48, 24, 24);
    return ghost;
  });
}
function loadDeadSprite() {
  return Object(_loaders_js__WEBPACK_IMPORTED_MODULE_1__["loadImage"])('/img/dead.png').then(function (image) {
    var ghost = new _SpriteSheet_js__WEBPACK_IMPORTED_MODULE_0__["default"](image, 32, 32);
    ghost.define('dead-left-1', 0, 32 * 3, 32, 32);
    ghost.define('dead-left-2', 32, 32 * 3, 32, 32);
    ghost.define('dead-left-3', 32 * 2, 32 * 3, 32, 32);
    ghost.define('dead-right-1', 0, 32, 32, 32);
    ghost.define('dead-right-2', 32, 32, 32, 32);
    ghost.define('dead-right-3', 32 * 2, 32, 32, 32);
    ghost.define('dead-top-1', 0, 0, 32, 32);
    ghost.define('dead-top-2', 32, 0, 32, 32);
    ghost.define('dead-top-3', 32 * 2, 0, 32, 32);
    ghost.define('dead-down-1', 0, 64, 32, 32);
    ghost.define('dead-down-2', 32, 64, 32, 32);
    ghost.define('dead-down-3', 32 * 2, 64, 32, 32);
    return ghost;
  });
}
function loadFireSprite() {
  return Object(_loaders_js__WEBPACK_IMPORTED_MODULE_1__["loadImage"])('/img/fire.png').then(function (image) {
    var fire = new _SpriteSheet_js__WEBPACK_IMPORTED_MODULE_0__["default"](image, 28, 28);
    fire.define('fire', 0, 0, 28, 28);
    return fire;
  });
}

function loadGrassSprite() {
  return Object(_loaders_js__WEBPACK_IMPORTED_MODULE_1__["loadImage"])('/img/tile_grass.png').then(function (image) {
    var grass = new _SpriteSheet_js__WEBPACK_IMPORTED_MODULE_0__["default"](image, 32, 32);
    grass.define('grass', 0, 0, 32, 32);
    return grass;
  });
}

function loadWallSprite() {
  return Object(_loaders_js__WEBPACK_IMPORTED_MODULE_1__["loadImage"])('/img/tile_wall.png').then(function (image) {
    var wall = new _SpriteSheet_js__WEBPACK_IMPORTED_MODULE_0__["default"](image, 32, 32);
    wall.define('wall', 0, 0, 32, 32);
    return wall;
  });
}

function loadWoodSprite() {
  return Object(_loaders_js__WEBPACK_IMPORTED_MODULE_1__["loadImage"])('/img/tile_wood.png').then(function (image) {
    var wood = new _SpriteSheet_js__WEBPACK_IMPORTED_MODULE_0__["default"](image, 32, 32);
    wood.define('wood', 0, 0, 32, 32);
    return wood;
  });
} // Promise.all([
//     loadGrassSprite(),
//     loadWallSprite(),
//     loadWoodSprite(),
// ])
// .then(([grassSprite, wallSprite, woodSprite]) => {
// })


function loadBackgroundSprites() {
  return Promise.all([loadGrassSprite(), loadWallSprite(), loadWoodSprite()]).then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 3),
        grassSprite = _ref2[0],
        wallSprite = _ref2[1],
        woodSprite = _ref2[2];

    return {
      grassSprite: grassSprite,
      wallSprite: wallSprite,
      woodSprite: woodSprite
    };
  });
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map