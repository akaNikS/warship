import {Ship} from "./ship.mjs";

class LaserShip extends Ship {
    constructor() {
        super(150, 100, 30, 0.1);
    }
    getDamageWithRandom() {
        this.delayShot = 3;
        if (Math.random() < this.criticalRate) {
            console.log('\x1b[30;41mCritical hit!\x1b[0m');
            return Math.round(1.5 * (this.damage + this.damageRate * Math.random()));
        }
        return Math.round(this.damage + this.damageRate * Math.random());
    }
    processStep() {
        if (this.delayShot > 0) {
            this.delayShot -= 1;
        }
        super.processStep();
    }

}
export {LaserShip};