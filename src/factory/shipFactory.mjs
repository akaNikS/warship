import {Ship} from '../entity/ship.mjs';

class ShipFactory {
    constructor() {}

    createShips(count) {
        if(count < 1 || count > 100) {
            throw 'Неправильное количество кораблей';
        }
        let ships = [];
        for (let i = 0; i < count; i++) {
            ships.push(new Ship(100, 15));
        }
        return ships;
    }
}
export {ShipFactory};