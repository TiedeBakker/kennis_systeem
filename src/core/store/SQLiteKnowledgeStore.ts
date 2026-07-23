// src/core/store/SQLiteKnowledgeStore.ts
import { eq, or, sql } from "drizzle-orm";

import type {
  Identifier,
  KnowledgeStore,
  Object,
  Parameter,
  ParameterValue,
  Relation,
  RelationValue,
} from "@/core";

import { db } from "@/db/client/database";

import {
  objects,
  parameters,
  parameterValues,
  relations,
  relationValues,
} from "@/db/schema/schema";

export class SQLiteKnowledgeStore implements KnowledgeStore {

  async getObject(id: Identifier): Promise<Object | null> {

    const rows = await db
      .select()
      .from(objects)
      .where(eq(objects.id, this.key(id)))
      .limit(1);

    if (rows.length === 0) {
      return null;
    }

    const row = rows[0];

    return {
      id: this.identifier(row.id),
      label: row.label,
      validFrom: this.toDate(row.validFrom),
      validTo: this.toDate(row.validTo),
    };
  }

  async getRandomObject(): Promise<Object | null> {

    const rows = await db
      .select()
      .from(objects)
      .orderBy(sql`RANDOM()`)
      .limit(1);

    if (rows.length === 0) {
      return null;
    }

    const row = rows[0];

    return {
      id: this.identifier(row.id),
      label: row.label,
      validFrom: this.toDate(row.validFrom),
      validTo: this.toDate(row.validTo),
    };
  }

  async getRelation(
    id: Identifier,
  ): Promise<Relation | null> {

    const rows = await db
      .select()
      .from(relations)
      .where(eq(relations.id, this.key(id)))
      .limit(1);

    if (rows.length === 0) {
      return null;
    }

    const row = rows[0];

    return {
      id: this.identifier(row.id),
      label: row.label,
    };
  }

  async getParameter(
    id: Identifier,
  ): Promise<Parameter | null> {

    const rows = await db
      .select()
      .from(parameters)
      .where(eq(parameters.id, this.key(id)))
      .limit(1);

    if (rows.length === 0) {
      return null;
    }

    const row = rows[0];

    return {
      id: this.identifier(row.id),
      label: row.label,

      valueType:
        row.valueTypeId == null
          ? null
          : this.identifier(row.valueTypeId),

      unit:
        row.unitId == null
          ? null
          : this.identifier(row.unitId),

      validFrom: this.toDate(row.validFrom),
      validTo: this.toDate(row.validTo),
    };
  }

  async getRelationValue(
    id: Identifier,
  ): Promise<RelationValue | null> {

    const rows = await db
      .select()
      .from(relationValues)
      .where(eq(relationValues.id, this.key(id)))
      .limit(1);

    if (rows.length === 0) {
      return null;
    }

    const row = rows[0];

    return {
      id: this.identifier(row.id),

      relation: this.identifier(row.relationId),

      source: this.identifier(row.sourceId),
      target: this.identifier(row.targetId),

      validFrom: this.toDate(row.validFrom),
      validTo: this.toDate(row.validTo),
    };
  }
    async getRelationValuesForObject(
    id: Identifier,
  ): Promise<RelationValue[]> {

    const rows = await db
      .select()
      .from(relationValues)
      .where(
        or(
          eq(relationValues.sourceId, this.key(id)),
          eq(relationValues.targetId, this.key(id)),
        ),
      );

    return rows.map((row) => ({
      id: this.identifier(row.id),

      relation: this.identifier(row.relationId),

      source: this.identifier(row.sourceId),
      target: this.identifier(row.targetId),

      validFrom: this.toDate(row.validFrom),
      validTo: this.toDate(row.validTo),
    }));
  }

  async getParameterValue(
    id: Identifier,
  ): Promise<ParameterValue | null> {

    const rows = await db
      .select()
      .from(parameterValues)
      .where(eq(parameterValues.id, this.key(id)))
      .limit(1);

    if (rows.length === 0) {
      return null;
    }

    const row = rows[0];

    return {
      id: this.identifier(row.id),

      parameter: this.identifier(row.parameterId),
      object: this.identifier(row.objectId),

      value: row.value,

      validFrom: this.toDate(row.validFrom),
      validTo: this.toDate(row.validTo),
    };
  }

  async getParameterValuesForObject(
    id: Identifier,
  ): Promise<ParameterValue[]> {

    const rows = await db
      .select()
      .from(parameterValues)
      .where(eq(parameterValues.objectId, this.key(id)));

    return rows.map((row) => ({
      id: this.identifier(row.id),

      parameter: this.identifier(row.parameterId),
      object: this.identifier(row.objectId),

      value: row.value,

      validFrom: this.toDate(row.validFrom),
      validTo: this.toDate(row.validTo),
    }));
  }

  private key(id: Identifier): string {
    return `${id.namespace}:${id.value}`;
  }

  private identifier(key: string): Identifier {
    const index = key.indexOf(":");

    return {
      namespace: key.substring(0, index),
      value: key.substring(index + 1),
    };
  }

  private toDate(
    value: string | null,
  ): Date | null {

    if (value == null) {
      return null;
    }

    return new Date(value);
  }
}