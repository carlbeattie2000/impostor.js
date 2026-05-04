import { describe, expect, it } from "vitest";

import ShippingModule from "../../src/modules/shipping/shipping";

const testShipping = new ShippingModule();

describe("ShippingModule", () => {
  describe("ISO 6346 container", () => {
    it("Generates random owner code", () => {
      const ownerCode = testShipping.container.ownerCode();
      const ownerCode2 = testShipping.ISO6346.ownerCode();

      expect(ownerCode).toHaveLength(3);
      expect(ownerCode2).toHaveLength(3);

      expect(ownerCode).match(/^[A-Z]{3}$/);
      expect(ownerCode2).match(/^[A-Z]{3}$/);
    });

    it("Generates random serial number", () => {
      const serialNumber = testShipping.container.serialNumber();
      const serialNumber2 = testShipping.ISO6346.serialNumber();

      expect(serialNumber).toHaveLength(6);
      expect(serialNumber2).toHaveLength(6);

      expect(serialNumber).match(/^[0-9]{6}$/);
      expect(serialNumber2).match(/^[0-9]{6}$/);
    });

    it("Generates valid check digit for owner code and serial", () => {
      const ownerCode = "CSQ";
      const serial = "305438";
      const category = "U";

      const checkDigit = testShipping.container.checkDigit(
        ownerCode,
        category,
        serial,
        true,
      );
      const checkDigit1 = testShipping.container.checkDigit(
        ownerCode,
        category,
        serial,
        true,
      );

      expect(checkDigit).toEqual(3);
      expect(checkDigit1).toEqual(3);
    });

    it("Generates random container number", () => {
      const containerNumber = testShipping.container.generate();
      const containerNumber2 = testShipping.ISO6346.generate();

      expect(containerNumber).toHaveLength(11);
      expect(containerNumber2).toHaveLength(11);

      expect(containerNumber).match(/^[A-Z]{3}U[0-9]{6}[0-9]$/);
      expect(containerNumber2).match(/^[A-Z]{3}U[0-9]{6}[0-9]$/);
    });
  });
});
