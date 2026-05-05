import { expect, expectTypeOf, test } from "vitest";

import { Impostor } from "../src/index.js";

import type ColorModule from "../src/modules/colors.js";
import type CryptoModule from "../src/modules/crypto.js";
import type ScienceModule from "../src/modules/science.js";
import type ShippingModule from "../src/modules/shipping/shipping.js";
import type TimezoneModule from "../src/modules/timezones.js";

const enGBLocale = new Impostor("en_GB");

test("Locale is loaded", () => {
  expect(enGBLocale).toHaveProperty("internet");
  expect(enGBLocale).toHaveProperty("location");
  expect(enGBLocale).toHaveProperty("person");
  expect(enGBLocale).toHaveProperty("finance");
  expect(enGBLocale).toHaveProperty("vehicle");
  expect(enGBLocale).toHaveProperty("phone");
  expect(enGBLocale).toHaveProperty("shipping");
});

test("Modules are loaded", () => {
  expectTypeOf(enGBLocale.color).toMatchTypeOf<ColorModule>();
  expectTypeOf(enGBLocale.crypto).toMatchTypeOf<CryptoModule>();
  expectTypeOf(enGBLocale.science).toMatchTypeOf<ScienceModule>();
  expectTypeOf(enGBLocale.timezone).toMatchTypeOf<TimezoneModule>();
  expectTypeOf(enGBLocale.shipping).toMatchTypeOf<ShippingModule>();
});
