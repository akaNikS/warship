import {Ship} from '../entity/ship.mjs';
import {RocketShip} from '../entity/RocketShip.mjs';
import {GunShip} from '../entity/GunShip.mjs';
import {LaserShip} from "../entity/LaserShip.mjs";

class ShipFactory {
    constructor() {}

    createShips(count) {
        if(count < 1 || count > 100) {
            throw 'Неправильное количество кораблей';
        }
        let ships = [];
        for (let i = 0; i < count; i++) {
            let randomChance = Math.random()
            if (randomChance < 0.15) {
                ships.push(new RocketShip());
            }
            if (randomChance > 0.15 && randomChance < 0.3) {
                ships.push(new LaserShip());
            }
            if (randomChance > 0.3) {
                ships.push(new GunShip());
            }
        }
        return ships;
    }
}
export {ShipFactory};