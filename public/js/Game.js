import Compositor from './Compositor.js';
import {loadBackgroundSprites} from './sprites.js';
import {createBackgroundLayer, createSpriteLayer} from './layers.js';
import createPlayer from './Player.js'
import Enemy from './Enemy.js'
import Levels from './Levels.js'
import { loadGhostSprite, loadDeadSprite } from './sprites.js';
import { loadImage } from './loaders.js'


console.log('gammmmme');    

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
        this.update = this.update.bind(this)
        this.isPlaying = false
        this.gameStarted = true
        this.level = 1
        this.gameOver = false
        this.alreadyLoaded = false
        this.loadingNextLevel = false
        this.loadGame()
        
    }


    
    createEnimies() {
        Levels[this.level].enemies.forEach((enemy) => {
            if(enemy.type == 'ghost'){
                this.enemies.push(new Enemy({...enemy.pos}, enemy.type, this.ghostSprite, this ,Levels[this.level].enemiesSpeed))
            } else if(enemy.type == 'dead'){
                this.enemies.push(new Enemy({...enemy.pos}, enemy.type, this.deadSprite, this, Levels[this.level].enemiesSpeed))
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
            if(this.isPlaying){
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
            }
        })

        window.addEventListener('keyup', (e) => {
            if(this.isPlaying){
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
            }
            if(e.keyCode === ESC){
                if(this.gameOver){
                    // debugger
                    this.level = 1
                    // this.loadGame()
                    this.setUpLevel()
                } else {
                    this.toggleMenu()
                }
            }
        })
    }

    emptyScreen(){
        this.layers = []
    }

    toggleMenu(){
        if(this.isPlaying){
            this.isPlaying = false
        } else {
            this.isPlaying = true
        }
    }

    drawMenu(){ 
        this.context.drawImage(this.pauseImg, 240, 170)
        this.context.font = "bold 30px Georgia";
        this.context.fillStyle = 'black';
        this.context.fillText(`Hit 'ESC' to continue`, 130, 200 + 60);
    }



    drawGameOver(){
        this.context.drawImage(this.gameOverImg, 200, 150);
        this.context.font = "bold 30px Georgia";
        this.context.fillStyle = 'black';
        this.context.fillText(`Hit 'ESC' to try again!`, 130, 200 + 95);
    }

    handleLevelChange(){
        this.drawLoadingNextLevel()
        setTimeout(() => {
            this.level += 1
            this.setUpLevel()
            this.loadingNextLevel = false
        }, 1500)
    }

    drawGameInfo(){
        this.context.font = "bold 30px Georgia";
        this.context.fillStyle = '#CAC7C2';
        this.context.fillText(`Level: ${this.level}  Hearts: ${this.player.lives}`, 170, 25);
    }

    drawLoadingNextLevel(){ 
        this.context.font = "bold 30px Georgia";
        this.context.fillStyle = 'black';
        this.context.fillText(`Great Job! Now Level`, 120 , 200);
        this.context.fillStyle = 'seagreen';
        this.context.fillText(`${this.level + 1}`, 410, 200)
    }

    update(){

        if(this.isPlaying){
            if(!this.loadingNextLevel){
                if(!this.player.lives <= 0 && !this.gameOver ){
                    if(this.enemies.length == 0 && !this.gameOver){
                        this.loadingNextLevel = true
                        this.handleLevelChange()
                    }
                    this.bombs.forEach(bomb => bomb.update())
                    this.enemies.forEach(enemy => enemy.update())
                    this.player.update()
                    this.comp.draw(this.context);
                    this.drawGameInfo()
                }
            } else {
                this.drawLoadingNextLevel()
            }
        }
        else if(!this.isPlaying && !this.gameOver) {
            this.comp.draw(this.context)
            this.drawMenu()
        } else if (this.gameOver && !this.isPlaying){
            this.drawGameOver()
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
        this.enemies = []
        this.level > 1 && this.layers.shift()
        if(this.gameOver){
            this.comp.layers = []
            this.layers = this.comp.layers ;
            this.layers.push(this.playerSpriteLayer)
            this.gameOver = false;
            this.isPlaying = true;
            this.player.lives = 3;
        }
        this.layers.unshift(createBackgroundLayer(this.backgroundSprites, this.tiles, this));
        this.createEnimies()
        if(!this.gameOver && !this.alreadyLoaded){
            this.update()
            this.alreadyLoaded = true 
            this.isPlaying = false
        }
    }


    loadGame(){
        Promise.all([
            createPlayer(this),
            loadBackgroundSprites(),
            loadGhostSprite(), 
            loadDeadSprite(),
            loadImage('./public/img/pause.png'),
            loadImage('./public/img/game-over.png')
        ])
        .then(([player, backgroundSprites, ghostSprite, deadSprite, pauseImg, gameOverImg]) => {
            this.pauseImg = pauseImg;
            this.ghostSprite = ghostSprite;
            this.deadSprite = deadSprite;
            this.gameOverImg = gameOverImg
            this.enemies = []
            this.bombs = []
            this.gameOver = false
            this.isPlaying = true;
            !this.alreadyLoaded && this.setupKeys()        
            this.comp = new Compositor();
            this.layers = this.comp.layers;
            this.playerSpriteLayer = createSpriteLayer(player);
            this.layers.push(this.playerSpriteLayer);
            this.player = player;
            this.backgroundSprites = backgroundSprites;
            this.setUpLevel()
        })

    }


    
}

new Game();



