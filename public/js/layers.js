import Tile from './Tile.js'
import Bonus from './Bonus.js'



function drawBonuses(context, sprites, woodsArray, game, ) {
    // Sort tiles randomly
    let woods = [...woodsArray]
    woods.sort(function() {
        return 0.5 - Math.random();
    });
    let bonusesPercent = 16;
    let bonusTypes = ['speed', 'bomb', 'fire']
    // Distribute bonuses to quarters of map precisely fairly
    for (var j = 0; j < 4; j++) {
        var bonusesCount = Math.round(woods.length * bonusesPercent * 0.01 / 4);
        var placedCount = 0;
        for (var i = 0; i < woods.length; i++) {
            if (placedCount > bonusesCount) {
                break;
            }

            var tile = woods[i];
            if ((j == 0 && tile.position.x < this.tilesX / 2 && tile.position.y < this.tilesY / 2)
                || (j == 1 && tile.position.x < this.tilesX / 2 && tile.position.y > this.tilesY / 2)
                || (j == 2 && tile.position.x > this.tilesX / 2 && tile.position.y < this.tilesX / 2)
                || (j == 3 && tile.position.x > this.tilesX / 2 && tile.position.y > this.tilesX / 2)) {

                var typePosition = bonusTypes[placedCount % 3];
                var bonus = new Bonus({...tile.pos}, typePosition, game);
                game.bonuses.push(bonus);
                
                // Move wood to front
                sprites.woodSprite.draw('wood', context, tile.pos.x , tile.pos.y)
                placedCount++;
            }
        }
    }
}

function drawBackground(context, sprites, tiles, game) {
    let bonusTypes = ['speed', 'bomb', 'fire']
    let woodArray = []
    for (var i = 0; i < 13; i++) {
        for (var j = 0; j < 17; j++) {
            if ((i == 0 || j == 0 || i == 13 - 1 || j == 17 - 1)
                || (j % 2 == 0 && i % 2 == 0)) {
                // Wall tiles
                // var tile = new Tile('wall', { x: j, y: i });
                
                // this.stage.addChild(tile.bmp);
                
                sprites.wallSprite.draw('wall', context, j * 32 , i * 32)
                tiles.push(new Tile({x: j * 32, y: i * 32}, 'wall', game))
                // this.tiles.push(tile);  gonna stay there
            } else {
                // Grass tiles
                // var tile = new Tile('grass', { x: j, y: i });
                // this.stage.addChild(tile.bmp);
                sprites.grassSprite.draw('grass', context, j * 32, i * 32)
                // tiles.push(new Tile({x: j * 32, y: i * 32}, 'grass', game))    
                // Wood tiles
                if (!(i <= 2 && j <= 2)
                    && !(i >= 13 - 3 && j >= 17 - 3)
                    && !(i <= 2 && j >= 17 - 3)
                    && !(i >= 13 - 3 && j <= 2)) {
    
                    // var wood = new Tile('wood', { x: j, y: i });
                    // this.stage.addChild(wood.bmp);
                    // this.tiles.push(wood);
                    // debugger
                    var bonus = new Bonus({x: j * 32, y: i * 32}, bonusTypes[i % 3], game);
                    game.bonuses.push(bonus);
                    sprites.woodSprite.draw('wood', context, j * 32, i * 32)
                    let woodTile = new Tile({x: j * 32, y: i * 32}, 'wood', game)
                    tiles.push(woodTile)  
                    woodArray.push(woodTile)              
                }
            }
        }
    }
    // drawBonuses(context, sprites, woodArray, game)
}


function updateBackground(context, tiles, sprites, bonuses){
    bonuses.forEach((bonus) => {
        // bonus
        bonus.draw(context)
    })
    tiles.forEach(tile => {
        // debugger
        if(tile.material == 'wood'){
            sprites.woodSprite.draw('wood', context, tile.pos.x, tile.pos.y)
        } else if(tile.material == 'wall'){
            // debugger
            sprites.wallSprite.draw('wall', context, tile.pos.x, tile.pos.y)
        }
    })
}

function drawGrassTiles(sprite, context){
    for(let x = 0; x < 17; x++){
        for (let y = 0; y < 13; y++) {
            sprite.draw('grass', context, x * 32, y * 32)            
        }
    }
}

export function createBackgroundLayer(backgroundSprites, tiles, game) {
    const buffer = document.createElement('canvas');
    buffer.width = 816;
    buffer.height = 624;
    const GrassBuffer = document.createElement('canvas');
    GrassBuffer.width = 816;
    GrassBuffer.height = 624;
    drawGrassTiles(backgroundSprites.grassSprite, GrassBuffer.getContext('2d'))
    drawBackground(buffer.getContext('2d'), backgroundSprites, tiles, game)

    return function drawBackgroundLayer(context) {
        if(game.updateBackground){
            // console.log(game.bombs.length)
            buffer.getContext('2d').drawImage(GrassBuffer, 0, 0)
            updateBackground(buffer.getContext('2d'), tiles, backgroundSprites, game.bonuses)
            game.updateBackground = false
        }
        context.drawImage(buffer, 0, 0);
    };
}

export function createSpriteLayer(entity) {
    return function drawSpriteLayer(context) {
        entity.draw(context);
    };
}