import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private energy: EnergyType = 'stamina';
  private static instance = 0;

  get energyType(): EnergyType {
    return this.energy;
  }

  static createdArchetypeInstances():number {
    this.instance += 1;
    return this.instance;
  }
}