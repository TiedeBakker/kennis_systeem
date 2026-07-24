// src/db/mappers/objectMapper.ts

import type { Object } from "@/core";
import { objects } from "../schema/schema";


export function toDomain(
    row: typeof objects.$inferSelect
): Object {

    return {

        id: row.id,

        label: row.label,

        validity: {

            from: row.validFrom,

            to: row.validTo,

        },

    };

}


export function toInsertRow(
    object: Object
): typeof objects.$inferInsert {

    return {

        id: object.id,

        label: object.label,

        validFrom: object.validity.from,

        validTo: object.validity.to,

    };

}


export function toUpdateRow(
    object: Object
) {

    return {

        label: object.label,

        validFrom: object.validity.from,

        validTo: object.validity.to,

    };

}