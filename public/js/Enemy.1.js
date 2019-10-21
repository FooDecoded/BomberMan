import { loadGhostSprite, loadDeadSprite } from './sprites.js';
import { createSpriteLayer } from './layers.js';

export default function createEnemy(pos, type, game){
    if(type === 'ghost'){
        return loadGhostSprite().then(ghostSprite => {
            const ghost = new Enemy(pos, ghostSprite,type, game)
            game.enemies.push(ghost)
            return ghost
        })
    } else if (type === 'dead'){
        return loadDeadSprite().then(deadSprite => {
            const dead = new Enemy(pos, deadSprite, type, game)
            game.enemies.push(dead)
            return dead
        })
    }
}


class Enemy{
    constructor(pos, ghostSprite, type, game, spriteLayer){
        this.pos = pos
        this.type = type
        this.direction = {x: 1, y: 0}
        this.lastDirection = {x: -1, y: 0}
        this.type = ''
        this.excludeDirections = []
        this.sprite = ghostSprite;
        this.game = game ;
        this.dirX = 0
        this.dirY = -1
        this.previousPosition = {}
        this.targetPosition = {}
        this.vel = .5
        this.spriteLayer = spriteLayer
        this.size = {
            w: 24, 
            h: 24
        }
        this.spriteLayer = createSpriteLayer(this);
        this.game.layers.push(this.spriteLayer)
        this.frameIndex = 1;
        this.currentFrameCount = 0
        this.changeRoute = false
    }

    draw(context){
        this.sprite.draw(this.getFrameName(), context, this.pos.x, this.pos.y);
    }

    
    getBallonFrameName(){

        if(this.currentFrameCount < 75){
            this.currentFrameCount++;
            return `ballon-${this.frameIndex}`
        } else {
            this.currentFrameCount = 0;
            if(this.frameIndex == 6){
                this.frameIndex = 1
                return `ballon-${this.frameIndex}`
            } else {
                this.frameIndex += 1
                return `ballon-${this.frameIndex - 1}`
            }
        }
    }

    

    update() {
        this.detectPlayerCollision()
        if(this.detectWallCollision(this.direction)){
            this.lastDirection = {x: this.direction.x * -1, y: this.direction.y * -1}
            let nextDIrection = this.findNextDirection()
            this.direction = nextDIrection;
            this.pos.x = this.myTileCorner().x
            this.pos.y = this.myTileCorner().y
        } else if(this.detectBombCollision()){
            // debugger
            this.lastDirection = {...this.direction}
            this.direction = {x: this.direction.x * -1, y: this.direction.y * -1}
        } 
        this.pos.x = this.pos.x + this.direction.x * this.vel
        this.pos.y = this.pos.y + this.direction.y * this.vel
    }

   myTileCorner(){
    return {
        x: Math.round(this.pos.x / 32) * 32,
        y: Math.round(this.pos.y / 32) * 32
    }
   }

   availableDirections(){
    let tilesDirections = [
        [1,0], // right
        [-1, 0],  // left
        [0, -1], // up
        [0, 1] // down
    ]
    let currentTile = this.myTileCorner()
    let availableDirections = []
    for (let i = 0; i < tilesDirections.length; i++) {
        // const element = array[i];
        // debugger
        this.game.getTileMaterial({ 
            x: currentTile.x + tilesDirections[i][0] * 32 
            , y: currentTile.y + tilesDirections[i][1] * 32 })
            === 'grass' ? availableDirections.push({x: tilesDirections[i][0], y: tilesDirections[i][1]}) : null
    }
    // console.log(availableSpaces)
    return availableDirections
   }

   findNextDirection(){
       let availableDirs = this.availableDirections()
        console.log(availableDirs)
        if(availableDirs.length === 1){
            return availableDirs[0]
        } else {
            availableDirs = availableDirs.filter(dir => {
                // debugger
                return !(dir.x == this.lastDirection.x && dir.y == this.lastDirection.y)
            })
            return availableDirs[Math.floor(Math.random()*availableDirs.length)];
        }
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

    detectBombCollision(){
        let bombBox = {};
        for(let i = 0; i < this.game.bombs.length ; i++){
            bombBox = {...this.game.bombs[i].pos}
            bombBox.height = this.game.bombs[i].size.h
            bombBox.width = this.game.bombs[i].size.w
        }
        var ballonBox = {...this.pos};
        ballonBox.width = this.size.w
        ballonBox.height = this.size.h
        if(this.intersectRect(ballonBox, bombBox)){
            return true
        }
        return false;
    }

    detectPlayerCollision(){
        var ballonBox = {...this.pos};
        var playerBox = {...this.game.player.pos}
        ballonBox.width = this.size.w
        ballonBox.height = this.size.h
        playerBox.width = this.game.player.size.w
        playerBox.height = this.game.player.size.h
        if(this.intersectRect(ballonBox, playerBox)){
            this.game.player.kill()
        }
    }

   detectWallCollision(direction) {
    let nextPosition = {};
    nextPosition.x = this.pos.x + (direction.x * 2);
    nextPosition.y = this.pos.y + (direction.y * 2);
    nextPosition.width = 32
    nextPosition.height = 32;

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

            return true;
        }
    }
    return false;
}
    remove(){
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

}
