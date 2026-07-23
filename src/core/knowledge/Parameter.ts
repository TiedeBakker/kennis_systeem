
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
import type { Identifier } from "@/core";

import type { Validity } from "./Validity";

export interface Parameter extends Validity {
  id: Identifier;
  label: string;

  valueType: Identifier | null;
  unit: Identifier | null;
}