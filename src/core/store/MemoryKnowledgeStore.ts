// src/core/store/MemoryKnowledgeStore.ts
// src/core/store/MemoryKnowledgeStore.ts

import type {
  Identifier,
  KnowledgeStore,
  Object,
  Parameter,
  ParameterValue,
  Relation,
  RelationValue,
} from "@/core";

/**
 * MemoryKnowledgeStore
 *
 * Referentie-implementatie van KnowledgeStore.
 * Wordt gebruikt voor testen en vergelijking met
 * SQLiteKnowledgeStore.
 */
export class MemoryKnowledgeStore implements KnowledgeStore {

  private readonly objects = new Map<string, Object>();

  private readonly relations = new Map<string, Relation>();
  private readonly relationValues = new Map<string, RelationValue>();

  private readonly parameters = new Map<string, Parameter>();
  private readonly parameterValues = new Map<string, ParameterValue>();

  constructor() {

    //
    // Objecten
    //

    const object1: Object = {
      id: {
        namespace: "ks",
        value: crypto.randomUUID(),
      },
      label: "Eerste object",
      validFrom: null,
      validTo: null,
    };

    const object2: Object = {
      id: {
        namespace: "ks",
        value: crypto.randomUUID(),
      },
      label: "Tweede object",
      validFrom: null,
      validTo: null,
    };

    //
    // Relatietype
    //

    const relation: Relation = {
      id: {
        namespace: "ks",
        value: crypto.randomUUID(),
      },
      label: "relatedTo",
    };

    //
    // Concrete relatie
    //

    const relationValue: RelationValue = {
      id: {
        namespace: "ks",
        value: crypto.randomUUID(),
      },

      relation: relation.id,

      source: object1.id,
      target: object2.id,

      validFrom: null,
      validTo: null,
    };

    //
    // Parameters
    //

    const title: Parameter = {
      id: {
        namespace: "ks",
        value: crypto.randomUUID(),
      },
      label: "title",
      valueType: null,
      unit: null,
      validFrom: null,
      validTo: null,
    };

    const category: Parameter = {
      id: {
        namespace: "ks",
        value: crypto.randomUUID(),
      },
      label: "category",
      valueType: null,
      unit: null,
      validFrom: null,
      validTo: null,
    };

    const status: Parameter = {
      id: {
        namespace: "ks",
        value: crypto.randomUUID(),
      },
      label: "status",
      valueType: null,
      unit: null,
      validFrom: null,
      validTo: null,
    };

    //
    // Parameterwaarden
    //

    const values: ParameterValue[] = [

      {
        id: {
          namespace: "ks",
          value: crypto.randomUUID(),
        },

        parameter: title.id,
        object: object1.id,

        value: "Eerste object",

        validFrom: null,
        validTo: null,
      },

      {
        id: {
          namespace: "ks",
          value: crypto.randomUUID(),
        },

        parameter: category.id,
        object: object1.id,

        value: "Demo",

        validFrom: null,
        validTo: null,
      },

      {
        id: {
          namespace: "ks",
          value: crypto.randomUUID(),
        },

        parameter: status.id,
        object: object1.id,

        value: "Actief",

        validFrom: null,
        validTo: null,
      },
    ];

    //
    // Maps vullen
    //

    this.objects.set(this.key(object1.id), object1);
    this.objects.set(this.key(object2.id), object2);

    this.relations.set(this.key(relation.id), relation);
    this.relationValues.set(this.key(relationValue.id), relationValue);

    this.parameters.set(this.key(title.id), title);
    this.parameters.set(this.key(category.id), category);
    this.parameters.set(this.key(status.id), status);

    for (const value of values) {
      this.parameterValues.set(this.key(value.id), value);
    }
  }

  async getObject(id: Identifier): Promise<Object | null> {
    return this.objects.get(this.key(id)) ?? null;
  }

  async getRandomObject(): Promise<Object | null> {
    const list = [...this.objects.values()];
    return list[Math.floor(Math.random() * list.length)] ?? null;
  }

  async getRelation(id: Identifier): Promise<Relation | null> {
    return this.relations.get(this.key(id)) ?? null;
  }

  async getParameter(id: Identifier): Promise<Parameter | null> {
    return this.parameters.get(this.key(id)) ?? null;
  }

  async getRelationValue(id: Identifier): Promise<RelationValue | null> {
    return this.relationValues.get(this.key(id)) ?? null;
  }

  async getParameterValue(id: Identifier): Promise<ParameterValue | null> {
    return this.parameterValues.get(this.key(id)) ?? null;
  }

  async getRelationValuesForObject(
    id: Identifier,
  ): Promise<RelationValue[]> {

    return [...this.relationValues.values()].filter(
      rv =>
        this.key(rv.source) === this.key(id) ||
        this.key(rv.target) === this.key(id),
    );
  }

  async getParameterValuesForObject(
    id: Identifier,
  ): Promise<ParameterValue[]> {

    return [...this.parameterValues.values()].filter(
      pv => this.key(pv.object) === this.key(id),
    );
  }

  private key(id: Identifier): string {
    return `${id.namespace}:${id.value}`;
  }
}