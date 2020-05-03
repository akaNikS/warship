
const game = {
    teamA: [],
    teamB: [],
    start: function () {
        console.log(this.teamA);
        console.log(this.teamB);
        while (this.getFirstAliveShip(this.teamA) && this.getFirstAliveShip(this.teamB)) {
            let shipTeamA = this.getFirstAliveShip(this.teamA);
            let shipTeamB = this.getFirstAliveShip(this.teamB);
            console.log('Атакует комнда "А"');
            this.attack(shipTeamA, shipTeamB);
            console.log('Атакует комнда "В"');
            this.attack(shipTeamB, shipTeamA);
        }
        if (this.getFirstAliveShip(this.teamA)) {
            console.log('победила команда "А"');
        } else if (this.getFirstAliveShip(this.teamB)) {
            console.log('победила команда "В"');
        } else {
            console.log('Ничья!');
        }
        console.log(this.teamA);
        console.log(this.teamB);
    },
    getFirstAliveShip: function (team) {
        for (const ship of team) {
            if (ship.health > 0) {
                return ship;
            }
        }
        return null;
    },
    attack: function (attacker, defender) {
        let randomDamage = attacker.getDamageWithRandom();
        defender.health -= randomDamage;
        console.log(`Урон: ${randomDamage}; Остаток жизни: ${defender.health}`);
        if (defender.health < 0) {
            console.log('Корабль уничтожен!');
        }
    }
};
export {game};