import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('Maria de Jesus');
const player2 = new Character('José Firmino');
const player3 = new Character('Neide da Conceição');

player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon();

player1.levelUp();
player1.levelUp();
player1.levelUp();

const pvp = new PVP(player2, player3);

player1.levelUp();

const pve = new PVE(player1, [monster1, monster2]);

const runBattles = (battles: Battle[]) => {
  battles.forEach((battle) => {
    battle.fight();
  });
};

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };