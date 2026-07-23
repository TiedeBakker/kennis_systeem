// src/db/schema/schema.ts

import {
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";

//
// Catalogi
//

export const objectTypes = sqliteTable("object_types", {
  id: text("id").primaryKey(),
  label: text("label").notNull(),
});

export const valueTypes = sqliteTable("value_types", {
  id: text("id").primaryKey(),
  label: text("label").notNull(),
});

export const units = sqliteTable("units", {
  id: text("id").primaryKey(),
  label: text("label").notNull(),
  symbol: text("symbol").notNull(),
});

//
// Objecten
//

export const objects = sqliteTable("objects", {
  id: text("id").primaryKey(),

  label: text("label").notNull(),

  validFrom: text("valid_from"),
  validTo: text("valid_to"),
});

//
// Relatietypen
//

export const relations = sqliteTable("relations", {
  id: text("id").primaryKey(),

  label: text("label").notNull(),
});

//
// Concrete relaties
//

export const relationValues = sqliteTable("relation_values", {
  id: text("id").primaryKey(),

  relationId: text("relation_id")
    .notNull()
    .references(() => relations.id),

  sourceId: text("source_id")
    .notNull()
    .references(() => objects.id),

  targetId: text("target_id")
    .notNull()
    .references(() => objects.id),

  validFrom: text("valid_from"),
  validTo: text("valid_to"),
});

//
// Parameterdefinities
//

export const parameters = sqliteTable("parameters", {
  id: text("id").primaryKey(),

  label: text("label").notNull(),

  valueTypeId: text("value_type_id")
    .references(() => valueTypes.id),

  unitId: text("unit_id")
    .references(() => units.id),

  validFrom: text("valid_from"),
  validTo: text("valid_to"),
});

//
// Parameterwaarden
//

export const parameterValues = sqliteTable("parameter_values", {
  id: text("id").primaryKey(),

  parameterId: text("parameter_id")
    .notNull()
    .references(() => parameters.id),

  objectId: text("object_id")
    .notNull()
    .references(() => objects.id),

  value: text("value").notNull(),

  validFrom: text("valid_from"),
  validTo: text("valid_to"),
});