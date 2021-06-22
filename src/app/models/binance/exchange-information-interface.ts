import { SymbolInterface } from "./symbol-interface";

export interface ExchangeInformationInterface {
  timezone: string;
  serverTime: number;
  symbols: SymbolInterface[];
}
