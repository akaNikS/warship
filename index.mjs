import {Ship} from './src/entity/ship.mjs'
import {game} from './src/game/game.mjs'

game.teamA = [new Ship(100, 15), new Ship(100, 15)];
game.teamB = [new Ship(100, 15), new Ship(100, 15)];
game.start();
