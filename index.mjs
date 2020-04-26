import {ship1, ship2} from './src/entity/ship.mjs'
import {game} from './src/game/game.mjs'
console.log(ship1);
console.log(ship2);
game.teamA = ship1;
game.teamB = ship2;
game.start();
