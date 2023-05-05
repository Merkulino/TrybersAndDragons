import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static instances = 0;

  constructor(
    _name: string,
    _dexterity: number,
  ) {
    super(_name, _dexterity);
    this._maxLifePoints = 99;
    Elf.instances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return this.instances;
  }
}