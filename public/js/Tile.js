export default class Tile {
    constructor(pos, material, game){
        this.pos = pos
        this.material = material
        this.game = game
    }

    remove(){
        for (var i = 0; i < this.game.tiles.length; i++) {
            var tile = this.game.tiles[i];
            if (this == tile) {
                this.game.tiles.splice(i, 1);
            }
        }
        this.game.updateBackground = true;
    }

}