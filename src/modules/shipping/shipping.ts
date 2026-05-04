import Baplie from "./baplie";
import ISO6346 from "./ISO6346";
import { Base } from "../../core/base";

export default class ShippingModule extends Base {
  public container: ISO6346;

  public ISO6346: ISO6346;

  public baplie: Baplie;

  constructor() {
    super();

    const iso6346 = new ISO6346();

    this.container = iso6346;
    this.ISO6346 = iso6346;
    this.baplie = new Baplie();
  }
}
