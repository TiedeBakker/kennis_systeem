import type {
  Identifier,
  KnowledgeStore,
  Object,
  Parameter,
  Relation,
} from "@/core";

/**
 * MemoryKnowledgeStore
 *
 * Eenvoudige implementatie van KnowledgeStore.
 *
 * De gegevens worden uitsluitend in het geheugen
 * bewaard en zijn bedoeld voor ontwikkeling
 * en testen.
 */
export class MemoryKnowledgeStore implements KnowledgeStore {
  private readonly objects = new Map<string, Object>();

  constructor() {
    const object: Object = {
      id: {
        namespace: "ks",
        value: crypto.randomUUID(),
      },
    };

    this.objects.set(this.key(object.id), object);
  }

  async getObject(id: Identifier): Promise<Object | null> {
    return this.objects.get(this.key(id)) ?? null;
  }

  async getRandomObject(): Promise<Object | null> {
    const objects = Array.from(this.objects.values());

    if (objects.length === 0) {
      return null;
    }

    const index = Math.floor(Math.random() * objects.length);

    return objects[index];
  }

  async getRelation(_id: Identifier): Promise<Relation | null> {
    return null;
  }

  async getParameter(_id: Identifier): Promise<Parameter | null> {
    return null;
  }


  private key(id: Identifier): string {
    return `${id.namespace}:${id.value}`;
  }
}