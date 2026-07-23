

/**
 * ParameterValue
 *
 * Concrete waarde van een parameter
 * voor één object.
 */
import type { Identifier } from "@/core";

import type { Validity } from "./Validity";

export interface ParameterValue extends Validity {
  id: Identifier;

  parameter: Identifier;
  object: Identifier;

  value: string;
}