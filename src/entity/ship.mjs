class Ship {
    constructor(health, damage, damageRate, criticalRate) {
        this.health = health;
        this.damage = damage;
        this.damageRate = damageRate || 10;
        this.criticalRate = criticalRate || 0;
        this.delayShot = 0;
        this.healthEtalon = health;
    }
    getDamageWithRandom() {
        if (Math.random() < this.criticalRate) {
            console.log('\x1b[30;41mCritical hit!\x1b[0m');
            return Math.round(1.5 * (this.damage + this.damageRate * Math.random()));
        }
        return Math.round(this.damage + this.damageRate * Math.random());
    }
    processStep() {
        if (this.health > 0 && Math.random() < 0.2) {
            let restoreHealth = 100;
            if (this.healthEtalon - this.health < 100) {
                restoreHealth = this.healthEtalon - this.health;
            }
            console.log(`Корабль восстановил ${restoreHealth}HP`);
            this.health += restoreHealth;
        }
    }
}
export {Ship};