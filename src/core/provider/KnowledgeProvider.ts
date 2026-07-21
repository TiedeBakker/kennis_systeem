import type {
  Identifier,
  Object,
  Relation,
  RelationValue,
  Parameter,
  ParameterValue,
} from "@/core";

/**
 * KnowledgeProvider
 *
 * Publieke toegangspoort tot het kennismodel.
 *
 * De provider coördineert de toegang tot kennis,
 * maar kent niets van de onderliggende opslag.
 */
export interface KnowledgeProvider {
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