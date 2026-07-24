"use client";

import { useEffect, useState } from "react";

import type { Relation } from "@/core";

interface Props {

    relation: Relation | null;

    onSaved:
        (relation: Relation | null)
        => void | Promise<void>;

}

export default function RelationEditor({

    relation,

    onSaved,

}: Props) {

    const [label, setLabel] =
        useState("");

    useEffect(() => {

        setLabel(relation?.label ?? "");

    }, [relation]);



    async function save() {

        const method =
            relation ? "PUT" : "POST";

        const body =
            relation
                ? {
                    ...relation,
                    label,
                }
                : {
                    label,
                };

        const response =
            await fetch(
                "/api/relations",
                {
                    method,
                    headers: {
                        "Content-Type":
                            "application/json",
                    },
                    body: JSON.stringify(body),
                }
            );

        const savedRelation =
            await response.json();

        setLabel("");

        await onSaved(savedRelation);

    }



    async function remove() {

        if (!relation) return;

        await fetch(
            `/api/relations?id=${relation.id}`,
            {
                method: "DELETE",
            }
        );

        setLabel("");

        await onSaved(null);

    }


    return (

        <div>

            <h2 className="font-bold mb-2">

                Details

            </h2>

            <input
                className="border p-2 w-full"
                value={label}
                placeholder="Relatienaam"
                onChange={(e) =>
                    setLabel(e.target.value)
                }
            />

            <button
                className="border px-4 py-2 mt-3"
                onClick={save}
            >
                Opslaan
            </button>

            {relation && (

                <button
                    className="border px-4 py-2 mt-3 ml-3"
                    onClick={remove}
                >
                    Verwijderen
                </button>

            )}

        </div>

    );

}