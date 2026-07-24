// src/db/repositories/objectRepository.ts

import { eq } from "drizzle-orm";

import { db } from "@/db";
import type { Identifier, Object } from "@/core";

import { objects } from "../schema/schema";
import {
    toDomain,
    toInsertRow,
    toUpdateRow,
} from "../mappers/objectMapper";


async function getAll(): Promise<Object[]> {

    const rows = await db
        .select()
        .from(objects)
        .orderBy(objects.label);

    return rows.map(toDomain);
}


async function getById(
    id: Identifier
): Promise<Object | null> {

    const rows = await db
        .select()
        .from(objects)
        .where(eq(objects.id, id));

    if (rows.length === 0) {
        return null;
    }

    return toDomain(rows[0]);
}


async function insert(
    object: Object
): Promise<void> {

    await db
        .insert(objects)
        .values(toInsertRow(object));
}


async function update(
    object: Object
): Promise<void> {

    await db
        .update(objects)
        .set(toUpdateRow(object))
        .where(eq(objects.id, object.id));
}


async function remove (
    id: Identifier
): Promise < void> {

    await db
        .delete(objects)
        .where(eq(objects.id, id));
}


export const objectRepository = {

    getAll,

    getById,

    insert,

    update,

    remove,

};