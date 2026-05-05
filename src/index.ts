import Base from "./core/base.js";
import locales from "./locales/index.js";
import ColorModule from "./modules/colors.js";
import CryptoModule from "./modules/crypto.js";
import ScienceModule from "./modules/science.js";
import ShippingModule from "./modules/shipping/shipping.js";
import TimezoneModule from "./modules/timezones.js";

import type FinanceLocale from "./locales/finance.js";
import type InternetLocale from "./locales/internet.js";
import type Locale from "./locales/locale.js";
import type LocationLocale from "./locales/location.js";
import type PersonLocale from "./locales/person.js";
import type PhoneLocale from "./locales/phone.js";
import type VehicleLocale from "./locales/vehicle.js";
import type { localeCodes } from "./types/locales.js";

export default class Impostor extends Base {
  private locale: Locale;

  internet: InternetLocale;

  finance: FinanceLocale;

  location: LocationLocale;

  person: PersonLocale;

  phone: PhoneLocale;

  vehicle: VehicleLocale;

  color: ColorModule;

  crypto: CryptoModule;

  science: ScienceModule;

  timezone: TimezoneModule;

  shipping: ShippingModule;

  constructor(countryCode: localeCodes = "en_GB") {
    super();

    const locale = locales.get(countryCode);
    if (!locale) {
      throw new Error("Locale Error");
    }

    this.locale = locale;
    this.locale = locale;
    this.internet = this.locale.internet;
    this.finance = this.locale.finance;
    this.location = this.locale.location;
    this.person = this.locale.person;
    this.phone = this.locale.phone;
    this.vehicle = this.locale.vehicle;

    this.color = new ColorModule();
    this.crypto = new CryptoModule();
    this.science = new ScienceModule();
    this.timezone = new TimezoneModule();

    this.shipping = new ShippingModule();
  }

  setLocale(countryCode: localeCodes): void {
    const locale = locales.get(countryCode);
    if (!locale) {
      throw new Error("Locale Error");
    }
    this.locale = locale;

    this.internet = this.locale.internet;
    this.finance = this.locale.finance;
    this.location = this.locale.location;
    this.person = this.locale.person;
    this.phone = this.locale.phone;
    this.vehicle = this.locale.vehicle;
  }
}
