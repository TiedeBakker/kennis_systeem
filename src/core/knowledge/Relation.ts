// src/core/knowledge/Relation.ts

// import type { Identifier } from "@/core";

// /**
//  * Relation
//  *
//  * Verbindt twee objecten.
//  */
// export interface Relation {
//   readonly id: Identifier;
//   readonly source: Identifier;
//   readonly target: Identifier;
//   readonly type: string;
// }


import type { Identifier } from "@/core";

/**
 * Relation
 *
 * Definieert een relatietype.
 */
export interface Relation {
  readonly id: Identifier;

  /**
   * Menselijk leesbare naam.
   *
   * Bijvoorbeeld:
   * - bevindtZichIn
   * - onderdeelVan
   * - gemaaktDoor
   */
  readonly label: string;
}