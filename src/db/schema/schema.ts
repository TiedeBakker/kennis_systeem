// src/db/schema/schema.ts

import {
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";

/**
 * Objecten
 */
export const objects = sqliteTable("objects", {
  id: text("id").primaryKey(),
  label: text("label").notNull(),
});

/**
 * Relatiedefinities
 */
export const relations = sqliteTable("relations", {
  id: text("id").primaryKey(),
  label: text("label").notNull(),
});

/**
 * Concrete relaties
 */
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
});

/**
 * Parameterdefinities
 */
export const parameters = sqliteTable("parameters", {
  id: text("id").primaryKey(),
  label: text("label").notNull(),
});

/**
 * Concrete parameterwaarden
 */
export const parameterValues = sqliteTable("parameter_values", {
  id: text("id").primaryKey(),

  parameterId: text("parameter_id")
    .notNull()
    .references(() => parameters.id),

  objectId: text("object_id")
    .notNull()
    .references(() => objects.id),

  value: text("value").notNull(),
});
