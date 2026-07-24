//src/core/entities/Object.ts
import type { Identifier } from "@/core";
import type { Validity } from "@/core";


export interface Object {

    id: Identifier;

    label: string;

    validity: Validity;

}