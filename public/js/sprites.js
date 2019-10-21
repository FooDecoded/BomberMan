import SpriteSheet from './SpriteSheet.js';
import {loadImage} from './loaders.js';

export function loadPlayerSprite() {
    return loadImage('/img/player.png')
    .then(image => {
        const player = new SpriteSheet(image, 24, 24);
        player.define('idle', 0, 0, 24, 24);
        player.define('left-0', 0, 24, 24, 24);
        player.define('left-1', 24, 24, 24, 24);
        player.define('left-2', 48, 24, 24, 24);

        player.define('right-0', 0, 48, 24, 24);
        player.define('right-1', 24, 48, 24, 24);
        player.define('right-2', 48, 48, 24, 24);

        player.define('down-0', 0, 0, 24, 24);
        player.define('down-1', 24 ,0, 24, 24);
        player.define('down-2', 48 , 0, 24, 24);

        player.define('top-0', 0, 72, 24, 24);
        player.define('top-1', 24 , 72, 24, 24);
        player.define('top-2', 48, 72, 24, 24);
        return player;
    });
}

export function loadBombSprite(){
    return loadImage('/img/bomb.png')
    .then(image => {
        const bomb = new SpriteSheet(image, 28, 28);
        bomb.define('bomb', 0, 0, 28, 28);
        return bomb;
    });
}

export function loadBonusSprite(){
    return loadImage('/img/bonuses.png')
    .then(image => {
        const bonuses = new SpriteSheet(image, 32, 32);
        bonuses.define('speed', 0, 0, 32, 32);
        bonuses.define('bomb', 32, 0, 32, 32);
        bonuses.define('fire', 64, 0, 32, 32);
        return bonuses;
    });
}

export function loadGhostSprite(){
    return loadImage('/img/enemy.png')
    .then(image => {
        const ghost = new SpriteSheet(image, 24, 24);
        ghost.define('ballon-1', 0, 24, 24, 24);
        ghost.define('ballon-2', 24, 24, 24, 24);
        ghost.define('ballon-3', 48, 24, 24, 24);
        ghost.define('ballon-4', 0, 48, 24, 24);
        ghost.define('ballon-5', 24, 48, 24, 24);
        ghost.define('ballon-6', 48, 48, 24, 24);
        return ghost;
    });
}

export function loadDeadSprite(){
    return loadImage('/img/dead.png')
    .then(image => {
        const ghost = new SpriteSheet(image, 32, 32);
        ghost.define('dead-left-1', 0, 32 * 3, 32, 32);
        ghost.define('dead-left-2', 32, 32 * 3, 32, 32);
        ghost.define('dead-left-3', 32 * 2, 32 * 3, 32, 32);
        ghost.define('dead-right-1', 0, 32, 32, 32);
        ghost.define('dead-right-2', 32, 32, 32, 32);
        ghost.define('dead-right-3', 32 * 2, 32 , 32, 32);
        ghost.define('dead-top-1', 0, 0, 32, 32);
        ghost.define('dead-top-2', 32, 0, 32, 32);
        ghost.define('dead-top-3', 32 * 2, 0, 32, 32);
        ghost.define('dead-down-1', 0, 64, 32, 32);
        ghost.define('dead-down-2', 32, 64 , 32, 32);
        ghost.define('dead-down-3', 32 * 2, 64 , 32, 32);
        return ghost;
    });
}

export function loadFireSprite(){
    return loadImage('/img/fire.png')
    .then(image => {
        const fire = new SpriteSheet(image, 28, 28);
        fire.define('fire', 0, 0, 28, 28);
        return fire;
    });
}

function loadGrassSprite(){
    return loadImage('/img/tile_grass.png')
    .then(image => {
        const grass = new SpriteSheet(image, 32, 32);
        grass.define('grass', 0, 0, 32, 32);
        return grass;
    });
}

function loadWallSprite(){
    return loadImage('/img/tile_wall.png')
    .then(image => {
        const wall = new SpriteSheet(image, 32, 32);
        wall.define('wall', 0, 0, 32, 32);
        return wall;
    });
}

function loadWoodSprite(){
    return loadImage('/img/tile_wood.png')
    .then(image => {
        const wood = new SpriteSheet(image, 32, 32);
        wood.define('wood', 0, 0, 32, 32);
        return wood;
    });
}

// Promise.all([
//     loadGrassSprite(),
//     loadWallSprite(),
//     loadWoodSprite(),
// ])
// .then(([grassSprite, wallSprite, woodSprite]) => {

// })

export function loadBackgroundSprites() {
    return Promise.all([
        loadGrassSprite(),
        loadWallSprite(),
        loadWoodSprite(),
    ])
    .then(([grassSprite, wallSprite, woodSprite]) => {
        return {
            grassSprite,
            wallSprite,
            woodSprite        }
    })
}
