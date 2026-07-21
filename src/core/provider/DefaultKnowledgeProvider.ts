// src/core/provider/DefaultKnowledgeProvider.ts

import type {
  Identifier,
  KnowledgeProvider,
  KnowledgeStore,
  Object,
  Relation,
  RelationValue,
  Parameter,
  ParameterValue,
} from "@/core";

/**
 * DefaultKnowledgeProvider
 *
 * Standaardimplementatie van de KnowledgeProvider.
 *
 * De provider coördineert de toegang tot kennis,
 * maar laat de daadwerkelijke opslag over aan
 * een KnowledgeStore.
 */
export class DefaultKnowledgeProvider implements KnowledgeProvider {
  constructor(
    private readonly store: KnowledgeStore,
  ) {}

  /**
   * Objecten
   */

  async getObject(
    id: Identifier,
  ): Promise<Object | null> {
    return this.store.getObject(id);
  }

  async getRandomObject(): Promise<Object | null> {
    return this.store.getRandomObject();
  }

  /**
   * Relatiedefinities
   */

  async getRelation(
    id: Identifier,
  ): Promise<Relation | null> {
    return this.store.getRelation(id);
  }

  /**
   * Concrete relaties
   */

  async getRelationValue(
    id: Identifier,
  ): Promise<RelationValue | null> {
    return this.store.getRelationValue(id);
  }

  async getRelationValuesForObject(
    id: Identifier,
  ): Promise<RelationValue[]> {
    return this.store.getRelationValuesForObject(id);
  }

  /**
   * Parameterdefinities
   */

  async getParameter(
    id: Identifier,
  ): Promise<Parameter | null> {
    return this.store.getParameter(id);
  }

  /**
   * Concrete parameterwaarden
   */

  async getParameterValue(
    id: Identifier,
  ): Promise<ParameterValue | null> {
    return this.store.getParameterValue(id);
  }

  async getParameterValuesForObject(
    id: Identifier,
  ): Promise<ParameterValue[]> {
    return this.store.getParameterValuesForObject(id);
  }
}