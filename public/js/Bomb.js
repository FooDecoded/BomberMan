import Entity from './Entity.js';
import Fire from './Fire.js'
import {createSpriteLayer} from './layers.js'
import Bonus from './Bonus.js'

export default class Bomb extends Entity {
    constructor(pos, strength, game, bombSprite, fireSprite){
        super();
        this.strength = strength
        this.pos = pos
        this.size = {
            w: 28,
            h: 28
        }
        this.timer = Date.now()
        this.timerMax = 3000
        this.exploded = false
        this.fires = []
        this.explodeListener = null
        this.game = game
        this.sprite = bombSprite
        // this.draw(this.game.context);
        this.fireSprite = fireSprite;
        this.spriteLayer = createSpriteLayer(this);
        this.game.layers.push(this.spriteLayer);
        // console.log(this.fireSprite)
    }

    update(deltaTime){
        if (this.exploded) { return; }
        if(Date.now() - this.timer >= 3000){
            this.explode()
        }
    }

    explode(){
        this.exploded = true;
        var positions = this.getDangerPositions();
        for (var i = 0; i < positions.length; i++) {
            var position = positions[i];
            this.fire(position);

            var material = this.game.getTileMaterial(position);
            if (material == 'wood') {
                var tile = this.game.getTile(position);
                // debugger
                tile.remove();
            } else if (material == 'grass') {
                // Explode bombs in fire
                for (var j = 0; j < this.game.bombs.length; j++) {
                    var bomb = this.game.bombs[j];
                    // debugger                    
                    if (!bomb.exploded
                        // need to be calculated by
                        && Math.round(bomb.pos.x / 32) * 32 ===  position.x
                        && Math.round(bomb.pos.y / 32) * 32  === position.y
                        ) {
                        bomb.explode();
                    }
                }
            }
        }

        this.remove();
    }

    getDangerPositions() {
        var positions = [];
        positions.push(({x: Math.floor(this.pos.x / 32)*32, y: Math.floor(this.pos.y / 32) * 32}));
        for (var i = 0; i < 4; i++) {
            var dirX;
            var dirY;
            if (i == 0) { dirX = 1; dirY = 0; }
            else if (i == 1) { dirX = -1; dirY = 0; }
            else if (i == 2) { dirX = 0; dirY = 1; }
            else if (i == 3) { dirX = 0; dirY = -1; }

            for (var j = 1; j <= this.strength; j++) {
                var explode = true;
                var last = false;
                var position = { x: Math.round((this.pos.x  + j * dirX * 32) / 32) * 32, y: Math.round((this.pos.y + j * dirY * 32) / 32) * 32 };
                var material = this.game.getTileMaterial(position);
                if (material == 'wall') { // One can not simply burn the wall
                    explode = false;
                    last = true;
                } else if (material == 'wood') {
                    explode = true;
                    last = true;
                }

                if (explode) {
                    positions.push(position);
                }

                if (last) {
                    break;
                }
            }
        }

        return positions;
    }

    setExplodeListener(listener) {
        this.explodeListener = listener;
    }

    remove() {
        for (var i = 0; i < this.game.layers.length; i++) {
            var layer = this.game.layers[i];
            if (this.spriteLayer == layer) {
                this.game.layers.splice(i, 1);
            }
        }
        setTimeout(() => {
            const fireLength = this.fires.length
            for (let i = 0; i <  fireLength; i++) {
                const fire = this.fires.pop()
                fire.remove()
            }
        }, 200)
    }

    fire (position) {
        var fire = new Fire(position, this, this.game, this.fireSprite);
        this.fires.push(fire);
    }

    draw(context) {
        this.sprite.draw('bomb', context, this.pos.x, this.pos.y);
    }
}