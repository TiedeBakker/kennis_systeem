import type { Identifier } from "@/core";

/**
 * RelationValue
 *
 * Concrete relatie tussen twee objecten.
 */
export interface RelationValue {
  readonly id: Identifier;

  /**
   * Verwijzing naar de relatiedefinitie.
   */
  readonly relation: Identifier;

  /**
   * Bronobject.
   */
  readonly source: Identifier;

  /**
   * Doelobject.
   */
  readonly target: Identifier;
}