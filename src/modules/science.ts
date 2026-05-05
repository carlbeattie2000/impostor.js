import Base from "../core/base.js";
import data from "../data/science.js";

export default class ScienceModule extends Base {
  asteroid(): string {
    return this.randomArrayElement<string>(data.asteroids);
  }

  biologicalTerm(): string {
    return this.randomArrayElement<string>(data.biological_terms);
  }

  planet(): string {
    return this.randomArrayElement<string>(data.planets);
  }

  chemicalElement(): string {
    return this.randomArrayElement<string>(data.chemical_elements);
  }
}
