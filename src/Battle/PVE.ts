import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    protected player: Fighter,
    protected monsters: Monster[] | SimpleFighter[],
  ) {
    super(player);
  }

  fight(): number {
    let res = 0;
    this.monsters.forEach((monster) => {
      while (this.player.lifePoints >= 0 && monster.lifePoints >= 0) {
        this.player.attack(monster);
        monster.attack(this.player);
        if (this.player.lifePoints === -1) {
          res = -1;
        } else {
          res = 1;
        }
      }
    });
    return res;
  }
}