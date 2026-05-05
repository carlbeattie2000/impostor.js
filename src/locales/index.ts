import Locale from "./locale.js";
import Base from "../core/base.js";
import data from "../data/locales/en_GB.js";

import type { LocaleData } from "../types/locales.js";

class Locales extends Base {
  loadedLocales: Record<string, Locale>;

  constructor() {
    super();

    this.loadedLocales = {};
  }

  addLocale(name: string, localeData: LocaleData) {
    this.loadedLocales[name] = new Locale(localeData);
  }

  get(name: string) {
    if (!(name in this.loadedLocales)) {
      throw new Error(`Locale ${name} does not exist!`);
    }

    return this.loadedLocales[name];
  }
}

const locales = new Locales();

locales.addLocale("en_GB", data);

export default locales;
