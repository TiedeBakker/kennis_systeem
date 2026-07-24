import { eq } from "drizzle-orm";

import { db } from "@/db";

import type {
    Identifier,
    Relation,
} from "@/core";

import { relations } from "../schema/schema";

import {
    toDomain,
    toInsertRow,
    toUpdateRow,
} from "../mappers/relationMapper";


async function getAll(): Promise<Relation[]> {

    const rows = await db
        .select()
        .from(relations)
        .orderBy(relations.label);

    return rows.map(toDomain);

}


async function getById(
    id: Identifier
): Promise<Relation | null> {

    const rows = await db
        .select()
        .from(relations)
        .where(eq(relations.id, id));

    if (rows.length === 0) {
        return null;
    }

    return toDomain(rows[0]);

}


async function insert(
    relation: Relation
): Promise<void> {

    await db
        .insert(relations)
        .values(toInsertRow(relation));

}


async function update(
    relation: Relation
): Promise<void> {

    await db
        .update(relations)
        .set(toUpdateRow(relation))
        .where(eq(relations.id, relation.id));

}


async function remove(
    id: Identifier
): Promise<void> {

    await db
        .delete(relations)
        .where(eq(relations.id, id));

}


export const relationRepository = {

    getAll,

    getById,

    insert,

    update,

    remove,

};