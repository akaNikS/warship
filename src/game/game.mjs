import {Team} from '../entity/team.mjs';

class Game {
    constructor() {
        this.teamA = null;
        this.teamB = null;
    }
    setTeamA(team) {
        if (team instanceof Team) {
            this.teamA = team;
        } else {
            throw 'Некорректный объект команды А';
        }
    }
    setTeamB(team) {
        if (team instanceof Team) {
            this.teamB = team;
        } else {
            throw 'Некорректный объект команды В';
        }
    }
    start() {
        console.log(this.teamA);
        console.log(this.teamB);
        console.log('Раунд между командами: ' + this.teamA.name + ' и ' + this.teamB.name);
        while (this.teamA.getFirstAliveShip() && this.teamB.getFirstAliveShip()) {
            let shipTeamA = this.teamA.getRandomAliveShip();
            let shipTeamB = this.teamB.getRandomAliveShip();
            console.log('Атакует комнда: ' + this.teamA.name);
            this.attack(shipTeamA, shipTeamB);
            console.log('Атакует комнда: ' + this.teamB.name);
            this.attack(shipTeamB, shipTeamA);
        }
        if (this.teamA.getFirstAliveShip()) {
            console.log('победила команда: ' + this.teamA.name);
        } else if (this.teamB.getFirstAliveShip()) {
            console.log('победила команда: ' + this.teamB.name);
        } else {
            console.log('Ничья!');
        }
        console.log(this.teamA);
        console.log(this.teamB);
    }
    attack(attacker, defender) {
        let randomDamage = attacker.getDamageWithRandom();
        defender.health -= randomDamage;
        console.log(`Урон: ${randomDamage}; Остаток жизни: ${defender.health}`);
        if (defender.health < 0) {
            console.log('Корабль уничтожен!');
        }
    }

}
export {Game};