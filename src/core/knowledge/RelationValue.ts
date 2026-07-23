
/**
 * RelationValue
 *
 * Concrete relatie tussen twee objecten.
 */
import type { Identifier } from "@/core";

import type { Validity } from "./Validity";

export interface RelationValue extends Validity {
  id: Identifier;

  relation: Identifier;

  source: Identifier;
  target: Identifier;
}