import Compositor from './Compositor.js';
import {loadBackgroundSprites} from './sprites.js';
import {createBackgroundLayer, createSpriteLayer} from './layers.js';
import createPlayer from './Player.js'
import Enemy from './Enemy.js'
import Controller from './Controller.js'
import Levels from './Levels.js'
import { loadGhostSprite, loadDeadSprite } from './sprites.js';
import { loadImage } from './loaders.js'


class Game {
    constructor(){
        this.canvas = document.getElementById('screen');
        this.context = this.canvas.getContext('2d');
        this.tiles = []
        this.layers = null
        this.bombs = [];
        this.bonuses = [];
        this.enemies = [];
        this.bonusesPercent = 75
        this.player = null
        this.updateBackground = false
        this.loadGame()
        this.update = this.update.bind(this)
        this.isPlaying = false
        this.gameStarted = true
        this.level = 1
    }
    
    createEnimies() {
        Levels[this.level].enemies.forEach((enemy) => {
            if(enemy.type == 'ghost'){
                this.enemies.push(new Enemy(enemy.pos, enemy.type, this.ghostSprite, this))
            } else if(enemy.type == 'dead'){
                this.enemies.push(new Enemy(enemy.pos, enemy.type, this.deadSprite, this))
            }
            
        })
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
        const ESC = 27;
        let keyboardMap = {
            up: false,
            down: false,
            left: false,
            right: false,
            space: false
        }
        window.addEventListener('keydown', (e) => {
            e.preventDefault()
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

        // window.addEventListener()

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
            } else if(e.keyCode === ESC){
                this.toggleMenu()
            }
        })
    }

    // createMenuLayer

    toggleMenu(){
        if(this.isPlaying){
            this.isPlaying = false
        } else {
            this.isPlaying = true
        }
    }

    drawMenu(){ 
        this.context.drawImage(this.pauseImg, 240, 170)
    }

    drawGameOver(){
        this.context.font = "30px Arial";
        this.context.fillText(`You lost!!!! Game Over`, 200, 200);
    }

    handleLevelChange(){
        this.level += 1
        this.setUpLevel()
    }

    drawGameInfo(){
        this.context.font = "20px Arial";
        this.context.fillText(`Level: ${this.level}  Hearts: ${this.player.lives}`, 200, 20);
    }

    update(){
        if(this.isPlaying){
            if(!this.player.lives <= 0){
                if(this.enemies.length == 0){
                    // debugger
                    this.handleLevelChange()
                }
                this.bombs.forEach(bomb => bomb.update())
                this.enemies.forEach(enemy => enemy.update())
                this.player.update()
                this.comp.draw(this.context);
                this.drawGameInfo()
            } else {
                this.comp.draw(this.context);
                this.drawGameOver()
            }
        }
        else {
            this.comp.draw(this.context)
            this.drawMenu()
        }
        requestAnimationFrame(this.update);
    }

    showMenu(){

    }

    setUpLevel(){
        this.player.pos = {
            x: 32,
            y: 32
        }
        this.player.bombsMax = 1
        this.player.bombStrength = 1
        this.player.velocity = 1
        this.bonuses = []
        this.bombs = []
        this.tiles = []
        this.level > 1 && this.layers.shift()
        this.layers.unshift(createBackgroundLayer(this.backgroundSprites, this.tiles, this));

        this.createEnimies()
        this.update()
    }


    loadGame(){
        Promise.all([
            createPlayer(this),
            loadBackgroundSprites(),
            loadGhostSprite(), 
            loadDeadSprite(),
            loadImage('/img/pause.png')
        ])
        .then(([player, backgroundSprites, ghostSprite, deadSprite, pauseImg]) => {
            this.pauseImg = pauseImg;
            this.ghostSprite = ghostSprite;
            this.deadSprite = deadSprite;
            this.setupKeys()        
            this.comp = new Compositor();
            this.layers = this.comp.layers;
            const spriteLayer = createSpriteLayer(player);
            this.layers.push(spriteLayer);
            this.player = player;
            this.backgroundSprites = backgroundSprites;
            this.setUpLevel()
        })

    }


    
}

new Game();



