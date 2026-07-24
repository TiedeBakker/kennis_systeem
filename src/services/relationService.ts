import { randomUUID } from "crypto";

import type {
    Identifier,
    Relation,
} from "@/core";

import { relationRepository } from "@/db/repositories/relationRepository";


async function getRelations(): Promise<Relation[]> {

    return relationRepository.getAll();

}


async function getRelation(
    id: Identifier
): Promise<Relation | null> {

    return relationRepository.getById(id);

}


async function createRelation(
    label: string
): Promise<Relation> {

    const relation: Relation = {

        id: randomUUID(),

        label,

    };

    await relationRepository.insert(relation);

    return relation;

}


async function updateRelation(
    relation: Relation
): Promise<Relation> {

    await relationRepository.update(relation);

    return relation;

}


async function deleteRelation(
    id: Identifier
): Promise<void> {

    await relationRepository.remove(id);

}


export const relationService = {

    getRelations,

    getRelation,

    createRelation,

    updateRelation,

    deleteRelation,

};