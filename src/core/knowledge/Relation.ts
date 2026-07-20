// src/core/knowledge/Relation.ts

import type { Identifier } from "@/core";

/**
 * Relation
 *
 * Verbindt twee objecten.
 */
export interface Relation {
  readonly id: Identifier;

  readonly source: Identifier;

  readonly target: Identifier;
}