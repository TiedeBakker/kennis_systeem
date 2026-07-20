import { Identifier } from "@/core/types";

/**
 * Object
 *
 * Een zelfstandig identificeerbare kennisentiteit.
 *
 * Een Object kan bestaan zonder relaties,
 * parameters of waarden.
 */
export interface Object {
  readonly id: Identifier;
}