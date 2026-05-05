import FinanceLocale from "./finance.js";
import InternetLocale from "./internet.js";
import LocationLocale from "./location.js";
import PersonLocale from "./person.js";
import PhoneLocale from "./phone.js";
import VehicleLocale from "./vehicle.js";
import Base from "../core/base.js";

import type { LocaleData } from "../types/locales.js";

export default class Locale extends Base {
  internet: InternetLocale;

  finance: FinanceLocale;

  location: LocationLocale;

  person: PersonLocale;

  phone: PhoneLocale;

  vehicle: VehicleLocale;

  constructor(data: LocaleData) {
    super();

    this.internet = new InternetLocale(data.internet);
    this.finance = new FinanceLocale(data.finance);
    this.location = new LocationLocale(data.location);
    this.person = new PersonLocale(data.person);
    this.phone = new PhoneLocale(data.phone);
    this.vehicle = new VehicleLocale(data.vehicle);
  }
}
