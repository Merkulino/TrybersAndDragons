import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private energy: EnergyType;
  private static instance = 0;
  
  constructor(_name:string, _special:number, _cost:number) {
    super(_name, _special, _cost);
    this.energy = 'mana';
    Mage.instance += 1;
  }

  get energyType(): EnergyType {
    return this.energy;
  }

  static createdArchetypeInstances():number {
    return this.instance;
  }
}