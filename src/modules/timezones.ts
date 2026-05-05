import Base from "../core/base.js";
import data from "../data/timezones.js";

import type { localeCodes } from "../types/locales.js";

export default class TimezoneModule extends Base {
  timezone(): string {
    return this.randomArrayElement<string>(data.timezones);
  }

  dateTime(timezone = "", locale: localeCodes = "en_GB"): string {
    const date = new Date();

    if (timezone) {
      return date.toLocaleString(locale.replace("_", "-"), {
        timeZone: timezone,
      });
    }

    return date.toLocaleString(locale.replace("_", "-"), {
      timeZone: this.timezone(),
    });
  }
}
