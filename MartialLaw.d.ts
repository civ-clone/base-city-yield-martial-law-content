import Unhappiness from '@civ-clone/base-city-yield-unhappiness/Unhappiness';
import Unit from '@civ-clone/core-unit/Unit';
import Yield from '@civ-clone/core-yield/Yield';
export declare class MartialLaw extends Unhappiness {
  #private;
  constructor(value: number | Yield, unit: Unit);
  unit(): Unit;
}
export default MartialLaw;
