import Tile from './Tile.js'
import Bonus from './Bonus.js'



function drawBonuses(context, sprites, woodsArray, game, ) {
    let woods = [...woodsArray]
    woods.sort(function() {
        return 0.5 - Math.random();
    });
    let bonusesPercent = game.bonusesPercent;
    let bonusTypes = ['speed', 'bomb', 'fire']
    for (var j = 0; j < 4; j++) {
        var bonusesCount = Math.round(woods.length * bonusesPercent * 0.01 / 4);
        var placedCount = 0;
        for (var i = 0; i < woods.length; i++) {
            if (placedCount > bonusesCount) {
                break;
            }

            var tile = woods[i];
            if ((j == 0 && tile.pos.x < 32 / 2 && tile.pos.y < 32 / 2)
                || (j == 1 && tile.pos.x < 32 / 2 && tile.pos.y > 32 / 2)
                || (j == 2 && tile.pos.x > 32 / 2 && tile.pos.y < 32 / 2)
                || (j == 3 && tile.pos.x > 32 / 2 && tile.pos.y > 32 / 2)) {

                var typePosition = bonusTypes[placedCount % 3];
                var bonus = new Bonus({...tile.pos}, typePosition, game);
                game.bonuses.push(bonus);
                
                sprites.woodSprite.draw('wood', context, tile.pos.x , tile.pos.y)
                placedCount++;
            }
        }
    }
}

function drawBackground(context, sprites, tiles, game) {
    let bonusTypes = ['speed', 'bomb', 'fire']
    let woodArray = []
    for (var y= 0; y< 13; y++) {
        for (var x = 0;x < 17;x++) {
            if ((y== 0 ||x == 0 || y== 13 - 1 ||x == 17 - 1)
                || (x % 2 == 0 && y% 2 == 0)) {
                sprites.wallSprite.draw('wall', context,x * 32 , y* 32)
                tiles.push(new Tile({x:x * 32, y: y* 32}, 'wall', game))
            } else {
                sprites.grassSprite.draw('grass', context,x * 32, y* 32)
                if((x > 3 && x < 13) && (y == 1 || y == 11 )){
                    sprites.woodSprite.draw('wood', context,x * 32, y* 32)
                    let woodTile = new Tile({x:x * 32, y: y* 32}, 'wood', game)
                    tiles.push(woodTile)  
                    woodArray.push(woodTile)  
                }
                if(( (y == 7 || y == 5) && !(x == 3 || x == 13) )){
                    sprites.woodSprite.draw('wood', context,x * 32, y* 32)
                    let woodTile = new Tile({x:x * 32, y: y* 32}, 'wood', game)
                    tiles.push(woodTile)  
                    woodArray.push(woodTile)  
                }
                if(( x == 3 || x == 13 )){
                    sprites.woodSprite.draw('wood', context,x * 32, y* 32)
                    let woodTile = new Tile({x:x * 32, y: y* 32}, 'wood', game)
                    tiles.push(woodTile)  
                    woodArray.push(woodTile)  
                }
            }
        }
    }
    drawBonuses(context, sprites, woodArray, game)
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