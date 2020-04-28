class Ship {
    constructor(health, damage, damageRate) {
        this.health = health;
        this.damage = damage;
        this.damageRate = damageRate || 10;
    }
    getDamageWithRandom() {
        return this.damage + this.damageRate * Math.random();
    }
}
export {Ship};