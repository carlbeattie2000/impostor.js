import { randomInt } from "node:crypto";

class StringTemplatesReplacementFunctions {
  randomInt({ min = 0, max = 1 } = {}): number {
    return randomInt(min, max);
  }

  randomCharacter({ uppercase = false } = {}): string {
    const charList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const char = charList[this.randomInt({ max: charList.length })];

    if (char) {
      return uppercase ? char.toUpperCase() : char;
    }

    return "";
  }

  randomIntWithPadding({ min = 0, max = 1 } = {}): string {
    const rndInt = this.randomInt({ min, max });

    return rndInt < 10 ? `0${rndInt.toString()}` : rndInt.toString();
  }
}

const stringTemplateFunctions = new StringTemplatesReplacementFunctions();
const dateNow = new Date();

export type TemplateFunctions = Record<string, () => string | number>;

const templateFunctions: TemplateFunctions = {
  "#": (): number => stringTemplateFunctions.randomInt({ min: 1, max: 10 }),
  "?": (): string =>
    stringTemplateFunctions.randomCharacter({ uppercase: true }),
  "~": (): string => stringTemplateFunctions.randomCharacter(),
  DD: (): string =>
    stringTemplateFunctions.randomIntWithPadding({ min: 1, max: 31 }),
  MM: (): string =>
    stringTemplateFunctions.randomIntWithPadding({ min: 1, max: 12 }),
  YY: (): string => stringTemplateFunctions.randomIntWithPadding({ max: 24 }),
  YYYY: (): string =>
    stringTemplateFunctions.randomIntWithPadding({
      min: 1901,
      max: dateNow.getFullYear(),
    }),
};

export default templateFunctions;
