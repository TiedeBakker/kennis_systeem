import {
  sqliteTable,
  text,
  index,
} from "drizzle-orm/sqlite-core";

/**
 * Objects
 */

export const objects = sqliteTable("objects", {
  id: text("id").primaryKey(),
});

/**
 * Relations
 */

export const relations = sqliteTable(
  "relations",
  {
    id: text("id").primaryKey(),

    source_id: text("source_id").notNull(),
    target_id: text("target_id").notNull(),

    type: text("type").notNull(),
  },
  (table) => ({
    sourceIdx: index("relations_source_idx").on(table.source_id),

    targetIdx: index("relations_target_idx").on(table.target_id),
  }),
);

/**
 * Parameters
 */

export const parameters = sqliteTable(
  "parameters",
  {
    id: text("id").primaryKey(),

    object_id: text("object_id").notNull(),

    name: text("name").notNull(),
    value: text("value").notNull(),
  },
  (table) => ({
    objectIdx: index("parameters_object_idx").on(table.object_id),
  }),
);