import { loadGhostSprite } from './sprites.js';
import { createSpriteLayer } from './layers.js';

export default function createEnemy(pos, game){
    return loadGhostSprite().then(ghostSprite => {
        const ghost = new Enemy(pos, ghostSprite, game)
        game.enemies.push(ghost)
        return ghost
    })
}


class Enemy{
    constructor(pos, ghostSprite, game, spriteLayer){
        this.pos = pos
        this.direction = {x: 1, y: 0}
        this.lastDirection = {x: 1, y: 0}
        this.type = ''
        this.excludeDirections = []
        this.sprite = ghostSprite;
        this.game = game ;
        this.dirX = 0
        this.dirY = -1
        this.previousPosition = {}
        this.targetPosition = {}
        this.vel = .51
        this.spriteLayer = spriteLayer
        this.size = {
            w: 24, 
            h: 24
        }
        this.spriteLayer = createSpriteLayer(this);
        this.game.layers.push(this.spriteLayer)
        this.frameIndex = 1;
        this.currentFrameCount = 0
    }

    draw(context){
        this.sprite.draw(this.getFrameName(), context, this.pos.x, this.pos.y);
    }

    
    getFrameName(){

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
        if(this.detectWallCollision(this.direction)){
            this.pos.x = Math.round(this.pos.x + this.direction.x * this.vel)
            this.pos.y = Math.round(this.pos.y + this.direction.y * this.vel)
            // debugger
            this.lastDirection = this.direction
            let nextDIrection = this.findNextDirection()
            // console.log(nextDIrection)
            this.direction = nextDIrection;
        }
        this.pos.x = Math.round(this.pos.x + this.direction.x * this.vel)
        this.pos.y = Math.round(this.pos.y + this.direction.y * this.vel)
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

        if(availableDirs.length === 1){
            return availableDirs[0]
        } else {
            availableDirs = availableDirs.filter(dir => {
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
