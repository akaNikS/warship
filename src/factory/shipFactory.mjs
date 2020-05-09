import {Ship} from '../entity/ship.mjs';
import {RocketShip} from '../entity/RocketShip.mjs';
import {GunShip} from '../entity/GunShip.mjs';

class ShipFactory {
    constructor() {}

    createShips(count) {
        if(count < 1 || count > 100) {
            throw 'Неправильное количество кораблей';
        }
        let ships = [];
        for (let i = 0; i < count; i++) {
            ships.push(Math.random() < 0.8 ? new GunShip() : new RocketShip());
        }
        return ships;
    }
}
export {ShipFactory};