// src/core/knowledge/Object.ts

import type { Identifier } from "@/core";

/**
 * Object
 *
 * Een object is een identificeerbare kennisentiteit.
 */
export interface Object {
  readonly id: Identifier;
}