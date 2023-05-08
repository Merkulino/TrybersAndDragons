import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  protected player;
  protected player2;

  constructor(player: Fighter, player2: Fighter) {
    super(player);
    this.player = player;
    this.player2 = player2;
  }

  // attackPlayer = (currentPlayer: Fighter, otherPlayer: Fighter): void => {
  //   currentPlayer.attack(otherPlayer);
  // };

  fight(): number {
    let res = 0;
    while (this.player.lifePoints >= 0 && this.player2.lifePoints >= 0) {
      this.player.attack(this.player2);
      this.player2.attack(this.player);
      if (this.player.lifePoints === -1) {
        res = -1;
      } else {
        res = 1;
      }
    }

    return res;
    // return this.player.lifePoints === -1 ? -1 : 1;
  }
}
