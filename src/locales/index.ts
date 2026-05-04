import Locale from "./locale";
import Base from "../core/base";
import enGBData from "../data/locales/en_GB.json";

import type { LocaleData } from "../types/locales";

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

locales.addLocale("en_GB", enGBData);

export default locales;
