import Compositor from './Compositor.js';
import {loadBackgroundSprites} from './sprites.js';
import {createBackgroundLayer, createSpriteLayer} from './layers.js';
import createPlayer from './Player.js'
import createEnemy from './Enemy.js'
import Controller from './Controller.js'


class Game {
    constructor(){
        this.canvas = document.getElementById('screen');
        this.context = this.canvas.getContext('2d');
        this.tiles = []
        this.layers = null
        this.bombs = [];
        this.bonuses = [];
        this.enemies = [];
        // this.players = []
        this.player = null
        this.updateBackground = false
        this.loadGame()
        this.update = this.update.bind(this)
    }
    
    createEnimies() {
        createEnemy({x: 32, y: 32}, this).then( (enemy) => {
            this.enemies.push(enemy)
        } )
    }

    getApproximateTile(position){
        for (var i = 0; i < this.tiles.length; i++) {
            var tile = this.tiles[i];
            if (tile.pos.x > Math.floor(position.x/32) && tile.pos.y > Math.floor(position.y/32)) {
                return tile;
            }
        }
        return {material: 'grass'}
    }

    getTileMaterial(position) {
        var tile = this.getTile(position);
        return (tile) ? tile.material : 'grass' ;
    }

    getTile(position) {
        for (var i = 0; i < this.tiles.length; i++) {
            var tile = this.tiles[i];
            if (tile.pos.x == position.x && tile.pos.y == position.y) {
                return tile;
            }
        }
    }

    setupKeys(){
        const SPACE = 32;
        const UP = 38;
        const DOWN = 40;
        const RIGHT = 39;
        const LEFT = 37;

        let keyboardMap = {
            up: false,
            down: false,
            left: false,
            right: false,
            space: false
        }
        window.addEventListener('keydown', (e) => {
            if(e.keyCode === UP){
                this.player.moving = true
                this.player.direction = {x: 0, y:-1}
            } else if(e.keyCode === DOWN){
                this.player.moving = true
                this.player.direction = {x: 0, y:1}

            } else if (e.keyCode === RIGHT){
                this.player.moving = true
                this.player.direction = {x: 1, y:0}

            } else if(e.keyCode === LEFT) {
                this.player.moving = true
                this.player.direction = {x: -1, y:0}
            } else if(e.keyCode === SPACE) {
                this.player.setBombsListener();
                this.player.update()
            }
        })

        window.addEventListener('keyup', (e) => {
            if(e.keyCode === UP){
                keyboardMap.up = false
                this.player.stop()
            } else if(e.keyCode === DOWN){
                keyboardMap.down = false
                this.player.stop()
            } else if (e.keyCode === RIGHT){
                keyboardMap.right = false
                this.player.stop()
            } else if(e.keyCode === LEFT) {
                keyboardMap.left = false
                this.player.stop()
            }
        })
    }

    update(){
        this.bombs.forEach(bomb => bomb.update())
        this.enemies.forEach(enemy => enemy.update())
        this.player.update()
        this.comp.draw(this.context);

        requestAnimationFrame(this.update);
    }

    loadGame(){
        Promise.all([
            createPlayer(this),
            loadBackgroundSprites()
        ])
        .then(([player, backgroundSprites]) => {
        
            this.comp = new Compositor();
            this.layers = this.comp.layers;
            this.layers.push(createBackgroundLayer(backgroundSprites, this.tiles, this));
            this.player = player
            this.player.pos = {
                x: 32,
                y: 32
            }
            
            this.setupKeys()
            const spriteLayer = createSpriteLayer(player);
            this.layers.push(spriteLayer);
            this.createEnimies()
            this.update()

        })

    }


    
}

new Game();


// const canvas = document.getElementById('screen');
// const context = canvas.getContext('2d');
// let tiles = []


