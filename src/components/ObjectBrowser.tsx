//src/components/ObjectBrowser.tsx
"use client";

import { useEffect, useState } from "react";

import type { Object } from "@/core";

import ObjectEditor from "./ObjectEditor";

export default function ObjectBrowser() {

    const [items, setItems] = useState<Object[]>([]);

    const [selected, setSelected] = useState<Object | null>(null);

    async function load() {

        const response = await fetch("/api/objects");

        const data: Object[] = await response.json();

        setItems(data);

    }

    useEffect(() => {
        load();
    }, []);

    return (

        <div className="grid grid-cols-2 gap-6">

            <section>

                <h2 className="font-bold mb-2">
                    Objecten
                </h2>

                <button
                    className="border px-3 py-1 mb-3"
                    onClick={() => setSelected(null)}
                >
                    Nieuw object
                </button>

                <ul className="border">

                    {items.map((object) => (

                        <li
                            key={object.id}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => setSelected(object)}
                        >
                            {object.label}
                        </li>

                    ))}

                </ul>

            </section>

            <ObjectEditor
                object={selected}
                onSaved={async (savedObject: Object | null) => {

                    await load();

                    setSelected(savedObject);

                }}
            />

        </div>

    );

}