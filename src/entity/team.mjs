class Team {
    constructor(ships, name) {
        this.name = name || 'unknown_' + Math.round(9999 * Math.random());
        this.ships = ships;
    }
    getFirstAliveShip() {
        for (const ship of this.ships) {
            if (ship.health > 0) {
                return ship;
            }
        }
        return null;
    }
}
export {Team};