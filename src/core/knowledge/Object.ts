import type { Identifier } from "@/core";

/**
 * Object
 *
 * Een identificeerbare kennisentiteit.
 */
export interface Object {
  readonly id: Identifier;

   readonly label: string;
}