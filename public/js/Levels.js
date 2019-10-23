
const Levels = {
    1: {
        bonusesPercent: 75,
        enemies: [{pos: {x: 32 * 15, y: 32}, type: 'ghost'}, {pos: {x: 32, y: 32 * 11}, type: 'ghost'}, {pos: {x: 32 * 15, y: 32 * 11}, type: 'ghost'}],
        enemiesSpeed: 1
    },
    2: {
        bonusesPercent: 65,
        enemies: [{pos: {x: 32 * 15, y: 32}, type: 'ghost'}, {pos: {x: 32, y: 32 * 11}, type: 'ghost'}, {pos: {x: 32 * 15, y: 32 * 11}, type: 'ghost'}
        , {pos: {x: 32 * 11, y: 32 * 3}, type: 'dead'}, {pos: {x: 32 * 11, y: 32 * 9}, type: 'dead'}
            ],
        enemiesSpeed: 1
    },
    3: {
        bonusesPercent: 65,
        enemies: [{pos: {x: 32 * 15, y: 32}, type: 'ghost'}, {pos: {x: 32, y: 32 * 11}, type: 'ghost'}, {pos: {x: 32 * 15, y: 32 * 11}, type: 'ghost'}
        , {pos: {x: 32 * 11, y: 32 * 3}, type: 'dead'}, {pos: {x: 32 * 11, y: 32 * 9}, type: 'dead'},
        {pos: {x: 32 * 13, y: 32 * 3}, type: 'dead'}, {pos: {x: 32 * 11, y: 32 * 3}, type: 'dead'}
            ],
        enemiesSpeed: 2
    },
    4: {
        bonusesPercent: 65,
        enemies: [{pos: {x: 32 * 15, y: 32}, type: 'ghost'}, {pos: {x: 32, y: 32 * 11}, type: 'ghost'}, {pos: {x: 32 * 15, y: 32 * 11}, type: 'ghost'}
        , {pos: {x: 32 * 11, y: 32 * 3}, type: 'dead'}, {pos: {x: 32 * 11, y: 32 * 9}, type: 'dead'},
        {pos: {x: 32 * 13, y: 32 * 3}, type: 'dead'}, {pos: {x: 32 * 11, y: 32 * 3}, type: 'dead'}
            ],
        enemiesSpeed: 3
    },
    5: {
        bonusesPercent: 65,
        enemies: [{pos: {x: 32 * 15, y: 32}, type: 'ghost'}, {pos: {x: 32, y: 32 * 11}, type: 'ghost'}, {pos: {x: 32 * 15, y: 32 * 11}, type: 'ghost'}
        , {pos: {x: 32 * 11, y: 32 * 3}, type: 'dead'}, {pos: {x: 32 * 11, y: 32 * 9}, type: 'dead'},
        {pos: {x: 32 * 13, y: 32 * 3}, type: 'dead'}, {pos: {x: 32 * 11, y: 32 * 3}, type: 'dead'}
            ],
        enemiesSpeed: 3
    }
}


export default Levels;