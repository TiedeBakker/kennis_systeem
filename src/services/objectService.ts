// src/services/objectService.ts

import { randomUUID } from "crypto";

import type { Identifier, Object } from "@/core";

import { objectRepository } from "@/db/repositories/objectRepository";


async function getObjects(): Promise<Object[]> {

    return objectRepository.getAll();

}


async function getObject(
    id: Identifier
): Promise<Object | null> {

    return objectRepository.getById(id);

}


async function createObject(
    label: string
): Promise<Object> {

    const object: Object = {

        id: randomUUID(),

        label,

        validity: {
            from: null,
            to: null,
        },

    };

    await objectRepository.insert(object);

    return object;

}


async function updateObject(
    object: Object
): Promise<Object> {

    await objectRepository.update(object);

    return object;

}


async function deleteObject(
    id: Identifier
): Promise<void> {

    await objectRepository.remove(id);

}


export const objectService = {

    getObjects,

    getObject,

    createObject,

    updateObject,

    deleteObject,

};