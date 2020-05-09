class Ship {
    constructor(health, damage, damageRate, criticalRate) {
        this.health = health;
        this.damage = damage;
        this.damageRate = damageRate || 10;
        this.criticalRate = criticalRate || 0;
    }
    getDamageWithRandom() {
        if (Math.random() < this.criticalRate) {
            console.log('Critical hit!');
            return Math.round(1.5 * (this.damage + this.damageRate * Math.random()));
        }
        return Math.round(this.damage + this.damageRate * Math.random());
    }
}
export {Ship};