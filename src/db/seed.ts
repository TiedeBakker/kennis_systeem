// src/db/seed.ts

import { db } from "@/db/client/database";

import {
  objects,
  relations,
  relationValues,
  parameters,
  parameterValues,
} from "@/db/schema/schema";

async function seed() {
  //
  // Vaste identifiers
  //

  const object1 = "ks:object-1";
  const object2 = "ks:object-2";

  const relation = "ks:relation-relatedTo";

  const parameterTitle = "ks:parameter-title";
  const parameterCategory = "ks:parameter-category";
  const parameterStatus = "ks:parameter-status";

  //
  // Objecten
  //

  await db.insert(objects).values([
    {
      id: object1,
      label: "Eerste object",
    },
    {
      id: object2,
      label: "Tweede object",
    },
  ]);

  //
  // Relatiedefinitie
  //

  await db.insert(relations).values({
    id: relation,
    label: "relatedTo",
  });

  //
  // Concrete relatie
  //

  await db.insert(relationValues).values({
    id: "ks:relationvalue-1",
    relationId: relation,
    sourceId: object1,
    targetId: object2,
  });

  //
  // Parameterdefinities
  //

  await db.insert(parameters).values([
    {
      id: parameterTitle,
      label: "title",
    },
    {
      id: parameterCategory,
      label: "category",
    },
    {
      id: parameterStatus,
      label: "status",
    },
  ]);

  //
  // Parameterwaarden
  //

  await db.insert(parameterValues).values([
    {
      id: "ks:parametervalue-1",
      parameterId: parameterTitle,
      objectId: object1,
      value: "Eerste object",
    },
    {
      id: "ks:parametervalue-2",
      parameterId: parameterCategory,
      objectId: object1,
      value: "Demo",
    },
    {
      id: "ks:parametervalue-3",
      parameterId: parameterStatus,
      objectId: object1,
      value: "Actief",
    },
  ]);

  console.log("Database gevuld.");
}

seed().catch(console.error);