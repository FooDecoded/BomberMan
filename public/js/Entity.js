class Vector {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

export default class Entity {
    constructor() {
        this.pos = new Vector(0, 0);
        this.vel = 0
        this.moving = false
    }

    update(deltaTime) {
        // this.traits.forEach(trait => {
        //     trait.update(this, deltaTime);
        // });
    }
}
