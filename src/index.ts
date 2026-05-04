import { Base } from "./core/base";
import locales from "./locales";
import { ColorModule } from "./modules/colors";
import { CryptoModule } from "./modules/crypto";
import { ScienceModule } from "./modules/science";
import ShippingModule from "./modules/shipping/shipping";
import { TimezoneModule } from "./modules/timezones";

import type { FinanceLocale } from "./locales/finance";
import type { InternetLocale } from "./locales/internet";
import type { Locale } from "./locales/locale";
import type { LocationLocale } from "./locales/location";
import type { PersonLocale } from "./locales/person";
import type { PhoneLocale } from "./locales/phone";
import type { VehicleLocale } from "./locales/vehicle";
import type { localeCodes } from "./types/locales";

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
    this.locale = locales.get(countryCode);
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
    this.locale = locales.get(countryCode);

    this.internet = this.locale.internet;
    this.finance = this.locale.finance;
    this.location = this.locale.location;
    this.person = this.locale.person;
    this.phone = this.locale.phone;
    this.vehicle = this.locale.vehicle;
  }
}
