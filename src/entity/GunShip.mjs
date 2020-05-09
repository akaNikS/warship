import {Ship} from "./ship.mjs";

class GunShip extends Ship {
    constructor() {
        super(300, 20, 10, 0.1);
    }
}
export {GunShip};