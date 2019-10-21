
const Levels = {
    1: {
        bonusesPercent: 75,
        enemies: [{pos: {x: 32 * 15, y: 32}, type: 'ghost'}, {pos: {x: 32, y: 32 * 11}, type: 'ghost'}, {pos: {x: 32 * 15, y: 32 * 11}, type: 'ghost'}],
        enemiesSpeed: .5
    },
    2: {
        bonusesPercent: 65,
        enemies: [{pos: {x: 32 * 15, y: 32}, type: 'ghost'}, {pos: {x: 32, y: 32 * 11}, type: 'ghost'}, {pos: {x: 32 * 15, y: 32 * 11}, type: 'ghost'}
        , {pos: {x: 32 * 11, y: 32 * 3}, type: 'dead'}, {pos: {x: 32 * 11, y: 32 * 9}, type: 'dead'}
            ],
        enemiesSpeed: .5
    },
    3: {
        bonusesPercent: 50,
        enemiesPositions: [],
        enemiesSpeed: .7
    },
    4: {
        bonusesPercent: 50,
        enemiesPositions: [],
        enemiesSpeed: .7
    },
    5: {
        bonusesPercent: 50,
        enemiesPositions: [],
        enemiesSpeed: .5
    },
    6: {
        bonusesPercent: 50,
        enemiesPositions: [],
        enemiesSpeed: .5
    },
    7: {
        bonusesPercent: 75,
        enemiesPositions: [],
        enemiesSpeed: .5
    },
    8: {
        bonusesPercent: 75,
        enemiesPositions: [],
        enemiesSpeed: .5
    },
    9: {
        bonusesPercent: 75,
        enemiesPositions: [],
        enemiesSpeed: .5
    },
    10: {
        bonusesPercent: 75,
        enemiesPositions: [],
        enemiesSpeed: .5
    }
}


export default Levels;