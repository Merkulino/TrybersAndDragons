abstract class Race {
  // public static instances = 0;
  constructor(private _name: string, private _dexterity: number) {}
  
  get name() {
    return this._name;
  }

  get dexterity() {
    return this._dexterity;
  }

  static createdRacesInstances():number { // Eu não entendi KKKK
    // if (instances > maxInstances) throw new Error('Not Implemented');
    // return instances + 1;
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints():number;
}

export default Race;