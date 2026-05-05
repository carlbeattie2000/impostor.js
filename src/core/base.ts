import { randomBytes, randomInt } from "node:crypto";

import templateFunctions from "./stringTemplates.js";

export default class Base {
  alpha: string[];

  constructor() {
    this.alpha = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
  }

  randomHexValue(size: number): string {
    return `0x${new Array(size)
      .fill("")
      .map((_) => Math.floor(randomInt(16)).toString())
      .join("")
      .toUpperCase()}`;
  }

  randomInt({
    min = 0,
    max = 2,
    seed = new Date().getMilliseconds(),
  } = {}): number {
    if (min > max) {
      throw Error("Out of range! Min should not be larger than the max!");
    }

    const range = max - min;

    const byteSize = Math.ceil(Number(range.toString(2).length) / 8);
    const randomBytesCreated = Buffer.concat([
      randomBytes(byteSize),
      Buffer.from(seed.toString()),
    ]);
    const randomValue = BigInt(`0x${randomBytesCreated.toString("hex")}`);

    const value = Number(BigInt(min) + (randomValue % BigInt(range)));

    return value;
  }

  randomFloat(max: number, fixed = 2): number {
    return parseFloat((Math.random() * max).toFixed(fixed));
  }

  days_passed(dt: Date): number {
    const current = new Date(dt.getTime()).getMilliseconds();
    const previous = new Date(dt.getFullYear(), 0, 1).getMilliseconds();

    return Math.ceil((current - previous + 1) / 8.64e7);
  }

  randomDateString(minYear = 1970, maxYear = new Date().getFullYear()): string {
    if (minYear === 0 || maxYear === 0) {
      throw new Error("Min or max should not be zero!");
    }

    if (minYear > maxYear) {
      throw new Error("Min year should not be larger than max!");
    }

    const startTimestamp = new Date(minYear, 0, 1).getTime(); // Jan 1st of minYear

    const endTimestamp =
      maxYear === new Date().getFullYear()
        ? new Date().getTime()
        : new Date(maxYear, 11, 31, 23, 59, 59).getTime();

    const gap = endTimestamp - startTimestamp;

    const randomTimestamp = startTimestamp + this.randomInt({ max: gap });

    return new Date(randomTimestamp).toISOString();
  }

  randomArrayElement<T>(array: readonly T[]): T {
    if (!array || !Array.isArray(array) || array.length === 0) {
      throw new Error("Invalid or empty array!");
    }

    if (array.length === 1) {
      return array[0] as T;
    }

    return array[this.randomInt({ max: array.length })] as T;
  }

  randomBytes(size: number): Buffer {
    return randomBytes(size);
  }

  randomBytesString(size: number): string {
    return randomBytes(size).toString("hex");
  }

  randomString(length: number): string {
    return new Array(length)
      .fill("")
      .map((_) => this.randomArrayElement(this.alpha))
      .join("");
  }

  /**
   * Takes a string that contains characters that are used as templates eg. # | ? and replaces them with random replacements.
   *
   * # - Int
   * ? - Uppercase char
   * ~ - Lowercase char
   * DD - Day
   * MM - Month
   * YY - Shorthand year
   * YYYY - Full year
   *
   * @param {string} template - The template string
   * @return {string} The template string, with the template values been replaced with the correct data.
   */
  randomStringFormatter(template: string): string {
    return template.replace(/(?:#|\?|~|DD|MM|(?:YYYY|YY))/g, (char) => {
      if (char in templateFunctions) {
        const mappedFn = templateFunctions[char];
        if (mappedFn) {
          return mappedFn().toString();
        }
      }

      return char;
    });
  }
}
