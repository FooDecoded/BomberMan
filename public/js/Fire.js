import Entity from './Entity.js';
import {createSpriteLayer} from './layers.js'

export default class Fire {
    constructor(pos, bomb, game, sprite){
        this.pos = pos
        this.size = {
            w: 32,
            h: 32
        }
        this.bomb = bomb
        this.game = game
        this.sprite = sprite
        this.spriteLayer = createSpriteLayer(this);
        this.game.layers.push(this.spriteLayer);
        this.killCollidableObjects()
    }

    draw(context) {
        this.sprite.draw('fire', context, this.pos.x, this.pos.y);
    }

    intersectRect(a, b) {
        // debugger
        if (a.x < b.x + b.width &&
            a.x + a.width > b.x &&
            a.y < b.y + b.height &&
            a.y + a.height > b.y) {
             // collision detected!
             return true 
         }
         return false 
    }

    killCollidableObjects(){
        let fireBox = {x: this.pos.x, y: this.pos.y, width: 32, height: 32}
        this.game.enemies.forEach(enemy => {
            if(this.intersectRect(
                fireBox, 
                {x: enemy.pos.x, y: enemy.pos.y, height: enemy.size.h, width: enemy.size.w})){
                    enemy.remove();
            }
        });
        let playerBox = {...this.game.player.pos}
        playerBox.width = this.game.player.size.w
        playerBox.height = this.game.player.size.h
        if(this.intersectRect(fireBox, playerBox)){
            this.game.player.kill()
        }
    }

    remove(){
        for (var i = 0; i < this.game.layers.length; i++) {
            var layer = this.game.layers[i];
            if (this.spriteLayer == layer) {
                this.game.layers.splice(i, 1);
            }
        }
    }
}