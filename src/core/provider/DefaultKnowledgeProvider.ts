import type {
  Identifier,
  KnowledgeProvider,
  KnowledgeStore,
  Object,
  Parameter,
  Relation,
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
  ) { }

  async getObject(id: Identifier): Promise<Object | null> {
    return this.store.getObject(id);
  }

  async getRelation(id: Identifier): Promise<Relation | null> {
    return this.store.getRelation(id);
  }

  async getParameter(id: Identifier): Promise<Parameter | null> {
    return this.store.getParameter(id);
  }

  async getRandomObject(): Promise<Object | null> {
    return this.store.getRandomObject();
  }

  async getRelationsForObject(
    id: Identifier,
  ): Promise<Relation[]> {
    return this.store.getRelationsForObject(id);
  }

  async getParametersForObject(
    id: Identifier,
  ): Promise<Parameter[]> {
    return this.store.getParametersForObject(id);
  }
}