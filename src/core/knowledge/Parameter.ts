import { Identifier } from "@/core/types";

/**
 * Parameter
 *
 * Een kennisentiteit die vastlegt welke
 * eigenschap of welk kenmerk van een
 * kennisentiteit beschreven kan worden.
 *
 * Deze eerste versie bevat uitsluitend
 * de identiteit van de parameter.
 */
export interface Parameter {
  readonly id: Identifier;
}