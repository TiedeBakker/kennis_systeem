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
  private readonly relations = new Map<string, Relation>();

  private readonly parameters = new Map<string, Parameter>();

  constructor() {
    // src/core/store/MemoryKnowledgeStore.ts
    // constructor()

    const object1: Object = {
      id: {
        namespace: "ks",
        value: crypto.randomUUID(),
      },
    };

    const object2: Object = {
      id: {
        namespace: "ks",
        value: crypto.randomUUID(),
      },

    };
    const parameters: Parameter[] = [
      {
        id: { namespace: "ks", value: crypto.randomUUID() },
        object: object1.id,
        name: "title",
        value: "Eerste object",
      },
      {
        id: { namespace: "ks", value: crypto.randomUUID() },
        object: object1.id,
        name: "category",
        value: "Demo",
      },
      {
        id: { namespace: "ks", value: crypto.randomUUID() },
        object: object1.id,
        name: "status",
        value: "Actief",
      },
    ];

    for (const parameter of parameters) {
      this.parameters.set(this.key(parameter.id), parameter);
    }

    const relation: Relation = {
      id: {
        namespace: "ks",
        value: crypto.randomUUID(),
      },
      source: object1.id,
      target: object2.id,
    };

    this.relations.set(this.key(relation.id), relation);

    const objects = [object1, object2];

    for (const object of objects) {
      this.objects.set(this.key(object.id), object);
    }

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

  async getRelationsForObject(
    id: Identifier,
  ): Promise<Relation[]> {
    return Array.from(this.relations.values()).filter(
      relation =>
        this.key(relation.source) === this.key(id) ||
        this.key(relation.target) === this.key(id),
    );
  }

  async getParametersForObject(
    id: Identifier,
  ): Promise<Parameter[]> {
    return Array.from(this.parameters.values()).filter(
      parameter => this.key(parameter.object) === this.key(id),
    );
  }


  private key(id: Identifier): string {
    return `${id.namespace}:${id.value}`;
  }
}