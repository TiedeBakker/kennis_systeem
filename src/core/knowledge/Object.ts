

/**
 * Object
 *
 * Een identificeerbare kennisentiteit.
 */
import type { Identifier } from "@/core";

import type { Validity } from "./Validity";

export interface Object extends Validity {
  id: Identifier;
  label: string;
}