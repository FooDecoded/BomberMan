import Entity from './Entity.js';
import {loadPlayerSprite, loadBombSprite, loadFireSprite} from './sprites.js';
import Bomb from './Bomb.js'

class Player extends Entity {

    constructor(sprites, game){
        super();

        this.game = game
        // debugger
        this.bombSprite = sprites.bombSprite
        this.sprite = sprites.playerSprite;
        this.fireSprite = sprites.fireSprite
        this.bombsMax = 1
        this.bombStrength = 1
        this.velocity = 1
        this.size = {
            w: 24,
            h: 24
        }
        this.alive = true
        this.bombs = []
        this.direction = ''
        this.moving = false
        this.currentFrameIndex = 1
        this.animationStartPosition = {...this.pos}
    }

    getFrameName(){
        if(this.moving && this.direction.x == 1 && this.direction.y == 0){
            this.calculateNextFrame()
            return `right-${Math.floor(this.currentFrameIndex)}`
        } else if(this.moving && this.direction.x == -1 && this.direction.y == 0){
            this.calculateNextFrame()
            return `left-${Math.floor(this.currentFrameIndex)}`

        } else if(this.moving && this.direction.x == 0 && this.direction.y == 1){
            this.calculateNextFrame()
            return `down-${Math.floor(this.currentFrameIndex)}`

        } else if(this.moving && this.direction.x == 0 && this.direction.y == -1){
            this.calculateNextFrame()
            return `top-${Math.floor(this.currentFrameIndex)}`
        } else if(!this.moving){
            return `idle`
        }
    }

    calculateNextFrame(){
        if(this.direction.x){
            this.currentFrameIndex = Math.abs(this.pos.x - this.animationStartPosition.x ) % 3
        } else{
            this.currentFrameIndex = Math.abs(this.pos.y - this.animationStartPosition.y ) % 3
        }
    }

    draw(context) {
        // debugger
        let frameName = this.getFrameName()
        // console.log(frameName)
        // console.log(frameName)
        // console.log('innnnnnnnnnnnnnnnnnnnnn')
        // console.log(frameName)
        this.sprite.draw(frameName, this.game.context, this.pos.x, this.pos.y);
    }


    myTileCorner(){
        return {
            x: Math.round(this.pos.x / 32) * 32,
            y: Math.round(this.pos.y / 32) * 32
        }
    }

    update(){
        if(this.moving){
            // debugger
            if(this.direction.x == 1 && this.direction.y == 0){
                this.moveRight()
            }
            else if(this.direction.x == -1 && this.direction.y == 0){
                this.moveLeft()
            }
            else if(this.direction.x == 0 && this.direction.y == -1){
                this.moveUp()
            }
            else if(this.direction.x == 0 && this.direction.y == 1){
                this.moveDown()
            }
        }
    }

    adjacenrFreeTiles(){
        let tilesDirections = [
            [1,0], // right
            [-1, 0],  // left
            [0, -1], // up
            [0, 1] // down
        ]
        let currentTile = this.myTileCorner()
        let availableSpaces = []
        for (let i = 0; i < tilesDirections.length; i++) {
            // const element = array[i];
            // debugger
            this.game.getTileMaterial({ 
                x: currentTile.x + tilesDirections[i][0] * 32 
                , y: currentTile.y + tilesDirections[i][1] * 32 })
                === 'grass' ? availableSpaces.push({
                    x: currentTile.x + tilesDirections[i][0] * 32,
                    y: currentTile.y + tilesDirections[i][1] * 32 
                }) : null
        }
        // console.log(availableSpaces)
        return availableSpaces
       }

       moveUp = function(){
        if(this.detectWallCollision({x: 0, y: -1})) {
            return} ;
        if(!this.animationStartPosition){
            this.animationStartPosition = {...this.pos}
        }
        this.handleBonusCollision()
            this.vel = -this.velocity
            this.pos.y += this.vel
    }
    moveRight(){
        if(this.detectWallCollision({x: 1, y: 0})) {
            return
        } ;
        if(!this.animationStartPosition){
            this.animationStartPosition = {...this.pos}
        }
        this.handleBonusCollision()
        this.vel = this.velocity
        this.pos.x += this.vel
    }

