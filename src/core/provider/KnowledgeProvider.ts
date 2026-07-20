import type { Identifier } from "@/core";
import type { Object, Relation, Parameter } from "@/core";

/**
 * KnowledgeProvider
 *
 * Centraal toegangspunt tot alle kennis.
 *
 * De implementatie wordt in latere sprints
 * stap voor stap uitgebreid.
 */
export interface KnowledgeProvider {
  getObject(id: Identifier): Promise<Object | null>;

  getRelation(id: Identifier): Promise<Relation | null>;

  getParameter(id: Identifier): Promise<Parameter | null>;

  getRandomObject(): Promise<Object | null>;
  getRelationsForObject(id: Identifier): Promise<Relation[]>;

  getParametersForObject(id: Identifier): Promise<Parameter[]>;
}