import {Ship} from "./ship.mjs";

class RocketShip extends Ship {
    constructor() {
        super(150, 50, 30, 0.3);
    }
}
export {RocketShip};