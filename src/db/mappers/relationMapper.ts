import type { Relation } from "@/core";

import { relations } from "../schema/schema";


export function toDomain(
    row: typeof relations.$inferSelect
): Relation {

    return {

        id: row.id,

        label: row.label,

    };

}


export function toInsertRow(
    relation: Relation
): typeof relations.$inferInsert {

    return {

        id: relation.id,

        label: relation.label,

    };

}


export function toUpdateRow(
    relation: Relation
) {

    return {

        label: relation.label,

    };

}