/**
 * KnowledgeEntity
 *
 * Gemeenschappelijke basis voor alle fundamentele
 * kennisentiteiten binnen het KennisSysteem.
 *
 * Objecten, relaties en parameters zijn allemaal
 * kennisentiteiten.
 *
 * Deze interface bevat in de eerste versie
 * bewust nog geen eigenschappen.
 *
 * Eerst wordt het begrip vastgelegd.
 * Daarna volgt de geleidelijke uitbreiding.
 */
import type {
  Object,
  Relation,
  RelationValue,
  Parameter,
  ParameterValue,
} from "@/core";

/**
 * Alle kennisentiteiten.
 */
export type KnowledgeEntity =
  | Object
  | Relation
  | RelationValue
  | Parameter
  | ParameterValue;