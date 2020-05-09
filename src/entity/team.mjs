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
    getRandomAliveShip() {
        let aliveShips = [];
        for (const ship of this.ships) {
            if (ship.health > 0) {
                aliveShips.push(ship)
            }
        }
        if (aliveShips.length === 0) {
            return null;
        }
        let randomIndex = Math.round(Math.random() * (aliveShips.length - 1));
        return aliveShips[randomIndex];
    }
}
export {Team};