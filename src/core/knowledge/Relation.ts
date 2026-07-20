import { Identifier } from "@/core/types";

/**
 * Relation
 *
 * Een kennisentiteit die betekenis geeft
 * aan een verbinding tussen objecten.
 *
 * Deze eerste versie bevat uitsluitend
 * de identiteit van de relatie.
 */
export interface Relation {
  readonly id: Identifier;
}