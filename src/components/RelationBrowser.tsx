"use client";

import { useEffect, useState } from "react";

import type { Relation } from "@/core";

import RelationEditor
    from "./RelationEditor";

export default function RelationBrowser() {

    const [items, setItems] =
        useState<Relation[]>([]);

    const [selected, setSelected] =
        useState<Relation | null>(null);


    async function load() {

        const response =
            await fetch("/api/relations");

        const data: Relation[] =
            await response.json();

        setItems(data);

    }


    useEffect(() => {

        load();

    }, []);


    return (

        <div className="grid grid-cols-2 gap-6">

            <section>

                <h2 className="font-bold mb-2">

                    Relaties

                </h2>

                <button
                    className="border px-3 py-1 mb-3"
                    onClick={() =>
                        setSelected(null)
                    }
                >
                    Nieuwe relatie
                </button>

                <ul className="border">

                    {items.map(relation => (

                        <li
                            key={relation.id}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() =>
                                setSelected(relation)
                            }
                        >
                            {relation.label}
                        </li>

                    ))}

                </ul>

            </section>


            <RelationEditor
                relation={selected}
                onSaved={async (
                    relation: Relation | null
                ) => {

                    await load();

                    setSelected(relation);

                }}
            />

        </div>

    );

}