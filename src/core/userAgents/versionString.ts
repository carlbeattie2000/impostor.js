import Base from "../base.js";

export default class VersionString extends Base {
  public net(): string {
    return [
      this.randomInt({ min: 1, max: 4 }),
      this.randomInt({ max: 9 }),
      this.randomInt({ min: 10000, max: 99999 }),
      this.randomInt({ max: 9 }),
    ].join(".");
  }

  public nt(): string {
    return `${this.randomInt({ min: 5, max: 6 }).toString()}.${this.randomInt({
      max: 3,
    }).toString()}`;
  }

  public ie(): number {
    return this.randomInt({ min: 7, max: 11 });
  }

  public trident(): string {
    return `${this.randomInt({ min: 3, max: 7 }).toString()}.${this.randomInt({
      max: 1,
    })}`;
  }

  public osx(delim?: string): string {
    return [
      10,
      this.randomInt({ min: 5, max: 10 }),
      this.randomInt({ max: 9 }),
    ].join(delim ?? ".");
  }

  public chrome(): string {
    return [
      this.randomInt({ min: 13, max: 39 }),
      0,
      this.randomInt({ min: 800, max: 899 }),
      0,
    ].join(".");
  }

  public presto(): string {
    return `2.9.${this.randomInt({ min: 160, max: 190 }).toString()}`;
  }

  public presto2(): string {
    return `${this.randomInt({ min: 10, max: 12 }).toString()}.00`;
  }

  public safari(): string {
    return `${this.randomInt({
      min: 531,
      max: 538,
    }).toString()}.${this.randomInt({ max: 2 }).toString()}.${this.randomInt({
      max: 2,
    })}`;
  }
}
