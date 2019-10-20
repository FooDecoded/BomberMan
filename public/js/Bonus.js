import { loadBonusSprite } from './sprites.js'
import {createSpriteLayer} from './layers.js'

let bonusSprites;
loadBonusSprite().then(sprites => {
    bonusSprites = sprites
    console.log(bonusSprites)
})

export default class Bonus {
    constructor(pos, type, game){
        this.type = type
        this.pos = pos
        this.game = game;
    }

    draw(context){
        bonusSprites.draw(this.type, context, this.pos.x, this.pos.y);
    }

    remove(){
        // console.log(this.game.bonuses.length)
        for (let i = 0; i < this.game.bonuses.length; i++) {
            let bonus = this.game.bonuses[i];
            if (this == bonus) {
                // console.log(this.game.bonuses.length)
                this.game.bonuses.splice(i, 1);
                // console.log(this.game.bonuses.length)
                this.game.updateBackground = true
            }
        }
    }
}
