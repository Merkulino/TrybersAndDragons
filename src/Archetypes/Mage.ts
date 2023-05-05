import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private energy: EnergyType = 'mana';
  private static instance = 0;

  get energyType(): EnergyType {
    return this.energy;
  }

  static createdArchetypeInstances():number {
    this.instance += 1;
    return this.instance;
  }
}