import Base from "../../core/base.js";

interface DangerousGood {
  un: string;
  class: string;
  name: string;
}

const DANGEROUS_GOODS = Object.freeze([
  { un: "1005", class: "2.3", name: "Ammonia, anhydrous" },
  { un: "1011", class: "2.1", name: "Butane" },
  { un: "1066", class: "2.2", name: "Nitrogen, compressed" },
  { un: "1072", class: "2.2", name: "Oxygen, compressed" },
  { un: "1965", class: "2.1", name: "Hydrocarbon gas mixture" },
  { un: "1978", class: "2.1", name: "Propane" },

  { un: "1170", class: "3", name: "Ethanol" },
  { un: "1202", class: "3", name: "Diesel fuel" },
  { un: "1203", class: "3", name: "Gasoline" },
  { un: "1230", class: "3", name: "Methanol" },
  { un: "1263", class: "3", name: "Paint" },
  { un: "1993", class: "3", name: "Flammable liquids, n.o.s." },

  { un: "1325", class: "4.1", name: "Flammable solid, organic, n.o.s." },
  { un: "1361", class: "4.2", name: "Carbon or Charcoal" },
  { un: "1397", class: "4.3", name: "Aluminium phosphide" },

  { un: "1490", class: "5.1", name: "Potassium permanganate" },
  { un: "1942", class: "5.1", name: "Ammonium nitrate" },
  { un: "3105", class: "5.2", name: "Organic peroxide type D, liquid" },

  { un: "1693", class: "6.1", name: "Tear gas substances" },
  { un: "2810", class: "6.1", name: "Toxic liquid, organic, n.o.s." },
  { un: "3291", class: "6.2", name: "Clinical waste, unspecified" },

  { un: "2910", class: "7", name: "Radioactive material, limited quantity" },

  { un: "1789", class: "8", name: "Hydrochloric acid" },
  { un: "1791", class: "8", name: "Hypochlorite solution" },
  { un: "1824", class: "8", name: "Sodium hydroxide solution" },
  { un: "1830", class: "8", name: "Sulfuric acid" },

  { un: "1845", class: "9", name: "Dry ice" },
  { un: "2211", class: "9", name: "Polymeric beads, expandable" },
  {
    un: "3082",
    class: "9",
    name: "Environmentally hazardous substance, liquid",
  },
  { un: "3480", class: "9", name: "Lithium ion batteries" },
]) as readonly DangerousGood[];

interface Reefer {
  temperature: number;
  unit: string;
  min: number;
  max: number;
}

export default class Baplie extends Base {
  #position(): string {
    return this.randomInt({ min: 1, max: 99 }).toString().padStart(2, "0");
  }

  public bay(): string {
    return this.#position();
  }

  public row(): string {
    return this.#position();
  }

  public tier(): string {
    return this.#position();
  }

  public unNumber(hazmatClass?: string): string {
    if (hazmatClass) {
      return (
        DANGEROUS_GOODS.find(
          (dangerousGood) => dangerousGood.class === hazmatClass,
        )?.un ?? ""
      );
    }

    return this.randomArrayElement(DANGEROUS_GOODS).un;
  }

  public hazmatClass(unNumber?: string): string {
    if (unNumber) {
      return (
        DANGEROUS_GOODS.find((dangerousGood) => dangerousGood.un === unNumber)
          ?.class ?? ""
      );
    }

    return this.randomArrayElement(DANGEROUS_GOODS).class;
  }

  public unNumberName(unNumber: string): string {
    return (
      DANGEROUS_GOODS.find((dangerousGood) => dangerousGood.un === unNumber)
        ?.name ?? ""
    );
  }

  public dangerousGoodsName(): string {
    return this.randomArrayElement(DANGEROUS_GOODS).name;
  }

  public hazmat(): DangerousGood {
    return this.randomArrayElement(DANGEROUS_GOODS);
  }

  public reefer(): Reefer {
    const temperature = this.randomInt({ min: -30, max: 30 });

    const offset = this.randomInt({ min: 2, max: 5 });

    return {
      temperature,
      unit: "C",
      min: temperature - offset,
      max: temperature + offset,
    };
  }
}
