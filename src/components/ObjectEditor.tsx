//src/components/ObjectEditor.tsx
"use client";

import { useEffect, useState } from "react";

import type { Object } from "@/core";

interface Props {
    object: Object | null;
    onSaved: (object: Object | null) => void | Promise<void>;
}

export default function ObjectEditor({
    object,
    onSaved,
}: Props) {

    const [label, setLabel] = useState("");

    useEffect(() => {
        setLabel(object?.label ?? "");
    }, [object]);

    async function save() {

        const method = object ? "PUT" : "POST";

        const body = object
            ? {
                ...object,
                label,
            }
            : {
                label,
            };

        const response = await fetch("/api/objects", {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        const savedObject: Object = await response.json();

        setLabel("");

        await onSaved(savedObject);
    }

    async function remove() {

        if (!object) return;

        await fetch(`/api/objects?id=${object.id}`, {
            method: "DELETE",
        });

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
                placeholder="Objectnaam"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
            />

            <button
                className="border px-4 py-2 mt-3"
                onClick={save}
            >
                Opslaan
            </button>
            {object && (

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