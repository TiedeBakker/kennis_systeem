import type { Identifier } from "@/core";
import type { Object, Relation, Parameter } from "@/core";

/**
 * KnowledgeStore
 *
 * Verzorgt de opslag en het terugvinden
 * van kennisentiteiten.
 *
 * De implementatie kan gebruikmaken van
 * één of meerdere databronnen.
 */
export interface KnowledgeStore {
  getObject(id: Identifier): Promise<Object | null>;

  getRelation(id: Identifier): Promise<Relation | null>;

  getParameter(id: Identifier): Promise<Parameter | null>;

  getRandomObject(): Promise<Object | null>;
}