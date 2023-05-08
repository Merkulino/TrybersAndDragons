import Monster from './Monster';

export default class Dragon extends Monster {
  constructor(
    protected _lifePoints: number = 999,
    // private _strength: number = 80,
  ) {
    super(_lifePoints);
  }
}