// src/core/store/SQLiteKnowledgeStore.ts
import { eq, or, sql } from "drizzle-orm";

import {
    objects,
    relations,
    relationValues,
    parameters,
    parameterValues,
} from "@/db/schema/schema";

import type {
    Identifier,
    KnowledgeStore,
    Object,
    Relation,
    RelationValue,
    Parameter,
    ParameterValue,
} from "@/core";

import { db } from "@/db/client/database";

export class SQLiteKnowledgeStore implements KnowledgeStore {

    async getObject(id: Identifier): Promise<Object | null> {
        const key = this.key(id);

        const rows = await db
            .select()
            .from(objects)
            .where(eq(objects.id, key))
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
        };
    }

    async getRelation(_id: Identifier): Promise<Relation | null> {
        return null;
    }

    async getParameter(_id: Identifier): Promise<Parameter | null> {
        return null;
    }

    async getRelationsForObject(
        _id: Identifier,
    ): Promise<Relation[]> {
        return [];
    }

    async getParametersForObject(
        _id: Identifier,
    ): Promise<Parameter[]> {
        return [];
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


    async getRelationValue(
        id: Identifier,
    ): Promise<RelationValue | null> {

        const rows = await db
            .select({
                id: relationValues.id,
                sourceId: relationValues.sourceId,
                targetId: relationValues.targetId,
                relationId: relationValues.relationId,
            })
            .from(relationValues)
            .where(eq(relationValues.id, this.key(id)))
            .limit(1);

        if (rows.length === 0) {
            return null;
        }

        const row = rows[0];

        return {
            id: this.identifier(row.id),
            source: this.identifier(row.sourceId),
            target: this.identifier(row.targetId),
            relation: this.identifier(row.relationId),
        };
    }

    async getRelationValuesForObject(
        id: Identifier,
    ): Promise<RelationValue[]> {

        const rows = await db
            .select({
                id: relationValues.id,
                sourceId: relationValues.sourceId,
                targetId: relationValues.targetId,
                relationId: relationValues.relationId,
            })
            .from(relationValues)
            .where(
                or(
                    eq(relationValues.sourceId, this.key(id)),
                    eq(relationValues.targetId, this.key(id)),
                ),
            );

        return rows.map((row) => ({
            id: this.identifier(row.id),
            source: this.identifier(row.sourceId),
            target: this.identifier(row.targetId),
            relation: this.identifier(row.relationId),
        }));
    }

    async getParameterValue(
        id: Identifier,
    ): Promise<ParameterValue | null> {

        const rows = await db
            .select({
                id: parameterValues.id,
                objectId: parameterValues.objectId,
                value: parameterValues.value,
                parameterId: parameterValues.parameterId,
            })
            .from(parameterValues)
            .where(eq(parameterValues.id, this.key(id)))
            .limit(1);

        if (rows.length === 0) {
            return null;
        }

        const row = rows[0];

        return {
            id: this.identifier(row.id),
            object: this.identifier(row.objectId),
            value: row.value,
            parameter: this.identifier(row.parameterId),
        };
    }

    async getParameterValuesForObject(
        id: Identifier,
    ): Promise<ParameterValue[]> {

        const rows = await db
            .select({
                id: parameterValues.id,
                objectId: parameterValues.objectId,
                value: parameterValues.value,
                parameterId: parameterValues.parameterId,
            })
            .from(parameterValues)
            .where(eq(parameterValues.objectId, this.key(id)));

        return rows.map((row) => ({
            id: this.identifier(row.id),
            object: this.identifier(row.objectId),
            value: row.value,
           parameter: this.identifier(row.parameterId),
        }));
    }
}