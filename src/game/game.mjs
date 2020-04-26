
const game = {
    teamA: null,
    teamB: null,
    start: function () {
        let dammageRate = 5;
        while (this.teamA.health > 0 && this.teamB.health > 0) {
            let randomDammage = (Math.random() * 10) - 5;
            let randomDammage2 = (Math.random() * 10) - 5;
            this.teamA.health -= this.teamB.damage + randomDammage;
            this.teamB.health -= this.teamA.damage + randomDammage2;
            console.log(`Первый корабль атакует. Урон ${this.teamA.damage + randomDammage2}; Остаток жизни ${this.teamB.health}.`);
            console.log(`Второй корабль атакует. Урон ${this.teamB.damage + randomDammage}; Остаток жизни ${this.teamA.health}.`);
        }
        if (this.teamA.health > this.teamB.health) {
            console.log('победил первый');
        } else if (this.teamB.health > this.teamA.health) {
            console.log('победил второй');
        } else {
            console.log('Ничья!');
        }

    }
};
export {game};