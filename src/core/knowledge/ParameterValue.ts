import type { Identifier } from "@/core";

/**
 * ParameterValue
 *
 * Concrete waarde van een parameter
 * voor één object.
 */
export interface ParameterValue {
  readonly id: Identifier;

  /**
   * Verwijzing naar de parameterdefinitie.
   */
  readonly parameter: Identifier;

  /**
   * Object waarvoor deze waarde geldt.
   */
  readonly object: Identifier;

  readonly value: string;
}