import Base from "../core/base";
import scienceData from "../data/science.json";

export default class ScienceModule extends Base {
  asteroid(): string {
    return this.randomArrayElement<string>(scienceData.asteroids);
  }

  biologicalTerm(): string {
    return this.randomArrayElement<string>(scienceData.biological_terms);
  }

  planet(): string {
    return this.randomArrayElement<string>(scienceData.planets);
  }

  chemicalElement(): string {
    return this.randomArrayElement<string>(scienceData.chemical_elements);
  }
}