    moveDown(){

        if(this.detectWallCollision({x: 0, y: 1})) {
            return} ;
        if(!this.animationStartPosition){
            this.animationStartPosition = {...this.pos}
        }
        this.handleBonusCollision()
        this.vel = this.velocity
        this.pos.y += this.vel
    }
    moveLeft(){

        if(this.detectWallCollision({x: -1, y: 0})) {
            return} ;
        if(!this.animationStartPosition){
            this.animationStartPosition = {...this.pos}
        }
        this.handleBonusCollision()
        this.vel = -this.velocity
        this.pos.x += this.vel            
    }

    stop(){
        this.moving = false
        this.animationStartPosition = null
    }


    intersectRect(a, b) {

        if (a.x < b.x + b.width &&
            a.x + a.width > b.x &&
            a.y < b.y + b.height &&
            a.y + a.height > b.y) {
             // collision detected!
             return true 
         }
         return false 
    }

    detectWallCollision(direction) {
        let nextPosition = {};
        nextPosition.x = this.pos.x + (direction.x * this.velocity);
        nextPosition.y = this.pos.y + (direction.y * this.velocity);
        nextPosition.width = this.size.w;
        nextPosition.height = this.size.h;

        var tiles = this.game.tiles;
        for (var i = 0; i < tiles.length; i++) {
            if(tiles[i].material == 'grass'){
                continue
            }
            var tilePosition = tiles[i].pos;
            var tileBox = {};
            tileBox.x = tilePosition.x ;
            tileBox.y = tilePosition.y ;
            tileBox.width = 32
            tileBox.height = 32

            if(this.intersectRect(nextPosition, tileBox, direction)) {
                this.movePlayerCloser(direction, tilePosition)
                return true;
            }
        }
        return false;
    }

    movePlayerCloser(direction, tilePosition){
        if(direction.x == 1 && direction.y == 0){
            this.pos.x = tilePosition.x - 24
            this.stop()
        } else if(direction.x == -1 && direction.y == 0){
            // console.log(this.)
            this.pos.x = tilePosition.x + 32
            this.stop()
        } else if(direction.x == 0 && direction.y == 1){
            // console.log(this.)
            this.pos.y = tilePosition.y -24
            this.stop()
        } else if(direction.x == 0 && direction.y == -1){
            // console.log(this.)
            this.pos.y = tilePosition.y + 32
            this.stop()
        }
    }

    removeFromArray(array, item) {
        for (var i = 0; i < array.length; i++) {
            if (item == array[i]) {
                array.splice(i, 1);
            }
        }
        return array;
    };

    setBombsListener() {            
        // Check whether there is already bomb on this position
        for (var i = 0; i < this.game.bombs.length; i++) {
            var bomb = this.game.bombs[i];
            if (bomb.pos.x == this.pos.x && bomb.pos.y == this.pos.y) {
                return;
            }
        }

        var unexplodedBombs = 0;
        for (var i = 0; i < this.bombs.length; i++) {
            if (!this.bombs[i].exploded) {
                unexplodedBombs++;
            }
        }

        if (unexplodedBombs < this.bombsMax) {
            var bomb = new Bomb({...this.pos}, this.bombStrength, this.game, this.bombSprite, this.fireSprite);

            this.bombs.push(bomb);
            this.game.bombs.push(bomb);

            bomb.setExplodeListener(function() {
                
            });
        }
            
    }
    handleBonusCollision() {
        for (var i = 0; i < this.game.bonuses.length; i++) {
            var bonus = this.game.bonuses[i];
            if (this.intersectRect({...bonus.pos, width: 32 - 2, height: 32 - 2}, {...this.pos, width: 24, height: 24})) {
                // debugger
                this.applyBonus(bonus);
                bonus.remove();
            }
        }
    }

    applyBonus(bonus) {
        if (bonus.type == 'speed') {
            this.velocity += .25;
        } else if (bonus.type == 'bomb') {
            this.bombsMax++;
        } else if (bonus.type == 'fire') {
            this.bombStrength++;
        }
    }
}

export default function createPlayer(game){
    return Promise.all([
        loadPlayerSprite(),
        loadBombSprite(),
        loadFireSprite(),
    ]).then(([playerSprite, bombSprite, fireSprite]) => {
        return new Player({playerSprite, bombSprite, fireSprite}, game)
    })

}
