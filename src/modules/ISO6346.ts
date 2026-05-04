import { Base } from "../core/base";

const charNumericValueMapping: Record<string, number> = {
  A: 10,
  B: 12,
  C: 13,
  D: 14,
  E: 15,
  F: 16,
  G: 17,
  H: 18,
  I: 19,
  J: 20,
  K: 21,
  L: 23,
  M: 24,
  N: 25,
  O: 26,
  P: 27,
  Q: 28,
  R: 29,
  S: 30,
  T: 31,
  U: 32,
  V: 34,
  W: 35,
  X: 36,
  Y: 37,
  Z: 38,
};

export default class ISO6346 extends Base {
  public ownerCode(): string {
    return this.randomString(3).toUpperCase();
  }

  public category(): string {
    return "U";
  }

  public serialNumber(): string {
    return this.randomInt({ min: 100000, max: 999999 }).toString();
  }

  public checkDigit(
    ownerCode: string,
    category: string,
    serial: string,
  ): string;
  public checkDigit(
    ownerCode: string,
    category: string,
    serial: string,
    returnNumber: true,
  ): number;

  public checkDigit(
    ownerCode: string,
    category: string,
    serial: string,
    returnNumber?: boolean,
  ): string | number {
    const code = ownerCode + category + serial;
    let sum = 0;
    for (let i = 0; i < 10; i += 1) {
      const char = code[i].toUpperCase();
      let value = charNumericValueMapping[char];

      value ??= Number.parseInt(char, 10);

      sum += value * 2 ** i;
    }

    const calculatedCheckDigit = sum % 11 === 10 ? 0 : sum % 11;

    if (returnNumber) {
      return calculatedCheckDigit;
    }

    return calculatedCheckDigit.toString();
  }

  public generate(): string {
    const ownerCode = this.ownerCode();
    const category = this.category();
    const serial = this.serialNumber();
    const checkDigit = this.checkDigit(ownerCode, category, serial);

    return `${ownerCode}${category}${serial}${checkDigit}`;
  }
}
