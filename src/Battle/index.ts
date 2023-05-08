import Character from '../Character';
import Battle from './Battle';
import PVP from './PVP';
import PVE from './PVE';

const sdiadja = new Character('oi');
const ginosm = new Character('ooioi');
const luta = new PVP(sdiadja, ginosm);

luta.fight();

export default Battle;
export { PVP, PVE };
