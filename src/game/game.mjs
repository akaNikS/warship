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
            this.teamA.processStep();
            this.teamB.processStep();
            let shipDefenderTeamA = this.teamA.getRandomAliveShip();
            let shipDefenderTeamB = this.teamB.getRandomAliveShip();
            let shipAttackerTeamA = this.teamA.getRandomReadyShip();
            let shipAttackerTeamB = this.teamB.getRandomReadyShip();
            if (shipAttackerTeamA) {
                console.log('\x1b[32mАтакует комнда: ' + this.teamA.name + '\x1b[0m');
                this.attack(shipAttackerTeamA, shipDefenderTeamB);
            } else {
                console.log('\x1b[32mУ команды: ' + this.teamA.name + ' нет атакующих кораблей\x1b[0m');
            }
            if (shipAttackerTeamB) {
                console.log('\x1b[32mАтакует комнда: ' + this.teamB.name + '\x1b[0m');
                this.attack(shipAttackerTeamB, shipDefenderTeamA);
            } else {
                console.log('\x1b[32mУ команды: ' + this.teamB.name + ' нет атакующих кораблей\x1b[0m');
            }
        }
        if (this.teamA.getFirstAliveShip()) {
            console.log('победила команда: ' + this.teamA.name);
        } else if (this.teamB.getFirstAliveShip()) {
            console.log('победила команда: ' + this.teamB.name);
        } else {
            console.log('Ничья!');
        }
        console.log(this.teamA.toString());
        console.log((this.teamA.getTypeShip()).join(' \x1b[34m☷☷☷\x1b[0m '));
        console.log(this.teamB.toString());
        console.log((this.teamB.getTypeShip()).join(' \x1b[34m☷☷☷\x1b[0m '));
    }
    attack(attacker, defender) {
        let randomDamage = attacker.getDamageWithRandom();
        defender.health -= randomDamage;
        console.log(`Урон: ${randomDamage}; Остаток жизни: ${defender.health}`);
        if (defender.health < 0) {
            console.log('\x1b[31mКорабль уничтожен!\x1b[0m');
        }
    }

}
export {Game};