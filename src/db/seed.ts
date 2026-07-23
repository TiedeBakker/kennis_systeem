// src/db/seed.ts

import { db } from "@/db/client/database";

import {
    objectTypes,
    valueTypes,
    units,
    objects,
    relations,
    relationValues,
    parameters,
    parameterValues,
} from "@/db/schema/schema";

async function seed() {

    //
    // Eerst bestaande gegevens verwijderen
    // (ontwikkelmodus: seed moet onbeperkt herhaalbaar zijn)
    //

    await db.delete(parameterValues);
    await db.delete(relationValues);

    await db.delete(parameters);
    await db.delete(relations);

    await db.delete(objects);

    await db.delete(units);
    await db.delete(valueTypes);
    await db.delete(objectTypes);

    //
    // Catalogi
    //

    await db.insert(objectTypes).values([
        {
            id: "ks:objecttype-generic",
            label: "Generic",
        },
    ]);

    await db.insert(valueTypes).values([
        {
            id: "ks:valuetype-string",
            label: "String",
        },
        {
            id: "ks:valuetype-integer",
            label: "Integer",
        },
        {
            id: "ks:valuetype-real",
            label: "Real",
        },
        {
            id: "ks:valuetype-boolean",
            label: "Boolean",
        },
        {
            id: "ks:valuetype-date",
            label: "Date",
        },
    ]);

    await db.insert(units).values([
        {
            id: "ks:unit-none",
            label: "Geen eenheid",
            symbol: "",
        },
    ]);

    //
    // Objecten
    //

    await db.insert(objects).values([
        {
            id: "ks:object-1",
            label: "Eerste object",
            validFrom: null,
            validTo: null,
        },
        {
            id: "ks:object-2",
            label: "Tweede object",
            validFrom: null,
            validTo: null,
        },
    ]);

    //
    // Relatietypen
    //

    await db.insert(relations).values([
        {
            id: "ks:relation-relatedTo",
            label: "relatedTo",
        },
    ]);

    //
    // Relaties
    //

    await db.insert(relationValues).values([
        {
            id: "ks:relationvalue-1",
            relationId: "ks:relation-relatedTo",
            sourceId: "ks:object-1",
            targetId: "ks:object-2",
            validFrom: null,
            validTo: null,
        },
    ]);

    //
    // Parameters
    //

    await db.insert(parameters).values([
        {
            id: "ks:parameter-title",
            label: "title",
            valueTypeId: "ks:valuetype-string",
            unitId: "ks:unit-none",
            validFrom: null,
            validTo: null,
        },
        {
            id: "ks:parameter-category",
            label: "category",
            valueTypeId: "ks:valuetype-string",
            unitId: "ks:unit-none",
            validFrom: null,
            validTo: null,
        },
        {
            id: "ks:parameter-status",
            label: "status",
            valueTypeId: "ks:valuetype-string",
            unitId: "ks:unit-none",
            validFrom: null,
            validTo: null,
        },
    ]);

    //
    // Parameterwaarden
    //

    await db.insert(parameterValues).values([
        {
            id: "ks:parametervalue-1",
            parameterId: "ks:parameter-title",
            objectId: "ks:object-1",
            value: "Eerste object",
            validFrom: null,
            validTo: null,
        },
        {
            id: "ks:parametervalue-2",
            parameterId: "ks:parameter-category",
            objectId: "ks:object-1",
            value: "Demo",
            validFrom: null,
            validTo: null,
        },
        {
            id: "ks:parametervalue-3",
            parameterId: "ks:parameter-status",
            objectId: "ks:object-1",
            value: "Actief",
            validFrom: null,
            validTo: null,
        },
    ]);

    console.log("Database gevuld.");
}

seed().catch(console.error);