import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _dexterity: number = getRandomInt(1, 10);
  private _race: Race = new Elf(this._name, this._dexterity);
  private _archetype: Archetype = new Mage(this._name, 10, 10);
  private _strength: number = getRandomInt(1, 10);
  private _defense: number = getRandomInt(1, 10);
  private _maxLifePoints: number = this._race.maxLifePoints / 2;
  private _lifePoints: number = this._maxLifePoints;
  private _energy: Energy = { 
    type_: this._archetype.energyType, 
    amount: getRandomInt(1, 10),
  };
  
  constructor(private _name: string) {}
  
  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }
  
  get defense(): number {
    return this._defense;
  }

  get energy(): Energy {
    return { type_: this._energy.type_, amount: this._energy.amount };
  }

  special(enemy: Fighter): void { 
    this.energy.amount -= 5;
    this._strength += 5;
    this._defense += 2;
    this.attack(enemy);
    this._strength -= 3;
  }

  levelUp(): void {
    this._maxLifePoints += 1;
    this._strength += 1;
    this._dexterity += 1;
    this._defense += 1;
    this._energy.amount = 10;
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    if (damage > 0) {
      this._lifePoints = this.lifePoints - damage;
    } else {
      this._lifePoints -= 1; 
    }
    if (this.lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this.lifePoints;
  }
}