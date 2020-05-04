import {Ship} from './src/entity/ship.mjs'
import {game} from './src/game/game.mjs'
import {ShipFactory} from './src/factory/shipFactory.mjs'

const shipFactory = new ShipFactory();
try {
    game.teamA = shipFactory.createTeam(101);
    game.teamB = shipFactory.createTeam(5);
    game.start();
} catch (e) {
    console.log(`Произошла ошибка: ${e}`);
}
