// src/core/knowledge/Parameter.ts

import type { Identifier } from "@/core";

/**
 * Parameter
 *
 * Beschrijft een eigenschap van een object.
 */
export interface Parameter {
  readonly id: Identifier;
  readonly object: Identifier;
  readonly name: string;
  readonly value: string;
}