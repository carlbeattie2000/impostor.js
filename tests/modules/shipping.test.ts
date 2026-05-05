import { describe, expect, it } from "vitest";

import ShippingModule from "../../src/modules/shipping/shipping.js";

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

    it("Selects random iso size type", () => {
      const isoSizeType = testShipping.container.isoSizeType();
      const isoSizeType2 = testShipping.ISO6346.isoSizeType();

      expect(isoSizeType).toHaveProperty("code");
      expect(isoSizeType).toHaveProperty("length");
      expect(isoSizeType).toHaveProperty("type");

      expect(isoSizeType2).toHaveProperty("code");
      expect(isoSizeType2).toHaveProperty("length");
      expect(isoSizeType2).toHaveProperty("type");

      expect(isoSizeType.code).toBeTypeOf("string");
      expect(isoSizeType.length).toBeTypeOf("number");
      expect(isoSizeType.type).toBeTypeOf("string");

      expect(isoSizeType2.code).toBeTypeOf("string");
      expect(isoSizeType2.length).toBeTypeOf("number");
      expect(isoSizeType2.type).toBeTypeOf("string");
    });
  });

  describe("Baplie", () => {
    it("Generates random bay", () => {
      const bay = testShipping.baplie.bay();

      expect(bay).toHaveLength(2);
      expect(bay).match(/^[0-9]{2}$/);
    });

    it("Generates random bay", () => {
      const row = testShipping.baplie.row();

      expect(row).toHaveLength(2);
      expect(row).match(/^[0-9]{2}$/);
    });

    it("Generates random bay", () => {
      const tier = testShipping.baplie.tier();

      expect(tier).toHaveLength(2);
      expect(tier).match(/^[0-9]{2}$/);
    });

    it("Selects random hazmat class from dangerous goods list", () => {
      const hazmatClass = testShipping.baplie.hazmatClass();

      expect(hazmatClass).match(
        /^(?:[1-2]\.[1-3]|1\.[4-6]|4\.[1-3]|5\.[1-2]|6\.[1-2]|[1-9])$/,
      );
    });

    it("Gets hazmat class from un number", () => {
      const hazmatClass = testShipping.baplie.hazmatClass("1230");

      expect(hazmatClass).equals("3");
    });

    it("Selects random UN number from dangerous goods list", () => {
      const hazmatClass = testShipping.baplie.unNumber();

      expect(hazmatClass).match(/^[0-9]{4}$/);
    });

    it("Gets UN number from hazmat class", () => {
      const unNumber = testShipping.baplie.unNumber("8");

      expect(unNumber).equals("1789");
    });

    it("Gets dangerous goods name from UN number", () => {
      const unNumberName = testShipping.baplie.unNumberName("1845");

      expect(unNumberName).equals("Dry ice");
    });

    it("Selects random dangerous goods name from dangerous goods list", () => {
      const dangerousGoodName = testShipping.baplie.dangerousGoodsName();

      expect(dangerousGoodName.length).toBeGreaterThan(0);
    });

    it("Selects random dangerous good from dangerous goods list", () => {
      const hazmat = testShipping.baplie.hazmat();

      expect(hazmat).toHaveProperty("un");
      expect(hazmat).toHaveProperty("class");
      expect(hazmat).toHaveProperty("name");
    });

    it("Generates random reefer profile", () => {
      const reefer = testShipping.baplie.reefer();

      expect(reefer).toHaveProperty("temperature");

      expect(reefer.temperature).toBeGreaterThanOrEqual(-30);
      expect(reefer.temperature).toBeLessThanOrEqual(30);

      expect(reefer.unit).toEqual("C");

      expect(reefer.min).toBeGreaterThanOrEqual(-35);
      expect(reefer.min).toBeLessThanOrEqual(28);

      expect(reefer.max).toBeGreaterThanOrEqual(-28);
      expect(reefer.max).toBeLessThanOrEqual(35);
    });
  });
});
