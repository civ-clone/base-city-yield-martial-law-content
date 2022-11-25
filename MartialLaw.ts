import Unhappiness from '@civ-clone/base-city-yield-unhappiness/Unhappiness';
import Unit from '@civ-clone/core-unit/Unit';
import Yield from '@civ-clone/core-yield/Yield';
import { makeNegative } from '@civ-clone/core-yield/NegativeYield';

export class MartialLaw extends Unhappiness {
  #unit: Unit;

  constructor(value: number | Yield, unit: Unit) {
    super(value, unit.id());

    this.#unit = unit;

    this.addKey('unit');
  }

  unit(): Unit {
    return this.#unit;
  }
}

makeNegative(MartialLaw);

export default MartialLaw;
