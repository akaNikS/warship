import {Ship} from './src/entity/ship.mjs';
import {ShipFactory} from './src/factory/shipFactory.mjs';
import {Game} from './src/game/game.mjs';
import {Team} from './src/entity/team.mjs';

const shipFactory = new ShipFactory();
const newGame = new Game();
try {
    newGame.setTeamA(new Team(shipFactory.createShips(3)));
    newGame.setTeamB(new Team(shipFactory.createShips(3)));
    newGame.start();
} catch (e) {
    console.log(`Произошла ошибка: ${e}`);
}
