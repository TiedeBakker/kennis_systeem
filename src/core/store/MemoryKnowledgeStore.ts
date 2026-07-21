// src/core/store/MemoryKnowledgeStore.ts

import type {
  Identifier,
  KnowledgeStore,
  Object,
  Relation,
  RelationValue,
  Parameter,
  ParameterValue,
} from "@/core";

/**
 * MemoryKnowledgeStore
 *
 * Eenvoudige implementatie van KnowledgeStore.
 *
 * Alle gegevens worden uitsluitend in het geheugen
 * bewaard en zijn bedoeld voor ontwikkeling en testen.
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
    };

    const object2: Object = {
      id: {
        namespace: "ks",
        value: crypto.randomUUID(),
      },
      label: "Tweede object",
    };

    this.objects.set(this.key(object1.id), object1);
    this.objects.set(this.key(object2.id), object2);

    //
    // Parameterdefinities
    //

    const titleParameter: Parameter = {
      id: {
        namespace: "ks",
        value: crypto.randomUUID(),
      },
      label: "title",
    };

    const categoryParameter: Parameter = {
      id: {
        namespace: "ks",
        value: crypto.randomUUID(),
      },
      label: "category",
    };

    const statusParameter: Parameter = {
      id: {
        namespace: "ks",
        value: crypto.randomUUID(),
      },
      label: "status",
    };

    for (const parameter of [
      titleParameter,
      categoryParameter,
      statusParameter,
    ]) {
      this.parameters.set(this.key(parameter.id), parameter);
    }

    //
    // Parameterwaarden
    //

    const parameterValues: ParameterValue[] = [
      {
        id: {
          namespace: "ks",
          value: crypto.randomUUID(),
        },
        parameter: titleParameter.id,
        object: object1.id,
        value: "Eerste object",
      },
      {
        id: {
          namespace: "ks",
          value: crypto.randomUUID(),
        },
        parameter: categoryParameter.id,
        object: object1.id,
        value: "Demo",
      },
      {
        id: {
          namespace: "ks",
          value: crypto.randomUUID(),
        },
        parameter: statusParameter.id,
        object: object1.id,
        value: "Actief",
      },
    ];

    for (const parameterValue of parameterValues) {
      this.parameterValues.set(
        this.key(parameterValue.id),
        parameterValue,
      );
    }

    //
    // Relatiedefinitie
    //

    const relation: Relation = {
      id: {
        namespace: "ks",
        value: crypto.randomUUID(),
      },
      label: "relatedTo",
    };

    this.relations.set(this.key(relation.id), relation);

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
    };

    this.relationValues.set(
      this.key(relationValue.id),
      relationValue,
    );
  }

  //
  // Objecten
  //

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

  //
  // Relatiedefinities
  //

  async getRelation(
    id: Identifier,
  ): Promise<Relation | null> {
    return this.relations.get(this.key(id)) ?? null;
  }

  //
  // Concrete relaties
  //

  async getRelationValue(
    id: Identifier,
  ): Promise<RelationValue | null> {
    return this.relationValues.get(this.key(id)) ?? null;
  }

  async getRelationValuesForObject(
    id: Identifier,
  ): Promise<RelationValue[]> {
    return Array.from(this.relationValues.values()).filter(
      relationValue =>
        this.key(relationValue.source) === this.key(id) ||
        this.key(relationValue.target) === this.key(id),
    );
  }

  //
  // Parameterdefinities
  //

  async getParameter(
    id: Identifier,
  ): Promise<Parameter | null> {
    return this.parameters.get(this.key(id)) ?? null;
  }

  //
  // Parameterwaarden
  //

  async getParameterValue(
    id: Identifier,
  ): Promise<ParameterValue | null> {
    return this.parameterValues.get(this.key(id)) ?? null;
  }

  async getParameterValuesForObject(
    id: Identifier,
  ): Promise<ParameterValue[]> {
    return Array.from(this.parameterValues.values()).filter(
      parameterValue =>
        this.key(parameterValue.object) === this.key(id),
    );
  }

  //
  // Helpers
  //

  private key(id: Identifier): string {
    return `${id.namespace}:${id.value}`;
  }
}