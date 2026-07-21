import type { Identifier } from "@/core";

/**
 * Parameter
 *
 * Definieert een parameter.
 *
 * Bijvoorbeeld:
 * - geboortedatum
 * - gewicht
 * - inventarisnummer
 */
export interface Parameter {
  readonly id: Identifier;

  readonly label: string;
}