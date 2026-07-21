// src/core/store/KnowledgeStore.ts

import type {
  Identifier,
  Object,
  Relation,
  RelationValue,
  Parameter,
  ParameterValue,
} from "@/core";

/**
 * KnowledgeStore
 *
 * Interface voor de opslag van kennis.
 *
 * De store is verantwoordelijk voor het
 * opslaan en ophalen van kennisentiteiten.
 */
export interface KnowledgeStore {
  /**
   * Objecten
   */

  getObject(id: Identifier): Promise<Object | null>;

  getRandomObject(): Promise<Object | null>;

  /**
   * Relatiedefinities
   */

  getRelation(id: Identifier): Promise<Relation | null>;

  /**
   * Concrete relaties
   */

  getRelationValue(
    id: Identifier,
  ): Promise<RelationValue | null>;

  getRelationValuesForObject(
    id: Identifier,
  ): Promise<RelationValue[]>;

  /**
   * Parameterdefinities
   */

  getParameter(
    id: Identifier,
  ): Promise<Parameter | null>;

  /**
   * Concrete parameterwaarden
   */

  getParameterValue(
    id: Identifier,
  ): Promise<ParameterValue | null>;

  getParameterValuesForObject(
    id: Identifier,
  ): Promise<ParameterValue[]>;
}