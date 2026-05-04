import { assertType, expect, expectTypeOf, test } from "vitest";

import Base from "../../src/core/base";

const testBase = new Base();

test("generates a random hex value string of given length, should not fail when given large size, or negative/no size. Should not equal the same generated string of the same size.", () => {
  const smallHexValueString = testBase.randomHexValue(4);
  const largeHexValueString = testBase.randomHexValue(4444);

  const sameSizeHexValueString01 = testBase.randomHexValue(16);
  const sameSizeHexValueString02 = testBase.randomHexValue(16);

  expect(smallHexValueString).toBeDefined();
  expectTypeOf(smallHexValueString).toBeString();

  expect(largeHexValueString).toBeDefined();
  expectTypeOf(largeHexValueString).toBeString();

  expect(sameSizeHexValueString01 === sameSizeHexValueString02).toBeFalsy();
});

test("generates a random int between a min and max value", () => {
  const smallMin = 4;
  const smallMax = 20;

  const largeMin = 9343;
  const largeMax = 56765;

  const randomIntSmall = testBase.randomInt({ min: smallMin, max: smallMax });
  const randomIntLarge = testBase.randomInt({ min: largeMin, max: largeMax });

  expectTypeOf(randomIntSmall).toBeNumber();
  expect(randomIntSmall).toBeGreaterThanOrEqual(smallMin);
  expect(randomIntSmall).toBeLessThanOrEqual(smallMax);

  expectTypeOf(randomIntLarge).toBeNumber();
  expect(randomIntLarge).toBeGreaterThanOrEqual(largeMin);
  expect(randomIntLarge).toBeLessThanOrEqual(largeMax);

  let invalidSmallTest = false;

  for (let i = 0; i < 50; i += 1) {
    const randomInt = testBase.randomInt({ min: smallMin, max: smallMax });

    if (randomInt < smallMin || randomInt > smallMax) {
      invalidSmallTest = true;
    }
  }

  expect(invalidSmallTest).toBeFalsy();
});

test("generates a random float between a min and max value", () => {
  const smallMax = 20;

  const largeMax = 56765;

  const randomFloatSmall = testBase.randomFloat(smallMax, 2);
  const randomFloatLarge = testBase.randomFloat(largeMax, 2);

  expectTypeOf(randomFloatSmall).toBeNumber();
  expect(randomFloatSmall).toBeGreaterThan(0);
  expect(randomFloatSmall).toBeLessThan(smallMax);

  expectTypeOf(randomFloatLarge).toBeNumber();
  expect(randomFloatLarge).toBeGreaterThan(0);
  expect(randomFloatSmall).toBeLessThanOrEqual(largeMax);
});

test("generates a random date string", () => {
  expect(() => testBase.randomDateString(0, 0)).toThrowError();
  expect(() => testBase.randomDateString(2022, 2015)).toThrowError();

  const dateStringSame = testBase.randomDateString(2023, 2023);
  expectTypeOf(dateStringSame).toBeString();

  const parsedDateSame = new Date(dateStringSame);
  expect(parsedDateSame.getFullYear()).toBe(2023);

  const dateStringRange = testBase.randomDateString(2022, 2024);
  const parsedDateRange = new Date(dateStringRange);

  const timestamp = parsedDateRange.getTime();

  const minTimestamp = new Date(2022, 0, 1).getTime();
  const maxTimestamp = new Date(2024, 11, 31, 23, 59, 59).getTime();

  expect(timestamp).toBeGreaterThanOrEqual(minTimestamp);
  expect(timestamp).toBeLessThanOrEqual(maxTimestamp);
});

test("selects a random array element", () => {
  const charArray = ["a", "b", "c", "d", "e"];
  const numberArray = [4, 44, 25, 99, 101];
  const emptyArray: number[] = [];

  expect(() => testBase.randomArrayElement<number>(emptyArray)).toThrowError();

  const randomChar = testBase.randomArrayElement<string>(charArray);
  expectTypeOf(randomChar).toBeString();
  expect(randomChar).toHaveLength(1);

  const randomNumber = testBase.randomArrayElement<number>(numberArray);
  expectTypeOf(randomNumber).toBeNumber();
  expect(randomNumber).toBeGreaterThanOrEqual(4);
  expect(randomNumber).toBeLessThanOrEqual(101);
});

test("generates random bytes of size", () => {
  const randomBytes = testBase.randomBytes(24);
  expect(randomBytes).toHaveLength(24);
});

test("generates random bytes string of size", () => {
  const randomBytesString = testBase.randomBytesString(24);

  expectTypeOf(randomBytesString).toBeString();
  expect(randomBytesString).toHaveLength(24 * 2);
});

test("generates random string of size", () => {
  const randomString = testBase.randomString(54);

  expectTypeOf(randomString).toBeString();
  expect(randomString).toHaveLength(54);
});

test("generates a random string using a custom template", () => {
  const randomNumberTemplate = testBase.randomStringFormatter("###");
  const randomYearTemplate = testBase.randomStringFormatter("YYYY");

  expectTypeOf(randomNumberTemplate).toBeString();
  expectTypeOf(randomYearTemplate).toBeString();

  expect(randomNumberTemplate).toHaveLength(3);
  expect(randomYearTemplate).toHaveLength(4);

  expect(randomNumberTemplate).to.not.contain("#");
  expect(randomYearTemplate).to.not.contain("Y");
});
